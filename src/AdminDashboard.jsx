import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import ApprovalRow from './components/ApprovalRow';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('kullanici');

  // 📋 Onay bekleyen ilanları artık dinamik bir state listesi olarak tutuyoruz
  const [pendingDevices, setPendingDevices] = useState([
    { id: 101, deviceName: "SMA Özel Çocuk Tekerlekli Sandalyesi", user: "Ayşe Y.", date: "15.06.2026" },
    { id: 102, deviceName: "Philips Respironics Solunum Cihazı Aparatı", user: "Kamil B.", date: "14.06.2026" },
    { id: 103, deviceName: "Kistik Fibrozis İnhaler Cihazı (Kullanılmamış)", user: "Emin T.", date: "13.06.2026" }
  ]);

  // Admin "Onayla" veya "Reddet" butonuna bastığında çalışan sihirli fonksiyon
  const handleAction = (id) => {
    // Basılan ilanın id'sini listeden filtreleyerek uçuruyoruz (State Güncellemesi)
    const updatedList = pendingDevices.filter(device => device.id !== id);
    setPendingDevices(updatedList);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div style={{ flex: 1, padding: '30px', background: '#f7fafc' }}>
        
        {activeTab === 'kullanici' && (
          <div>
            <h2>👥 Kullanıcı Yönetimi Paneli</h2>
            <p>Sistemdeki Hasta Yakını, Gönüllü ve Doktor listelerinin kontrol merkezi.</p>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', marginTop: '20px' }}>
              <p>🟢 Dr. Ahmet Yılmaz (Gönüllü Doktor) - Aktif</p>
              <p>🔵 Feyzagül Önder (Hasta Yakını) - Aktif</p>
              <p>🟡 Mehmet Can (Donör) - Onay Bekliyor</p>
            </div>
          </div>
        )}

        {/* 📋 DİNAMİKLEŞEN ONAY HAVUZU SEKMESİ */}
        {activeTab === 'onay' && (
          <div>
            <h2>📋 Onay Bekleyen İlanlar Havuzu</h2>
            <p>Mobilden yüklenen ve onay bekleyen hibe medikal cihaz ilanları.</p>
            <div style={{ marginTop: '20px' }}>
              {pendingDevices.length > 0 ? (
                pendingDevices.map(device => (
                  <ApprovalRow 
                    key={device.id}
                    id={device.id}
                    deviceName={device.deviceName}
                    user={device.user}
                    date={device.date}
                    onAction={handleAction} // Fonksiyonu alt bileşene paslıyoruz
                  />
                ))
              ) : (
                <div style={{ background: '#e6fffa', color: '#234e52', padding: '20px', borderRadius: '8px', border: '1px solid #b2f5ea', fontWeight: 'bold' }}>
                  🎉 Harika! Onay bekleyen hiçbir hibe ilanı kalmadı. Havuz tamamen temiz.
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'grafik' && (
          <div>
            <h2>📊 Aktif İhtiyaç Grafikleri</h2>
            <p>Hangi şehirde ne kadar medikal cihaz ihtiyacı olduğunu gösteren veri görselleştirme alanı.</p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
              <StatCard title="İstanbul İhtiyaç İlanı" value="48 Cihaz" color="#e53e3e" />
              <StatCard title="Rize İhtiyaç İlanı" value="12 Cihaz" color="#e53e3e" />
              <StatCard title="Samsun İhtiyaç İlanı" value="19 Cihaz" color="#e53e3e" />
            </div>
          </div>
        )}

        {activeTab === 'log' && (
          <div>
            <h2>⚙️ Sistem Logları ve Veri Tabanı Durumu</h2>
            <p>SQL ilişkisel tablolarından gelen sistem hareket günlükleri (Log veri akışı).</p>
            <div style={{ background: '#2d3748', color: '#48bb78', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', marginTop: '20px' }}>
              <p>[18:32:01] SQL_DB: New hibe_ilan created by UserID_402</p>
              <p>[18:34:15] AUTH: Admin session validated successfully.</p>
              <p>[18:35:00] API: Map markers updated for Latitude/Longitude metrics.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;