import React from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav style={{
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '15px 30px', 
      background: '#2b6cb0', 
      color: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '20px', cursor: 'pointer' }} onClick={() => setCurrentPage('anasayfa')}>
        🏥 NadirAğ
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '25px', margin: 0, padding: 0, cursor: 'pointer', fontWeight: '500' }}>
        <li onClick={() => setCurrentPage('anasayfa')} style={{ borderBottom: currentPage === 'anasayfa' ? '2px solid white' : 'none', paddingBottom: '3px' }}>Anasayfa</li>
        <li onClick={() => setCurrentPage('kutuphane')} style={{ borderBottom: currentPage === 'kutuphane' ? '2px solid white' : 'none', paddingBottom: '3px' }}>Hastalık Kütüphanesi</li>
        <li onClick={() => setCurrentPage('sponsorluk')} style={{ borderBottom: currentPage === 'sponsorluk' ? '2px solid white' : 'none', paddingBottom: '3px' }}>Kurumsal Giriş</li>
        <li onClick={() => setCurrentPage('admin')} style={{ background: '#2c5282', padding: '6px 12px', borderRadius: '4px', fontWeight: 'bold' }}>🔐 Admin Dashboard</li>
      </ul>
    </nav>
  );
};

export default Navbar;