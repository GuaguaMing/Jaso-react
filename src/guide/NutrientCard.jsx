import React from 'react';
import styles from './styles/guide.module.css';

export default function NutrientCard({ nutrientKey, data, onClick }) {
  return (
    <div className={styles.nutrientCard} onClick={onClick}>
      <img
        src={`${import.meta.env.BASE_URL}${data.icon}`}
        className={styles.nutrientImg}
        alt={nutrientKey}
      />
      <div className={styles.label}>
        <h4>{nutrientKey}</h4>
        <p>{data.title.replace(/^\w+\s/, '')}</p>
      </div>
      <div className={styles.partnerCount}>{data.partners.length}</div>
    </div>
  );
}
