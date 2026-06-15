import React from 'react';
import DiseaseCard from './components/DiseaseCard';

const Kutuphane = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Sayfa Başlığı */}
      <h2 style={{ color: '#2d3748', marginBottom: '10px' }}>Nadir Hastalıklar Dijital Kütüphanesi</h2>
      <p style={{ color: '#718096', marginBottom: '20px' }}>Toplumsal farkındalığı artırmak için hastalık filtreleme ve bilgi kartları.</p>
      
      {/* Kartların Yan Yana ve Düzenli Durması İçin Grid Yapısı */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {/* Yazdığımız DiseaseCard bileşenini şemadaki hastalıklara göre çağırıyoruz */}
        <DiseaseCard 
          name="SMA (Spinal Musküler Atrofi)" 
          rate="1 / 10.000" 
          description="Kas hareketlerini kontrol eden motor nöronların kaybına yol açan genetik bir hastalık." 
        />
        <DiseaseCard 
          name="ALS (Amyotrofik Lateral Skleroz)" 
          rate="2 / 100.000" 
          description="Beyin ve omurilikteki motor nöronların kaybı ile ilerleyen ilerleyici bir sinir sistemi hastalığı." 
        />
        <DiseaseCard 
          name="Kistik Fibrozis" 
          rate="1 / 3.000" 
          description="Özellikle akciğerler, sindirim sistemi ve vücudun diğer organlarına ciddi hasarlar veren kalıtsal bir hastalık." 
        />
      </div>
    </div>
  );
};

export default Kutuphane;