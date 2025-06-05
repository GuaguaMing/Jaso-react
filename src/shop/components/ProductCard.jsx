import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={`產品-${product.name}`} className="product-image" />
      </div>
      <div className="shop-product-meta">
        <div className="shop-product-tags">
          {product.tags.map((tag, i) => (
            <span className="tag" key={i}>{tag}</span>
          ))}
        </div>
        <div className="shop-product-icon">
          <button className="cart-btn" aria-label="加入購物車"></button>
          <button className="like-btn" aria-label="加入收藏"></button>
        </div>
      </div>
      <div className="product-title">
        {product.name} <span className="product-subtitle">{product.subtitle}</span>
      </div>
      <div className="product-desc">{product.description}</div>
      <a href="./shop-medicine.html" className="product-link">
        <span className="arrow">&gt;</span>
        <span className="text">看完整產品內容</span>
      </a>
    </div>
  );
}

export default ProductCard;
