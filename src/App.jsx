import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Anasayfa from './Anasayfa';
import Kutuphane from './Kutuphane';
import Sponsorluk from './Sponsorluk';
import AdminDashboard from './AdminDashboard';

function App() {
  // Menü tıklamalarına göre hangi sayfanın görüneceğini kontrol eden state
  const [currentPage, setCurrentPage] = useState('anasayfa');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f7fafc', minHeight: '100vh', margin: 0 }}>
      
      {/* Şemadaki NAVBAR (Üst Menü Component'i) */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* ŞEMAYA GÖRE SAYFA İÇERİKLERİNİN DİNAMİK GÖSTERİLMESİ */}
      <main style={{ minHeight: '80vh' }}>
        {currentPage === 'anasayfa' && <Anasayfa />}
        {currentPage === 'kutuphane' && <Kutuphane />}
        {currentPage === 'sponsorluk' && <Sponsorluk />}
        {currentPage === 'admin' && <AdminDashboard />}
      </main>

      {/* FOOTER BİLEŞENİ */}
      <footer style={{ textAlign: 'center', padding: '20px', color: '#a0aec0', fontSize: '14px', marginTop: '40px', borderTop: '1px solid #e2e8f0' }}>
        © 2026 NadirAğ Platformu - Tüm Hakları Saklıdır. Final Projesi Prototipi.
      </footer>

    </div>
  );
}

export default App;