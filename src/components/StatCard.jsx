import React from 'react';

const StatCard = ({ title, value, color }) => {
  return (
    <div style={{ 
      background: 'white', 
      padding: '20px', 
      borderRadius: '8px', 
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      borderLeft: `5px solid ${color}`,
      flex: 1,
      minWidth: '200px'
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#718096', fontSize: '14px' }}>{title}</h4>
      <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#2d3748' }}>{value}</p>
    </div>
  );
};

export default StatCard;