import { useState } from 'react';
import { apiRequest } from './api';
import { LanguageSelect, t } from './i18n';
import './Login.css';

export default function Login({ onLoginSuccess, language, onLanguageChange }) {
  const [role, setRole] = useState('patient');
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearForm = () => {
    setFullName('');
    setPhoneNumber('');
    setUserId('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    if (isSignUp && password !== confirmPassword) {
      setError(t(language, 'passwordsMismatch'));
      return;
    }

    setIsSubmitting(true);
    try {
      const result = isSignUp
        ? await apiRequest('/auth/signup', {
          method: 'POST',
          body: JSON.stringify({ name: fullName.trim(), phone: phoneNumber.trim(), password }),
        })
        : await apiRequest('/auth/login', {
          method: 'POST',
          body: JSON.stringify({ role, id: userId.trim(), password }),
        });
      onLoginSuccess(result);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`login-wrapper login-wrapper--${role}`}
      style={{ '--login-background-image': `url("${import.meta.env.BASE_URL}images/${role === 'doctor' ? 'doctor-login-ecg.png' : 'login-heart-care.png'}")` }}
    >
      <div className="login-box">
        <div className="login-language"><LanguageSelect language={language} onChange={onLanguageChange} /></div>
        <div className="hospital-header">
          <span className="hospital-icon" aria-hidden="true">🏥</span>
          <h2>City Heart Hospital</h2>
          <p>{t(language, 'subtitle')}</p>
        </div>

        <div className="role-tab-container">
          <button type="button" className={`tab-btn ${role === 'patient' ? 'active-patient' : ''}`} onClick={() => { setRole('patient'); setIsSignUp(false); clearForm(); }}>
            👤 {t(language, 'patientLogin')}
          </button>
          <button type="button" className={`tab-btn ${role === 'doctor' ? 'active-doctor' : ''}`} onClick={() => { setRole('doctor'); setIsSignUp(false); clearForm(); }}>
            🩺 {t(language, 'doctorLogin')}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {isSignUp && <div className="input-field">
            <label htmlFor="full-name">{t(language, 'fullName')}</label>
            <input id="full-name" type="text" autoComplete="name" placeholder={t(language, 'enterName')} value={fullName} onChange={(event) => setFullName(event.target.value)} required />
          </div>}

          <div className="input-field">
            {isSignUp ? <>
              <label htmlFor="phone-number">{t(language, 'phone')}</label>
              <input id="phone-number" type="tel" autoComplete="tel" placeholder={t(language, 'phoneExample')} value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} required />
            </> : <>
              <label htmlFor="user-id">{t(language, role === 'patient' ? 'patientId' : 'doctorId')}</label>
              <input id="user-id" type="text" autoComplete="username" placeholder={t(language, role === 'patient' ? 'patientIdExample' : 'doctorIdExample')} value={userId} onChange={(event) => setUserId(event.target.value)} required />
            </>}
          </div>

          <div className="input-field">
            <label htmlFor="password">{t(language, 'password')}</label>
            <input id="password" type="password" autoComplete={isSignUp ? 'new-password' : 'current-password'} placeholder={t(language, 'enterPassword')} value={password} onChange={(event) => setPassword(event.target.value)} minLength={isSignUp ? 8 : undefined} required />
          </div>

          {isSignUp && <div className="input-field">
            <label htmlFor="confirm-password">{t(language, 'confirmPassword')}</label>
            <input id="confirm-password" type="password" autoComplete="new-password" placeholder={t(language, 'reenterPassword')} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} minLength="8" required />
          </div>}

          {error && <div className="form-error" role="alert">{error}</div>}
          <button type="submit" className={`submit-btn ${role === 'doctor' ? 'doc-btn' : 'pat-btn'}`} disabled={isSubmitting}>
            {isSubmitting ? t(language, 'loading') : isSignUp ? t(language, 'createAccount') : t(language, role === 'patient' ? 'loginAsPatient' : 'loginAsDoctor')}
          </button>
        </form>

        {role === 'patient' && <div className="signup-switch">
          {t(language, isSignUp ? 'alreadyRegistered' : 'newPatient')}
          <button type="button" onClick={() => { setIsSignUp(!isSignUp); clearForm(); }}>
            {t(language, isSignUp ? 'loginHere' : 'signupHere')}
          </button>
        </div>}
      </div>
    </div>
  );
}
