import 'dotenv/config';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { setServers } from 'node:dns';
import { Counter, Doctor, Patient } from './models.js';

const app = express();
const port = Number(process.env.PORT) || 5000;
const jwtSecret = process.env.JWT_SECRET;
const mongoUri = process.env.MONGODB_URI;

if (!jwtSecret || jwtSecret.length < 32) {
  throw new Error('JWT_SECRET must be set to a random secret of at least 32 characters.');
}
if (!mongoUri) {
  throw new Error('MONGODB_URI is required.');
}

const dnsServers = process.env.MONGODB_DNS_SERVERS?.split(',').map((server) => server.trim()).filter(Boolean);
if (dnsServers?.length) setServers(dnsServers);

app.disable('x-powered-by');
app.use(cors({ origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:4173'] }));
app.use(express.json({ limit: '9mb' }));

function publicPatient(patient) {
  const record = patient.toObject ? patient.toObject() : patient;
  return {
    id: record.patientId,
    name: record.name,
    phone: record.phone,
    age: record.age,
    temperature: record.temperature,
    weight: record.weight,
    systolic: record.systolic,
    diastolic: record.diastolic,
    medicines: record.medicines,
    scans: record.scans || [],
    recommendations: (record.recommendations || []).map((item) => ({
      id: item._id?.toString() || item.id,
      checkup: item.checkup,
      advice: item.advice,
      followUpDate: item.followUpDate,
      doctorName: item.doctorName,
      sentAt: item.sentAt,
    })),
    updatedAt: record.updatedAt,
  };
}

function issueToken(user) {
  return jwt.sign({ sub: user.id, role: user.role, name: user.name }, jwtSecret, { expiresIn: '8h' });
}

function authenticate(request, response, next) {
  const [scheme, token] = (request.headers.authorization || '').split(' ');
  if (scheme !== 'Bearer' || !token) {
    return response.status(401).json({ error: 'Please sign in to continue.' });
  }
  try {
    request.user = jwt.verify(token, jwtSecret);
    return next();
  } catch {
    return response.status(401).json({ error: 'Your session has expired. Please sign in again.' });
  }
}

function requireRole(role) {
  return (request, response, next) => {
    if (request.user?.role !== role) {
      return response.status(403).json({ error: 'You do not have permission to perform this action.' });
    }
    return next();
  };
}

function asyncRoute(handler) {
  return (request, response, next) => Promise.resolve(handler(request, response, next)).catch(next);
}

app.get('/api/health', (_request, response) => {
  const connected = mongoose.connection.readyState === 1;
  response.status(connected ? 200 : 503).json({ status: connected ? 'ok' : 'database_unavailable' });
});

app.post('/api/auth/signup', asyncRoute(async (request, response) => {
  const name = String(request.body.name || '').trim();
  const phone = String(request.body.phone || '').trim();
  const password = String(request.body.password || '');
  if (!name || !phone || password.length < 8) {
    return response.status(400).json({ error: 'Name and phone are required. Password must be at least 8 characters.' });
  }

  const counter = await Counter.findByIdAndUpdate('patient', { $inc: { sequence: 1 } }, { new: true, upsert: true });
  const patientId = `CHH-${String(counter.sequence).padStart(6, '0')}`;
  const patient = await Patient.create({ patientId, name, phone, passwordHash: await bcrypt.hash(password, 12) });
  const user = { id: patient.patientId, role: 'patient', name: patient.name };
  return response.status(201).json({ token: issueToken(user), user });
}));

app.post('/api/auth/login', asyncRoute(async (request, response) => {
  const role = request.body.role;
  if (!['doctor', 'patient'].includes(role)) {
    return response.status(400).json({ error: 'Choose a valid account type.' });
  }
  const id = String(request.body.id || '').trim();
  const password = String(request.body.password || '');
  if (!id || !password) return response.status(400).json({ error: 'ID and password are required.' });

  let user;
  let passwordHash;
  if (role === 'doctor') {
    const doctor = await Doctor.findOne({ doctorId: id }).select('+passwordHash');
    user = doctor && { id: doctor.doctorId, name: doctor.name, role };
    passwordHash = doctor?.passwordHash;
  } else {
    const patient = await Patient.findOne({ patientId: id }).select('+passwordHash');
    user = patient && { id: patient.patientId, name: patient.name, role };
    passwordHash = patient?.passwordHash;
  }

  if (!user || !passwordHash || !(await bcrypt.compare(password, passwordHash))) {
    return response.status(401).json({ error: 'ID or password is incorrect.' });
  }
  return response.json({ token: issueToken(user), user });
}));

app.get('/api/auth/me', authenticate, asyncRoute(async (request, response) => {
  if (request.user.role === 'doctor') {
    const doctor = await Doctor.findOne({ doctorId: request.user.sub });
    if (!doctor) return response.status(401).json({ error: 'Doctor account not found.' });
    return response.json({ user: { id: doctor.doctorId, name: doctor.name, role: 'doctor' } });
  }
  const patient = await Patient.findOne({ patientId: request.user.sub });
  if (!patient) return response.status(401).json({ error: 'Patient account not found.' });
  return response.json({ user: { id: patient.patientId, name: patient.name, role: 'patient' } });
}));

app.get('/api/patients', authenticate, requireRole('doctor'), asyncRoute(async (_request, response) => {
  const patients = await Patient.find().sort({ createdAt: -1 });
  return response.json({ patients: patients.map(publicPatient) });
}));

app.get('/api/patients/me', authenticate, requireRole('patient'), asyncRoute(async (request, response) => {
  const patient = await Patient.findOne({ patientId: request.user.sub });
  if (!patient) return response.status(404).json({ error: 'Patient record not found.' });
  return response.json({ patient: publicPatient(patient) });
}));

app.patch('/api/patients/me', authenticate, requireRole('patient'), asyncRoute(async (request, response) => {
  const fields = ['age', 'temperature', 'weight', 'systolic', 'diastolic', 'medicines'];
  const changes = Object.fromEntries(fields.filter((key) => key in request.body).map((key) => [key, String(request.body[key]).slice(0, key === 'medicines' ? 4000 : 20)]));
  const patient = await Patient.findOneAndUpdate({ patientId: request.user.sub }, { $set: changes }, { new: true, runValidators: true });
  if (!patient) return response.status(404).json({ error: 'Patient record not found.' });
  return response.json({ patient: publicPatient(patient) });
}));

app.post('/api/patients/me/reports', authenticate, requireRole('patient'), asyncRoute(async (request, response) => {
  const { name, type, data } = request.body;
  if (!name || !type || !/^data:(application\/pdf|image\/(png|jpeg|webp));base64,/.test(data || '') || data.length > 8 * 1024 * 1024) {
    return response.status(400).json({ error: 'Choose a PDF or image smaller than 6 MB.' });
  }
  const patient = await Patient.findOneAndUpdate(
    { patientId: request.user.sub },
    { $push: { scans: { name: String(name).slice(0, 255), type: String(type).slice(0, 100), data } } },
    { new: true, runValidators: true },
  );
  if (!patient) return response.status(404).json({ error: 'Patient record not found.' });
  return response.json({ patient: publicPatient(patient) });
}));

app.post('/api/patients/:patientId/recommendations', authenticate, requireRole('doctor'), asyncRoute(async (request, response) => {
  const checkup = String(request.body.checkup || '').trim();
  const advice = String(request.body.advice || '').trim();
  const followUpDate = String(request.body.followUpDate || '');
  if (!checkup || !advice || checkup.length > 160 || advice.length > 1000 || (followUpDate && !/^\d{4}-\d{2}-\d{2}$/.test(followUpDate))) {
    return response.status(400).json({ error: 'Checkup and advice are required; follow-up date must be valid.' });
  }
  const doctor = await Doctor.findOne({ doctorId: request.user.sub });
  if (!doctor) return response.status(401).json({ error: 'Doctor account not found.' });

  const patient = await Patient.findOneAndUpdate(
    { patientId: request.params.patientId },
    { $push: { recommendations: { checkup, advice, followUpDate, doctorName: doctor.name } } },
    { new: true, runValidators: true },
  );
  if (!patient) return response.status(404).json({ error: 'Patient record not found.' });
  return response.json({ patient: publicPatient(patient) });
}));

app.use((error, _request, response, _next) => {
  if (error?.code === 11000) return response.status(409).json({ error: 'That account already exists.' });
  if (error instanceof mongoose.Error.ValidationError || error instanceof mongoose.Error.CastError) {
    return response.status(400).json({ error: 'The submitted information is not valid.' });
  }
  console.error('API request failed:', error.message);
  return response.status(500).json({ error: 'The server could not complete the request.' });
});

async function start() {
  await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 5000 });
  if (process.env.DOCTOR_ID && process.env.DOCTOR_PASSWORD) {
    await Doctor.updateOne(
      { doctorId: process.env.DOCTOR_ID },
      {
        $setOnInsert: {
          doctorId: process.env.DOCTOR_ID,
          name: process.env.DOCTOR_NAME || 'City Heart Hospital Doctor',
          passwordHash: await bcrypt.hash(process.env.DOCTOR_PASSWORD, 12),
        },
      },
      { upsert: true },
    );
    console.info(`Doctor account is ready for ID ${process.env.DOCTOR_ID}.`);
  } else {
    console.warn('Doctor login is disabled until DOCTOR_ID and DOCTOR_PASSWORD are configured.');
  }
  app.listen(port, '0.0.0.0', () => console.info(`API listening on port ${port}.`));
}

start().catch((error) => {
  console.error('Unable to start API:', error.message);
  process.exitCode = 1;
});
