import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../../productData/products';
import styles from '../../../scss/pages/shop/productDetail.module.scss';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const navigate = useNavigate();

  if (!product) return <div>找不到商品</div>;

  return (
    <div className={styles.productDetailContainer}>
      {/* 返回按鈕 */}
      <button
        className={styles.backButton}
        onClick={() => navigate('/shop',{ state: { scrollToProductList: true }})}>
        素購
      </button >

      &nbsp;＞&nbsp;&nbsp;

      <span className={styles.productName}>
        {product.name}
      </span>

      <div className={styles.productDetailTop}>
        <div className={styles.productLeft}>
          <img
            src={`${import.meta.env.BASE_URL}${product.image.default.replace(/^\.*\//, '')}`}
            alt={product.name}
            className={styles.productImage}
          />
        </div>
        <div className={styles.productRight}>
          <span className={styles.tag}>{product.tags}</span>
          <h2 className={styles.shopTitle}>{product.name}</h2>
          <div className={styles.productDesc}>{product.desc}</div>
          <div className={styles.shopPrice}>
            <h1>NT${product.price}</h1>
          </div>



        </div>

      </div>
      <img
        src={`${import.meta.env.BASE_URL}${product.detailImage.replace(/^\.*\//, '')}`}
        width="48"
        alt="" />
    </div>
  );
}