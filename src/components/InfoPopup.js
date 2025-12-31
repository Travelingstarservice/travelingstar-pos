import React, { useState } from 'react';

function InfoPopup() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#fffae6',
      border: '1px solid #ffc107',
      padding: '20px 40px',
      borderRadius: 10,
      zIndex: 1000,
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <p><strong>Traveling Star LLC Online POS</strong></p>
      <p>Track your sales and manage online purchases in real-time!</p>
      <button onClick={() => setVisible(false)}>Close</button>
    </div>
  );
}

export default InfoPopup;
