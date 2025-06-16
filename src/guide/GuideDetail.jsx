import React, { useState } from 'react';
import PartnerList from './PartnerList';

export default function GuideDetail({ data, onClose }) {
  return (
    <div className="guide-detail show">
      <button className="guide-close" onClick={onClose}>✕</button>
      <img
        src={`${import.meta.env.BASE_URL}${data.icon.replace('public/', '')}`}
        className="guide-icon"
        alt={data.title}
      />
      <h2 id="guide-title">{data.title}</h2>
      <p id="guide-description">{data.desc}</p>

      <h4>營養好夥伴</h4>
      <div className="guide-partners">
        <PartnerList partners={data.partners} />
      </div>

      <h4>推薦營養品</h4>
      <div className="guide-products">
        {data.products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <div className="product-image-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}${product.img.replace('public/', '')}`}
                alt={product.title}
                className="product-image"
              />
            </div>
            <div className="product-meta">
              <div className="product-tags">
                {product.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              <div className="product-icon">
                <button className="cart-btn" aria-label="加入購物車"></button>
                <button className="like-btn" aria-label="加入收藏"></button>
              </div>
            </div>
            <div className="product-title">
              {product.title}
              <span className="product-subtitle">{product.subtitle}</span>
            </div>
            <div className="product-desc">{product.desc}</div>
            <a href="#" className="product-link">
              <span className="arrow">&gt;</span><span className="text">看完整產品內容</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}