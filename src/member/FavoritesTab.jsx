import React from 'react';

export default function FavoritesTab() {
  // 假資料範例，後續可串接 API 或 props 傳入
  const products = Array(5).fill({
    image: './shop/img/jaso-medicine_Ca.png',
    tags: ['手腳冰冷', '手腳冰冷'],
    title: '鈣心定植物鈣',
    subtitle: '藻鈣+D3雙效配方',
    desc: '骨質疏鬆症找上門？補鈣不能只靠牛奶？同時也要補維生素D！幫助吸收鈣質也幫助骨骼更...'
  });

  return (
    <div className="tab-content" id="favorites">
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image-wrapper">
              <img src={product.image} alt={`產品${index + 1}`} className="product-image" />
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
              <span className="arrow">&gt;</span>
              <span className="text">看完整產品內容</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
