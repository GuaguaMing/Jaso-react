import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../../productData/products';
import styles from '../../../scss/pages/shop/shop.module.scss';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => String(p.id) === id);

  if (!product) return <div>找不到商品</div>;

  return (
    <div className={styles.productDetailPage}>
      <button className={styles.backBtn} onClick={() => navigate('/shop')}>← 返回商店</button>
      <div className={styles.productDetailContent}>
        <div className={styles.productDetailImage}>
          <img src={`${import.meta.env.BASE_URL}${product.image.default}`} alt={product.name} />
        </div>
        <div className={styles.productDetailInfo}>
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          {/* 這裡可以根據你的 shop-medicine.html 加入更多欄位 */}
        </div>
      </div>
    </div>
  );
}