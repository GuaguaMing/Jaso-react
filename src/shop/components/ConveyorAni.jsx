import React, { useEffect, useState } from 'react';
import styles from "../../../scss/pages/shop/conveyorAni.module.scss";

const ConveyorImg = {
  c1: ['c1_p1.svg', 'c1_p2.svg', 'c1_p3.svg','c1_p4.svg','c1_p5.svg',
    'c1_p6.svg','c1_p7.svg','c1_p8.svg','c1_p9.svg','c1_p10.svg','c1_p11.svg',
    'c1_p12.svg','c1_p13.svg','c1_p14.svg','c1_p15.svg','c1_p16.svg',
    'c1_p17.svg', 'c1_p18.svg', 'c1_p19.svg', 'c1_p20.svg', 'c1_p21.svg',
    'c1_p22.svg', 'c1_p23.svg', 'c1_p24.svg', 'c1_p25.svg', 'c1_p26.svg',
    'c1_p27.svg', 'c1_p28.svg', 'c1_p29.svg', 'c1_p30.svg', 'c1_p31.svg'],
  };

const ConveyorAni = ({ questionKey = 'c1', interval = 350 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ConveyorImg [questionKey] || [];

  useEffect(() => {
    if (images.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  if (!images.length) return null;

  return (
    <div className={styles.imageContainer}>

      <img
  src={`${import.meta.env.BASE_URL}images/shop/${images[currentIndex]}`}
  alt={`${questionKey} animation step ${currentIndex + 1}`}
  className={`${styles.animatedImage} ${styles[`scale_${questionKey}`]}`}
/>

    </div>
  );
};

export default ConveyorAni;
