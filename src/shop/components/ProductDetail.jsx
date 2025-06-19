import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import products from '../../productData/products';
import styles from '../../../scss/pages/shop/productDetail.module.scss';
import LikeButton from '../../1components/LikeButton'; 

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');
  const [liked, setLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const handleToggle = () => {
    setIsAdded(prev => !prev);
  };


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
        {/* 左側圖片 */}
        <div className={styles.productLeft}>
          <img
            src={`${import.meta.env.BASE_URL}${product.image.default.replace(/^\.*\//, '')}`}
            alt={product.name}
            className={styles.productImage}
          />
        </div>

        {/* 右側資訊 */}
        <div className={styles.productRight}>
          <span className={styles.tag}>{product.tags}</span>
          <h2 className={styles.shopTitle}>{product.name}</h2>

          {/* 商品特點 */}
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

          {/* 食材圖 + 查看素食庫 */}
          <div className={styles.ingredientRow}>
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
            <Link to="/Guide" className={styles.productMedicineLink}>
              <span className={styles.text}>查看完整素食庫</span>
              <span className={styles.arrow}>&gt;</span>
            </Link>
          </div>

          {/* 價格 */}
          <div className={styles.shopPrice}>
            <h1>NT${product.price}</h1>
            <div className={styles.originalPrice}>
              <h3>NT$580</h3>
              <p>定期購 30% off</p>
            </div>
          </div>

          {/* 數量 + 購物車 + 收藏 */}
          <div className={styles.shopQuantity}>
            <div className={styles.cartActionGroup}>
              <label>數量</label>
              <input type="number" defaultValue="1" min="1" />
              <button
                className={`${styles.addToCartBtn} ${isAdded ? styles.disabledBtn : ''}`}
                onClick={() => {
                  if (!isLoggedIn) {
                    navigate('/login');
                  } else {
                    handleToggle();
                  }
                }}
              >
                {isAdded ? '取消加入' : '加入素購車'}
              </button>

              {/* {isLoggedIn && (
                <button
                  className={`${styles.likeBtn} ${liked ? styles.active : ''}`}
                  aria-label="收藏"
                  onClick={() => setLiked(prev => !prev)}
                >
                  <img
                    src={
                      liked
                        ? `${import.meta.env.BASE_URL}images/icons/btn-like-hover.svg`
                        : `${import.meta.env.BASE_URL}images/icons/btn-like-default.svg`
                    }
                    alt={liked ? '已收藏' : '加入收藏'}
                    style={{ width: 30, height: 30 }}
                  />
                </button>
              )} */}

{isLoggedIn && (
  <LikeButton
    productId={product.id}
    className={styles.likeBtn}
    style={{ width: 40, height: 40 }}
  />
)}

            </div>

            {!isLoggedIn && (
              <div className={styles.loginRow}>
                <button
                  className={styles.shopMedicineShopBtn}
                  onClick={() => navigate('/login')}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/icons/btn-like-hover.svg`}
                    alt="Like Icon"
                  />
                  登入會員收藏
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 評論與產品細節圖 */}
      <img
        src={`${import.meta.env.BASE_URL}images/Pd/section-Comment.png`}
        alt="評論"
      />
      <img
        src={`${import.meta.env.BASE_URL}${product.detailImage.replace(/^\.*\//, '')}`}
        alt="產品細節"
      />
    </div>
  );
}
