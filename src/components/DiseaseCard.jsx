import React from 'react';

const DiseaseCard = ({ name, rate, description }) => {
  return (
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
      <h3 style={{ color: '#2b6cb0', margin: '0 0 5px 0' }}>{name}</h3>
      <span style={{ background: '#feebc8', color: '#c05621', padding: '3px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
        Nadirlik Oranı: {rate}
      </span>
      <p style={{ color: '#4a5568', marginTop: '10px', fontSize: '14px' }}>{description}</p>
      <button style={{ background: '#2b6cb0', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>Detay Gör</button>
    </div>
  );
};

export default DiseaseCard;