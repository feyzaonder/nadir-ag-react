import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'kullanici', label: '👥 Kullanıcı Yönetimi' },
    { id: 'onay', label: '📋 Onay Bekleyen İlanlar Havuzu' },
    { id: 'grafik', label: '📊 Aktif İhtiyaç Grafikleri' },
    { id: 'log', label: '⚙️ Sistem Logları' }
  ];

  return (
    <div style={{ width: '250px', background: '#1a202c', color: 'white', minHeight: '85vh', padding: '20px' }}>
      <h3 style={{ fontSize: '18px', marginBottom: '20px', borderBottom: '1px solid #4a5568', paddingBottom: '10px' }}>Admin Paneli</h3>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {menuItems.map((item) => (
          <li 
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{ 
              padding: '10px', 
              borderRadius: '5px', 
              cursor: 'pointer',
              background: activeTab === item.id ? '#2b6cb0' : 'transparent',
              transition: '0.3s'
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;