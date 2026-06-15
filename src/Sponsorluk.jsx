import React from 'react';

const Sponsorluk = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      {/* Sayfa Başlığı */}
      <h2 style={{ color: '#2d3748', textAlign: 'center' }}>Kurumsal Giriş & Lojistik Sponsorluğu</h2>
      <p style={{ color: '#718096', textAlign: 'center', marginBottom: '30px' }}>Kargo firmaları ve kurumsal ilaç şirketleri için lojistik destek yönetim alanı.</p>
      
      {/* Şemadaki Kurumsal Giriş ve Başvuru Formu */}
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
        <label style={{ fontWeight: 'bold', color: '#4a5568' }}>Kurum Adı</label>
        <input type="text" placeholder="Örn: Aras Kargo, Yurtiçi Kargo" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e0' }} />
        
        <label style={{ fontWeight: 'bold', color: '#4a5568' }}>Sponsorluk Türü</label>
        <select style={{ padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e0' }}>
          <option>Ücretsiz Şehirlerarası Mikro-Lojistik Desteği</option>
          <option>Medikal Sarf Malzemesi Tedariği</option>
          <option>Finansal Fon Sponsorluğu</option>
        </select>

        <button type="button" style={{ background: '#48bb78', color: 'white', border: 'none', padding: '12px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>Sponsorluk Başvurusu Yap</button>
      </form>
    </div>
  );
};

export default Sponsorluk;