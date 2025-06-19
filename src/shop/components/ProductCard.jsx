import React, { useState } from 'react';
import styles from '../../../scss/pages/shop/shop.module.scss';
import { Link } from 'react-router-dom';

function ProductCard({ product, onAddToCart }) {
  const [isHover, setIsHover] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div
      className={styles.productCard}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link
        to={`/shop/product/${product.id}`}
        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      >
        <div className={styles.productImageWrapper}>
          <img
            src={`${import.meta.env.BASE_URL}${isHover ? product.image.hover : product.image.default}`}
            alt={`產品-${product.name}`}
            className={styles.productImage}
          />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productTags}>{product.tags}</div>
          <div className={styles.productTitle}>{product.name}</div>
          <div className={styles.productDesc}>{product.desc}</div>
        </div>
      </Link>
      <div className={styles.productBtnGroup}>
        <button
          className={styles.addToCartBtn}
          onClick={() => onAddToCart(product)}
        >
          加入購物車
        </button>
        <button
          className={
            liked
              ? `${styles.likeBtn} ${styles.active}`
              : styles.likeBtn
          }
          aria-label="加入收藏"
          onClick={() => setLiked((prev) => !prev)}
        ></button>
      </div>
    </div>
  );
}

export default ProductCard;