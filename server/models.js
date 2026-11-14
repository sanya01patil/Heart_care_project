import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  sequence: { type: Number, default: 0 },
});

const patientSchema = new mongoose.Schema({
  patientId: { type: String, unique: true, index: true },
  name: { type: String, required: true, trim: true, maxlength: 120 },
  phone: { type: String, required: true, trim: true, maxlength: 30 },
  passwordHash: { type: String, required: true, select: false },
  age: { type: String, default: '' },
  temperature: { type: String, default: '' },
  weight: { type: String, default: '' },
  systolic: { type: String, default: '' },
  diastolic: { type: String, default: '' },
  medicines: { type: String, default: '', maxlength: 4000 },
  scans: [{
    name: { type: String, required: true, maxlength: 255 },
    type: { type: String, required: true, maxlength: 100 },
    data: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
  }],
  recommendations: [{
    checkup: { type: String, required: true, maxlength: 160 },
    advice: { type: String, required: true, maxlength: 1000 },
    followUpDate: { type: String, default: '' },
    doctorName: { type: String, required: true, maxlength: 120 },
    sentAt: { type: Date, default: Date.now },
  }],
}, { timestamps: true });

const doctorSchema = new mongoose.Schema({
  doctorId: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, trim: true, maxlength: 120 },
  passwordHash: { type: String, required: true, select: false },
}, { timestamps: true });

export const Counter = mongoose.model('Counter', counterSchema);
export const Patient = mongoose.model('Patient', patientSchema);
export const Doctor = mongoose.model('Doctor', doctorSchema);
