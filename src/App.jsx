import { useEffect, useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import { apiRequest, clearSession, getSession, setSession } from './api';

const LANGUAGE_KEY = 'cityHeartLanguage';
const supportedLanguages = ['en', 'hi', 'ta', 'mr', 'te'];

function getSavedLanguage() {
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
  return supportedLanguages.includes(savedLanguage) ? savedLanguage : 'en';
}

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState('');
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [language, setLanguage] = useState(getSavedLanguage);

  useEffect(() => {
    const locale = { en: 'en', hi: 'hi-IN', ta: 'ta-IN', mr: 'mr-IN', te: 'te-IN' }[language];
    document.documentElement.lang = locale;
    localStorage.setItem(LANGUAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    const savedSession = getSession();
    if (!savedSession?.token) {
      setIsCheckingSession(false);
      return;
    }

    apiRequest('/auth/me', { token: savedSession.token })
      .then(({ user }) => {
        setCurrentUser(user);
        setToken(savedSession.token);
      })
      .catch(() => clearSession())
      .finally(() => setIsCheckingSession(false));
  }, []);

  const updateLanguage = (nextLanguage) => {
    if (supportedLanguages.includes(nextLanguage)) setLanguage(nextLanguage);
  };

  const handleLoginSuccess = (session) => {
    setSession(session);
    setCurrentUser(session.user);
    setToken(session.token);
  };

  const handleLogout = () => {
    clearSession();
    setCurrentUser(null);
    setToken('');
  };

  if (isCheckingSession) return <div className="loading-screen">Loading your secure portal…</div>;

  return currentUser ? (
    <Dashboard user={currentUser} token={token} onLogout={handleLogout} language={language} onLanguageChange={updateLanguage} />
  ) : (
    <Login onLoginSuccess={handleLoginSuccess} language={language} onLanguageChange={updateLanguage} />
  );
}
