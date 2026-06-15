import React from 'react';

const ApprovalRow = ({ deviceName, user, date }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f7fafc', padding: '15px', borderRadius: '6px', marginBottom: '10px', border: '1px solid #edf2f7' }}>
      <div>
        <h4 style={{ margin: '0 0 5px 0', color: '#2d3748' }}>{deviceName}</h4>
        <small style={{ color: '#718096' }}>Yükleyen: {user} | Tarih: {date}</small>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button style={{ background: '#48bb78', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}>Onayla</button>
        <button style={{ background: '#e53e3e', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}>Reddet</button>
      </div>
    </div>
  );
};

export default ApprovalRow;