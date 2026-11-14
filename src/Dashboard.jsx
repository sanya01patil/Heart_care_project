import { useEffect, useMemo, useState } from 'react';
import { apiRequest } from './api';
import { LanguageSelect, t } from './i18n';
import './Dashboard.css';

const emptyVitals = { age: '', temperature: '', weight: '', systolic: '', diastolic: '', medicines: '' };
const localeByLanguage = { en: 'en-US', hi: 'hi-IN', ta: 'ta-IN', mr: 'mr-IN', te: 'te-IN' };

function StatCard({ label, value, unit }) {
  return <div className="stat-card"><span>{label}</span><strong>{value || '—'}</strong>{unit && <small>{unit}</small>}</div>;
}

function PatientDashboard({ user, token, onLogout, language, onLanguageChange }) {
  const [section, setSection] = useState('pre-visit');
  const [patient, setPatient] = useState(null);
  const [vitals, setVitals] = useState(emptyVitals);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');

  const refreshPatient = async (syncVitals = false) => {
    const result = await apiRequest('/patients/me', { token });
    setPatient(result.patient);
    if (syncVitals) {
      setVitals({
        age: result.patient.age || '',
        temperature: result.patient.temperature || '',
        weight: result.patient.weight || '',
        systolic: result.patient.systolic || '',
        diastolic: result.patient.diastolic || '',
        medicines: result.patient.medicines || '',
      });
    }
  };

  useEffect(() => {
    refreshPatient(true).catch((requestError) => setError(requestError.message));
    const intervalId = window.setInterval(() => {
      refreshPatient().catch((requestError) => setError(requestError.message));
    }, 10000);
    return () => window.clearInterval(intervalId);
  }, [token]);

  const updateVital = (event) => setVitals({ ...vitals, [event.target.name]: event.target.value });

  const saveVitals = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const result = await apiRequest('/patients/me', { token, method: 'PATCH', body: JSON.stringify(vitals) });
      setPatient(result.patient);
      setNotice(t(language, 'saveSuccess'));
    } catch (requestError) {
      setError(requestError.message);
    }
  };

  const uploadScan = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 6 * 1024 * 1024) {
      setError(t(language, 'reportTooLarge'));
      event.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = async () => {
      setError('');
      try {
        const result = await apiRequest('/patients/me/reports', {
          token,
          method: 'POST',
          body: JSON.stringify({ name: file.name, type: file.type, data: reader.result }),
        });
        setPatient(result.patient);
        setNotice(t(language, 'uploadSuccess'));
      } catch (requestError) {
        setError(requestError.message);
      }
    };
    reader.onerror = () => setError(t(language, 'uploadFailed'));
    reader.readAsDataURL(file);
  };

  if (!patient) return <div className="loading-screen">{error || t(language, 'loading')}</div>;

  const recommendations = patient.recommendations || [];

  return <PortalLayout user={user} onLogout={onLogout} language={language} onLanguageChange={onLanguageChange} title={t(language, 'patientPortal')}>
    <div className="welcome-banner">
      <div><p className="eyebrow">{t(language, 'welcomeBack')}</p><h2>{patient.name}</h2><p>{t(language, 'carePrompt')}</p></div>
      <span className="patient-id">{t(language, 'patientIdLabel')} {patient.id}</span>
    </div>
    {error && <div className="form-error" role="alert">{error}</div>}
    {notice && <div className="notice" role="status">{notice}</div>}
    <section className="content-card recommendations-card" aria-labelledby="patient-recommendations-title">
      <div className="section-heading"><div><h3 id="patient-recommendations-title">{t(language, 'doctorRecommendations')}</h3><p>{t(language, 'recommendationsDescription')}</p></div></div>
      {recommendations.length === 0 ? <p className="empty-state">{t(language, 'noRecommendations')}</p> : [...recommendations].reverse().map((recommendation) => (
        <article className="recommendation-item" key={recommendation.id}>
          <div className="recommendation-meta"><strong>{recommendation.doctorName || t(language, 'doctor')}</strong><time dateTime={recommendation.sentAt}>{t(language, 'sentOn')} {new Date(recommendation.sentAt).toLocaleDateString(localeByLanguage[language] || 'en-US')}</time></div>
          <p><strong>{t(language, 'recommendedCheckup')}:</strong> {recommendation.checkup}</p>
          <p><strong>{t(language, 'doctorsAdvice')}:</strong> {recommendation.advice}</p>
          {recommendation.followUpDate && <p><strong>{t(language, 'followUpDate')}:</strong> <time dateTime={recommendation.followUpDate}>{new Date(`${recommendation.followUpDate}T00:00:00`).toLocaleDateString(localeByLanguage[language] || 'en-US')}</time></p>}
        </article>
      ))}
    </section>
    <div className="section-tabs">
      <button className={section === 'pre-visit' ? 'selected' : ''} onClick={() => setSection('pre-visit')}>{t(language, 'preVisitTab')}</button>
      <button className={section === 'post-visit' ? 'selected' : ''} onClick={() => setSection('post-visit')}>{t(language, 'postVisitTab')}</button>
    </div>
    {section === 'pre-visit' ? <section className="content-card">
      <div className="section-heading"><div><h3>{t(language, 'preVisitTitle')}</h3><p>{t(language, 'preVisitDescription')}</p></div><span className="required-note">{t(language, 'optionalFields')}</span></div>
      <form className="health-form" onSubmit={saveVitals}>
        <label>{t(language, 'age')}<input name="age" type="number" min="0" max="120" value={vitals.age} onChange={updateVital} placeholder="e.g. 58" /></label>
        <label>{t(language, 'temperature')}<input name="temperature" type="number" step="0.1" value={vitals.temperature} onChange={updateVital} placeholder="e.g. 98.6" /></label>
        <label>{t(language, 'weight')}<input name="weight" type="number" step="0.1" value={vitals.weight} onChange={updateVital} placeholder="e.g. 72" /></label>
        <label>{t(language, 'systolic')}<input name="systolic" type="number" value={vitals.systolic} onChange={updateVital} placeholder="e.g. 120" /></label>
        <label>{t(language, 'diastolic')}<input name="diastolic" type="number" value={vitals.diastolic} onChange={updateVital} placeholder="e.g. 80" /></label>
        <label className="wide-field">{t(language, 'medicines')}<textarea name="medicines" value={vitals.medicines} onChange={updateVital} placeholder={t(language, 'medicinePlaceholder')} rows="4" /></label>
        <button className="primary-button wide-field" type="submit">{t(language, 'savePreVisit')}</button>
      </form>
    </section> : <section className="content-card">
      <div className="section-heading"><div><h3>{t(language, 'uploadTitle')}</h3><p>{t(language, 'uploadDescription')}</p></div></div>
      <label className="upload-box"><span className="upload-icon">↑</span><strong>{t(language, 'chooseFile')}</strong><small>{t(language, 'supportedFiles')}</small><input type="file" accept=".pdf,image/png,image/jpeg,image/webp" onChange={uploadScan} /></label>
      <div className="scan-list">{(patient.scans || []).length === 0 ? <p className="empty-state">{t(language, 'noReports')}</p> : patient.scans.map((scan) => <div className="scan-row" key={`${scan.name}-${scan.uploadedAt}`}><span>📄</span><strong>{scan.name}</strong><small>{t(language, 'uploadedReport')}</small></div>)}</div>
    </section>}
  </PortalLayout>;
}

