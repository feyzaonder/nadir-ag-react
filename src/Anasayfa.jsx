import React from 'react';
import StatCard from './components/StatCard';

const Anasayfa = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Karşılama Banner Alanı */}
      <div style={{ textAlign: 'center', marginBottom: '40px', background: '#ebf8ff', padding: '40px', borderRadius: '12px' }}>
        <h1 style={{ color: '#2b6cb0', margin: 0 }}>NadirAğ Sosyal Sorumluluk Platformu</h1>
        <p style={{ color: '#4a5568', fontSize: '18px', marginTop: '10px' }}>Nadir hastalıklar için tıbbi cihaz hibe envanteri ve akran desteği ağı.</p>
      </div>

      {/* Şemadaki Canlı İstatistik Sayaçları Bölümü */}
      <h2 style={{ color: '#2d3748', marginBottom: '20px' }}>Platform Canlı İstatistik Sayacı</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {/* Yazdığımız StatCard bileşenini burada 3 kez farklı verilerle çağırıyoruz */}
        <StatCard title="Toplam Hibe Edilen Cihaz" value="1,248 Adet" color="#48bb78" />
        <StatCard title="Kayıtlı Hasta Yakını" value="3,850 Aile" color="#2b6cb0" />
        <StatCard title="Aktif Destek Odası" value="42 Oda" color="#ecc94b" />
      </div>
    </div>
  );
};

export default Anasayfa;