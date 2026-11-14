import React, { useState } from 'react';
import Login from './Login';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      {!currentUser ? (
        <Login onLoginSuccess={(user) => setCurrentUser(user)} />
      ) : (
        <div style={{ padding: '30px', textAlign: 'center' }}>
          <h2>Welcome, {currentUser.name}!</h2>
          <p>Logged in as: <strong>{currentUser.role.toUpperCase()}</strong></p>
          <button 
            onClick={() => setCurrentUser(null)}
            style={{ padding: '10px 20px', cursor: 'pointer' }}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}