function DoctorDashboard({ user, token, onLogout, language, onLanguageChange }) {
  const [patients, setPatients] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [error, setError] = useState('');
  const selectedPatient = patients.find((patient) => patient.id === selectedId) || patients[0];

  const refreshPatients = async () => {
    const result = await apiRequest('/patients', { token });
    setPatients(result.patients);
  };

  useEffect(() => {
    refreshPatients().catch((requestError) => setError(requestError.message));
    const intervalId = window.setInterval(() => {
      refreshPatients().catch((requestError) => setError(requestError.message));
    }, 10000);
    return () => window.clearInterval(intervalId);
  }, [token]);

  const medicationCount = useMemo(() => selectedPatient?.medicines?.split(',').filter(Boolean).length || 0, [selectedPatient]);
  const bp = selectedPatient ? `${selectedPatient.systolic || '—'} / ${selectedPatient.diastolic || '—'}` : '—';
  const scans = selectedPatient?.scans || [];
  const dateLocale = localeByLanguage[language] || 'en-US';

  const sendRecommendation = async (patientId, recommendation) => {
    const result = await apiRequest(`/patients/${encodeURIComponent(patientId)}/recommendations`, {
      token,
      method: 'POST',
      body: JSON.stringify(recommendation),
    });
    setPatients((currentPatients) => currentPatients.map((patient) => patient.id === patientId ? result.patient : patient));
    return result.patient;
  };

  return <PortalLayout user={user} onLogout={onLogout} language={language} onLanguageChange={onLanguageChange} title={t(language, 'doctorPortal')}>
    <div className="doctor-layout">
      <aside className="directory-card content-card">
        <div className="section-heading"><div><h3>{t(language, 'patientDirectory')}</h3><p>{patients.length} {t(language, 'registeredPatients')}</p></div></div>
        {error && <div className="form-error" role="alert">{error}</div>}
        {patients.length === 0 ? <p className="empty-state">{t(language, 'emptyPatients')}</p> : patients.map((patient) => <button className={`patient-row ${selectedPatient?.id === patient.id ? 'active' : ''}`} key={patient.id} onClick={() => setSelectedId(patient.id)}><span className="avatar">{patient.name.charAt(0).toUpperCase()}</span><span><strong>{patient.name}</strong><small>{t(language, 'patientIdLabel')} {patient.id}</small></span><span>›</span></button>)}
      </aside>
      <section className="doctor-detail">
        {!selectedPatient ? <div className="content-card empty-detail"><span className="large-icon">♡</span><h3>{t(language, 'selectPatient')}</h3><p>{t(language, 'choosePatient')}</p></div> : <>
          <div className="patient-header content-card"><div><p className="eyebrow">{t(language, 'patientDetail')}</p><h2>{selectedPatient.name}</h2><p>{t(language, 'patientIdLabel')} {selectedPatient.id} · {t(language, 'phoneLabel')} {selectedPatient.phone || t(language, 'notProvided')} · {t(language, 'lastUpdated')} {new Date(selectedPatient.updatedAt).toLocaleDateString(dateLocale)}</p></div><span className="status-pill">{t(language, 'readyReview')}</span></div>
          <DoctorRecommendationForm key={selectedPatient.id} patient={selectedPatient} doctorName={user.name} language={language} onSend={sendRecommendation} />
          <div className="stats-grid"><StatCard label={t(language, 'ageLabel')} value={selectedPatient.age} unit={t(language, 'years')} /><StatCard label={t(language, 'temperature')} value={selectedPatient.temperature} unit="°F" /><StatCard label={t(language, 'weight')} value={selectedPatient.weight} unit="kg" /><StatCard label={t(language, 'bloodPressure')} value={bp} unit="mmHg" /></div>
          <div className="charts-grid">
            <section className="content-card"><div className="card-title"><h3>{t(language, 'bloodPressure')}</h3><span>{t(language, 'latestReading')}</span></div><div className="bp-visual"><div className="bp-number"><strong>{bp}</strong><small>mmHg</small></div><svg viewBox="0 0 360 120" role="img" aria-label={t(language, 'chartsLabel')}><path d="M10 92 C55 70, 80 88, 115 58 S180 78, 215 42 S280 62, 350 25" fill="none" stroke="#0d9488" strokeWidth="5" strokeLinecap="round" /><path d="M10 92 C55 70, 80 88, 115 58 S180 78, 215 42 S280 62, 350 25" fill="none" stroke="#b9eee8" strokeWidth="18" strokeLinecap="round" opacity=".35" /></svg></div></section>
            <section className="content-card"><div className="card-title"><h3>{t(language, 'medicines')}</h3><span>{medicationCount} {t(language, 'listed')}</span></div><div className="medicine-chart"><div className="donut"><span>{medicationCount}<small>{t(language, 'meds')}</small></span></div><div className="legend"><span><i className="dot teal" />{t(language, 'currentMedicines')}</span><span><i className="dot pale" />{t(language, 'reviewAtVisit')}</span></div></div>{selectedPatient.medicines ? <p className="medicine-text">{selectedPatient.medicines}</p> : <p className="empty-state">{t(language, 'noMedicines')}</p>}</section>
          </div>
          <section className="content-card"><div className="card-title"><h3>{t(language, 'scansReports')}</h3><span>{scans.length} {t(language, scans.length === 1 ? 'file' : 'files')}</span></div>{scans.length === 0 ? <p className="empty-state">{t(language, 'noScans')}</p> : <div className="scan-list">{scans.map((scan) => <a className="scan-row" href={scan.data} target="_blank" rel="noreferrer" key={`${scan.name}-${scan.uploadedAt}`}><span>📄</span><strong>{scan.name}</strong><small>{t(language, 'openPreview')}</small></a>)}</div>}</section>
        </>}
      </section>
    </div>
  </PortalLayout>;
}

