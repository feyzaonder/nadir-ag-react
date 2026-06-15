import React, { useState } from 'react';
import StatCard from './components/StatCard';

const Anasayfa = () => {
  // Yeni eklenen ilan başlığını tutan state
  const [newIlan, setNewIlan] = useState('');
  
  // Başlangıçtaki örnek ilan listesi state'i
  const [ilanlar, setIlanlar] = useState([
    { id: 1, baslik: "Temiz durumda SMA uyumlu tekerlekli sandalye hibe", tarih: "15.06.2026" },
    { id: 2, baslik: "Kullanılmamış oksijen maskesi ve hortum seti", tarih: "14.06.2026" }
  ]);

  // Yeni ilan ekleme fonksiyonu
  const hocaIlanEkle = (e) => {
    e.preventDefault();
    if (!newIlan.trim()) return;

    const eklenecekIlan = {
      id: Date.now(),
      baslik: newIlan,
      tarih: "15.06.2026"
    };

    // Yeni ilanı listenin en üstüne ekliyoruz (State Güncellemesi)
    setIlanlar([eklenecekIlan, ...ilanlar]);
    setNewIlan(''); // Input alanını temizle
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Karşılama Banner Alanı */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '40px', 
        background: '#ebf8ff', 
        padding: '40px 20px', 
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px'
      }}>
        <h1 style={{ color: '#2b6cb0', margin: 0, lineHeight: '1.2' }}>
          NadirAğ Sosyal Sorumluluk Platformu
        </h1>
        <p style={{ color: '#4a5568', fontSize: '18px', margin: 0, lineHeight: '1.5' }}>
          Nadir hastalıklar için tıbbi cihaz hibe envanteri ve akran desteği ağı.
        </p>
      </div>

      {/* Canlı İstatistik Sayaçları Bölümü */}
      <h2 style={{ color: '#2d3748', marginBottom: '20px', textAlign: 'center' }}>
        Platform Canlı İstatistik Sayacı
      </h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
        <StatCard title="Toplam Hibe Edilen Cihaz" value="1,248 Adet" color="#48bb78" />
        <StatCard title="Kayıtlı Hasta Yakını" value="3,850 Aile" color="#2b6cb0" />
        <StatCard title="Aktif Destek Odası" value="42 Oda" color="#ecc94b" />
      </div>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginTop: '20px' }}>
        
        {/* ✍️ HIZLI HİBE İLANI EKLEME FORMU */}
        <div style={{ flex: 1, minWidth: '300px', background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#2b6cb0', marginTop: 0, marginBottom: '15px' }}>➕ Hızlı Hibe Cihaz İlanı Ekle</h3>
          <form onSubmit={hocaIlanEkle} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label style={{ fontWeight: '500', color: '#4a5568' }}>Hibe Edilecek Tıbbi Cihaz / Malzeme Bilgisi</label>
            <input 
              type="text" 
              placeholder="Örn: Solunum Cihazı Filtresi, Mama Cihazı..." 
              value={newIlan}
              onChange={(e) => setNewIlan(e.target.value)}
              style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e0', fontSize: '14px', outline: 'none' }}
            />
            <button type="submit" style={{ background: '#2b6cb0', color: 'white', border: 'none', padding: '10px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s' }}>
              İlanı Yayınla (Simülasyon)
            </button>
          </form>
        </div>

        {/* 📢 CANLI İLAN AKIŞI LİSTESİ */}
        <div style={{ flex: 1, minWidth: '300px', background: 'white', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#2d3748', marginTop: 0, marginBottom: '15px' }}>📋 Son Paylaşılan Hibe İlanları</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {ilanlar.map((ilan) => (
              <div key={ilan.id} style={{ padding: '12px', background: '#f7fafc', borderRadius: '6px', borderLeft: '4px solid #2b6cb0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#4a5568', fontSize: '14px', fontWeight: '500' }}>{ilan.baslik}</span>
                <span style={{ color: '#a0aec0', fontSize: '12px' }}>{ilan.tarih}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Anasayfa;