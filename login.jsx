import React, { useState } from 'react';
import './Login.css';

export default function Login({ onLoginSuccess }) {
  // 'patient' or 'doctor'
  const [role, setRole] = useState('patient');
  
  // Form fields
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userId.trim() || !password.trim()) {
      alert('Please enter both ID and Password.');
      return;
    }

    // Pass logged-in user details up to the main App
    onLoginSuccess({
      id: userId,
      role: role,
      name: role === 'patient' ? 'John Doe (Patient)' : 'Dr. Smith (Cardiologist)'
    });
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        {/* Hospital Branding Header */}
        <div className="hospital-header">
          <span className="hospital-icon">🏥</span>
          <h2>City Heart Hospital</h2>
          <p>Care & Diagnostic Portal</p>
        </div>

        {/* User Role Selector Tabs */}
        <div className="role-tab-container">
          <button
            type="button"
            className={`tab-btn ${role === 'patient' ? 'active-patient' : ''}`}
            onClick={() => {
              setRole('patient');
              setUserId('');
              setPassword('');
            }}
          >
            👤 Patient Login
          </button>
          <button
            type="button"
            className={`tab-btn ${role === 'doctor' ? 'active-doctor' : ''}`}
            onClick={() => {
              setRole('doctor');
              setUserId('');
              setPassword('');
            }}
          >
            🩺 Doctor Login
          </button>
        </div>

        {/* Dynamic Login Form */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-field">
            <label>
              {role === 'patient' ? 'Patient ID / Phone Number' : 'Doctor Registration ID'}
            </label>
            <input
              type="text"
              placeholder={role === 'patient' ? 'e.g. P-101 or 9876543210' : 'e.g. DOC-502'}
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>

          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className={`submit-btn ${role === 'doctor' ? 'doc-btn' : 'pat-btn'}`}
          >
            Log In as {role === 'patient' ? 'Patient' : 'Doctor'}
          </button>
        </form>
      </div>
    </div>
  );
}