function DoctorRecommendationForm({ patient, doctorName, language, onSend }) {
  const [checkup, setCheckup] = useState('');
  const [advice, setAdvice] = useState('');
  const [followUpDate, setFollowUpDate] = useState('');
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitRecommendation = async (event) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      await onSend(patient.id, { checkup: checkup.trim(), advice: advice.trim(), followUpDate, doctorName });
      setCheckup('');
      setAdvice('');
      setFollowUpDate('');
      setNotice(t(language, 'recommendationSent'));
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section className="content-card recommendation-compose">
    <div className="section-heading"><div><h3>{t(language, 'doctorRecommendations')}</h3><p>{t(language, 'recommendationComposeDescription')} {patient.name}.</p></div></div>
    <form className="health-form" onSubmit={submitRecommendation}>
      <label className="wide-field">{t(language, 'recommendedCheckup')}<input value={checkup} onChange={(event) => setCheckup(event.target.value)} required maxLength={160} placeholder={t(language, 'checkupPlaceholder')} /></label>
      <label className="wide-field">{t(language, 'doctorsAdvice')}<textarea value={advice} onChange={(event) => setAdvice(event.target.value)} required rows="3" maxLength={1000} placeholder={t(language, 'advicePlaceholder')} /></label>
      <label>{t(language, 'followUpDate')}<input type="date" value={followUpDate} onChange={(event) => setFollowUpDate(event.target.value)} /></label>
      <div className="recommendation-submit">{notice && <p className="recommendation-sent" role="status">{notice}</p>}<button className="primary-button" type="submit" disabled={isSubmitting}>{isSubmitting ? t(language, 'loading') : t(language, 'sendRecommendation')}</button></div>
      {error && <div className="form-error wide-field" role="alert">{error}</div>}
    </form>
  </section>;
}

