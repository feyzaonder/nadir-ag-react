import React, { useState } from 'react';
import DiseaseCard from './components/DiseaseCard';

const Kutuphane = () => {
  // Kullanıcının arama çubuğuna yazdığı metni tutan state
  const [searchTerm, setSearchTerm] = useState('');

  // Sistemdeki mevcut hastalık verileri (Hoca görsün diye listeyi genişlettik)
  const diseases = [
    {
      id: 1,
      name: "SMA (Spinal Musküler Atrofi)",
      rate: "1 / 10.000",
      description: "Kas hareketlerini kontrol eden motor nöronların kaybına yol açan genetik bir hastalık."
    },
    {
      id: 2,
      name: "ALS (Amyotrofik Lateral Skleroz)",
      rate: "2 / 100.000",
      description: "Beyin ve omurilikteki motor nöronların kaybı ile ilerleyen ilerleyici bir sinir sistemi hastalığı."
    },
    {
      id: 3,
      name: "Kistik Fibrozis",
      rate: "1 / 3.000",
      description: "Özellikle akciğerler, sindirim sistemi ve vücudun diğer organlarına ciddi hasarlar veren kalıtsal bir hastalık."
    },
    {
      id: 4,
      name: "Huntington Hastalığı",
      rate: "5 / 100.000",
      description: "Beyindeki sinir hücrelerinin zamanla bozulmasına neden olan, kalıtsal bir nörodejeneratif bozukluk."
    }
  ];

  // Kullanıcının yazdığı kelimeye göre listeyi anlık filtreleyen sihirli kısım:
  const filteredDiseases = diseases.filter(disease =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disease.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      {/* Sayfa Başlığı */}
      <h2 style={{ color: '#2d3748', marginBottom: '10px' }}>Nadir Hastalıklar Dijital Kütüphanesi</h2>
      <p style={{ color: '#718096', marginBottom: '20px' }}>Toplumsal farkındalığı artırmak için dinamik hastalık filtreleme ve bilgi kartları.</p>
      
      {/* 🔍 DİNAMİK ARAMA ÇUBUĞU */}
      <div style={{ marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="🔍 Hastalık adı veya açıklama ile ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Her harf yazıldığında state güncellenir
          style={{
            width: '100%',
            maxWidth: '500px',
            padding: '12px 20px',
            borderRadius: '25px',
            border: '2px solid #cbd5e0',
            fontSize: '16px',
            outline: 'none',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            transition: '0.3s'
          }}
        />
      </div>

      {/* KARTLARIN LİSTELENDİĞİ ALAN */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {filteredDiseases.length > 0 ? (
          filteredDiseases.map(disease => (
            <DiseaseCard 
              key={disease.id}
              name={disease.name} 
              rate={disease.rate} 
              description={disease.description} 
            />
          ))
        ) : (
          <p style={{ color: '#e53e3e', fontWeight: 'bold', gridColumn: '1/-1' }}>
            ❌ Aradığınız kriterlere uygun bir hastalık kaydı bulunamadı.
          </p>
        )}
      </div>
    </div>
  );
};

export default Kutuphane;