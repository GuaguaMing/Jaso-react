import React from 'react';

function ProductCard({ product }) {
  // 商品
  const products = [
    { id: 1, name: "鈣心定植物鈣", desc: "維鈣+D3雙效配方", price: 365, image: "./images/B12-default.png" },
    { id: 2, name: "B群活力膠囊", desc: "提升代謝與精神", price: 420, image: "./images/B12-default.png" },
    { id: 3, name: "益生菌健康粉", desc: "幫助消化與腸道健康", price: 380, image: "./images/B12-default.png" },
    { id: 4, name: "維他命C泡騰錠", desc: "促進膠原生成", price: 250, image: "./images/B12-default.png" },
    { id: 5, name: "深海魚油", desc: "保護心血管", price: 520, image: "./images/B12-default.png" },
    { id: 6, name: "葉黃素晶亮錠", desc: "保護視力", price: 490, image: "./images/B12-default.png" },
  ];

  return (
    <>
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
      <RecentViewed products={products} cartItems={cartItems} onAddToCart={handleAddToCart} />
    </>
  );
}

export default ProductCard;
