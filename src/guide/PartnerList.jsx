import React from 'react';
import styles from './styles/guide.module.css';

export default function PartnerList({ partners }) {
  return (
    <div className={styles.partnerList}>
      {partners.map((partner, idx) => (
        <div className={styles.partnerItem} key={idx}>
          <div className={styles.imgHoverWrap}>
            <img src={partner.src} alt={partner.name} className={styles.imgDefault} />
            {partner.hover && <img src={partner.hover} alt="" className={styles.imgHover1} />}
            {partner.hover2 && <img src={partner.hover2} alt="" className={styles.imgHover2} />}
          </div>
          <p>{partner.name}</p>
        </div>
      ))}
    </div>
  );
}