function PortalLayout({ user, onLogout, language, onLanguageChange, title, children }) {
  const backgroundImage = user.role === 'doctor' ? 'doctor-heart-care.png' : 'patient-care.jpg';
  return <div
    className={`portal-shell portal-shell--${user.role}`}
    style={{ '--portal-background-image': `url("${import.meta.env.BASE_URL}images/${backgroundImage}")` }}
  >
    <header className="portal-header">
      <div className="brand"><span className="brand-icon">🏥</span><div><strong>City Heart Hospital</strong><span>{t(language, 'subtitle')}</span></div></div>
      <div className="header-actions"><span className="signed-in">{t(language, 'signedInAs')} <strong>{t(language, user.role)}</strong></span><LanguageSelect language={language} onChange={onLanguageChange} /><button className="logout-button" onClick={onLogout}>{t(language, 'logout')}</button></div>
    </header>
    <main className="portal-main"><div className="page-title"><p className="eyebrow">{title}</p><h1>{t(language, user.role === 'doctor' ? 'careWorkspace' : 'healthSpace')}</h1></div>{children}</main>
  </div>;
}

export default function Dashboard({ user, token, onLogout, language, onLanguageChange }) {
  return user.role === 'doctor'
    ? <DoctorDashboard user={user} token={token} onLogout={onLogout} language={language} onLanguageChange={onLanguageChange} />
    : <PatientDashboard user={user} token={token} onLogout={onLogout} language={language} onLanguageChange={onLanguageChange} />;
}
