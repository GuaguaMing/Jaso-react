import React, { useEffect, useState } from 'react';
import './styles/guide.css';

const PartnerImage = ({ src, hover, hover2, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [src, hover, hover2].filter(Boolean);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 400);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={styles.partnerItem}>
      <img src={images[currentIndex]} alt={name} className={styles.image} />
      <p>{name}</p>
    </div>
  );
};

export default PartnerImage;
