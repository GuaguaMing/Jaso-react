import React from 'react';

const GuideModal = ({ data, onClose }) => {
  return (
    <div className="guide-detail show" onClick={(e) => e.stopPropagation()}>
      <button className="guide-close" onClick={onClose}>✕</button>
      <img src={data.icon} className="guide-icon" alt="icon" />
      <h2 className="guide-title">{data.title}</h2>
      <p className="guide-description">{data.desc}</p>

      <h4 className="guide-section-title">營養好夥伴</h4>
      <div className="guide-partners">
        {data.partners.map((item, index) => (
          <div className="guide-partners-item" key={index}>
            <div className="img-hover-wrap">
              <img src={item.src} alt={item.name} className="img-default" />
              <img src={item.hover} alt={`${item.name} hover`} className="img-hover" />
               <img src={item.hover2} alt={`${item.name} hover2`} className="img-hover img-hover2" />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <h4 className="guide-section-title">推薦營養品</h4>
      <div className="guide-products">
        {data.products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image-wrapper">
              <img src={product.img} alt={product.title} className="product-image" />
            </div>
            <div className="product-meta">
              <div className="product-tags">
                {product.tags.map((tag, i) => <span className="tag" key={i}>{tag}</span>)}
              </div>
              <div className="product-icon">
                <button className="cart-btn" aria-label="加入購物車"></button>
                <button className="like-btn" aria-label="加入收藏"></button>
              </div>
            </div>
            <div className="product-title">{product.title}
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
};

export default GuideModal;