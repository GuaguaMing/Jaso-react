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
        onClick={() => navigate('/shop', { state: { scrollToProductList: true } })}
      >
        素購
      </button>
      &nbsp;＞&nbsp;&nbsp;
      <span className={styles.productName}>{product.name}</span>

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

          {/* 商品特點：用換行 split 顯示段落 */}
          <div className={styles.productPoints}>
            {product.productPoints.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* 圓形標籤 */}
          <ul className={styles.shopMedicineTagList}>
            <li className={styles.shopLi}>B12<br />純素滴劑</li>
            <li className={styles.shopLi}>海藻<br />萃取物</li>
            <li className={styles.shopLi}>營養<br />酵母</li>
            <li className={styles.shopLi}>維生素C</li>
          </ul>

          {/* 食材小圖示 */}
          <ul className={styles.ingredientIcons}>
            {Object.values(product.friendImage).map((src, index) => (
              <li key={index}>
                <img
                  src={`${import.meta.env.BASE_URL}${src.replace(/^\.*\//, '')}`}
                  alt={`friend-${index}`}
                />
              </li>
            ))}
          </ul>

          {/* 查看更多連結 */}
          <a href="#" className={styles.productMedicineLink}>
            <span className={styles.text}>查看更多素食成分</span>
            <span className={styles.arrow}>&gt;</span>
          </a>

          {/* 價格 */}
          <div className={styles.shopPrice}>
            <h1>NT${product.price}</h1>
            <div className={styles.originalPrice}>
              <h3>NT$580</h3>
              <p>定期購 30% off</p>
            </div>
          </div>

          {/* 數量與購物車 */}
          <div className={styles.shopQuantity}>
            <p>數量</p>
            <input type="number" defaultValue="1" min="1" />
            <button className="add-to-cart">加入購物車</button>
          </div>

          {/* 收藏按鈕 */}
          <button
            className="shop-medicine-shop-btn"
            onClick={() => navigate('/login')}
          >
            <img src="/icons/img/like-btn-hover.svg" alt="Like Icon" />
            登入會員收藏
          </button>
        </div>
      </div>

      {/* 評論與細節圖 */}
      <img src={`${import.meta.env.BASE_URL}images/Pd/section-Comment.png`} alt="評論" />
      <img
        src={`${import.meta.env.BASE_URL}${product.detailImage.replace(/^\.*\//, '')}`}
        alt="產品細節"
      />
    </div>
  );
}
