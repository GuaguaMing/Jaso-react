import React, { useState } from 'react';
import PartnerList from './PartnerList';
import styles from './styles/guide.module.css';

function ProductCard({ product }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={styles.productCard}>
      <div
        className={styles.productImageWrapper}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img
          src={`${import.meta.env.BASE_URL}${
            isHover && product.image.hover ? product.image.hover : product.image.default
          }`}
          alt={product.title}
          className={styles.productImage}
        />
      </div>
      <div className={styles.productMeta}>
        <div className={styles.productTags}>
          {product.tags.map((tag, i) => (
            <span className={styles.tag} key={i}>{tag}</span>
          ))}
        </div>
        <div className={styles.productIcon}>
          <button className={styles.cartBtn} aria-label="加入購物車"></button>
          <button className={styles.likeBtn} aria-label="加入收藏"></button>
        </div>
      </div>
      <div className={styles.productTitle}>
        {product.title}
        <span className={styles.productSubtitle}>{product.subtitle}</span>
      </div>
      <div className={styles.productDesc}>{product.desc}</div>
      <a href="#" className={styles.productLink}>
        <span className={styles.arrow}>&gt;</span>
        <span className={styles.text}>看完整產品內容</span>
      </a>
    </div>
  );
}

export default function GuideDetail({ data, onClose }) {
  return (
    <div className={`${styles.guideDetail} ${styles.show}`}>
      <button className={styles.guideClose} onClick={onClose}>✕</button>
      <img
        src={`${import.meta.env.BASE_URL}${data.icon.replace('public/', '')}`}
        className={styles.guideIcon}
        alt={data.title}
      />
      <h2 className={styles.guideTitle}>{data.title}</h2>
      <p className={styles.guideDescription}>{data.desc}</p>

      <h4>營養好夥伴</h4>
      <div className={styles.guidePartners}>
        <PartnerList partners={data.partners} />
      </div>

      <h4>推薦營養品</h4>
      <div className={styles.guideProducts}>
        {data.products.map((product, idx) => (
          <ProductCard product={product} key={idx} />
        ))}
      </div>
    </div>
  );
}
