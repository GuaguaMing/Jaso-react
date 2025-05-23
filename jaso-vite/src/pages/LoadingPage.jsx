import React, { useEffect, useState } from 'react';
import styles from '../css/loadingpage.module.scss';

export default function LoadingPage() {
  const [eyeDirection, setEyeDirection] = useState('center');
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const eyeInterval = setInterval(() => {
      setEyeDirection(prev =>
        prev === 'center' ? 'left' : prev === 'left' ? 'right' : 'center'
      );
    }, 600);

    const dotInterval = setInterval(() => {
      setDotCount(prev => (prev % 3) + 1);
    }, 400);

    return () => {
      clearInterval(eyeInterval);
      clearInterval(dotInterval);
    };
  }, []);

  const getFace = () => {
    switch (eyeDirection) {
      case 'left':
        return '◐ ᴥ ◐';
      case 'right':
        return '◑ ᴥ ◑';
      default:
        return '◓ ᴥ ◓';
    }
  };

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.face}>{getFace()}</div>
      <p className={styles.text}>測驗結果生成中{'。'.repeat(dotCount)}</p>
      <p className={styles.subtext}>請稍等一下哦</p>
    </div>
  );
}

