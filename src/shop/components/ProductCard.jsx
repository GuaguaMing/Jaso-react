import React, { useState, useEffect } from 'react';
import styles from '../../../scss/pages/shop/shop.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import LikeButton from '../../1components/LikeButton'; 


// 收藏商品管理 Hook
const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (error) {
        console.error('Error parsing favorites from localStorage:', error);
        setFavorites([]);
      }
    }
  }, []);

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const updatedFavorites = prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId];
      
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const isFavorite = (productId) => favorites.includes(productId);

  return { favorites, toggleFavorite, isFavorite };
};

function ProductCard({ product, cartItems = [], setCartItems = () => {} }) {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();

  // 檢查商品是否在購物車中
  useEffect(() => {
    // 優先使用傳入的 cartItems
    if (cartItems.length > 0) {
      const exists = cartItems.some(item => item.id === product.id);
      setIsAdded(exists);
    } else {
      // 如果沒有傳入 cartItems，則檢查 localStorage
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const exists = cart.some(item => item.id === product.id);
      setIsAdded(exists);
    }
  }, [product.id, cartItems]);

  // 購物車同步處理 - 修正後的函數
  const handleToggleCartItem = () => {
    // 檢查是否有傳入有效的 setCartItems 函數
    const hasValidSetCartItems = typeof setCartItems === 'function' && 
      setCartItems.toString() !== '() => {}';

    if (hasValidSetCartItems) {
      // 使用傳入的狀態管理
      setCartItems(prevItems => {
        const exists = prevItems.some(item => item.id === product.id);
        let updatedItems;
        
        if (exists) {
          updatedItems = prevItems.filter(item => item.id !== product.id);
          setIsAdded(false);
        } else {
          updatedItems = [...prevItems, { ...product, qty: 1 }];
          setIsAdded(true);
        }
        
        // 同步更新 localStorage
        localStorage.setItem('cart', JSON.stringify(updatedItems));
        return updatedItems;
      });
    } else {
      // 使用 localStorage 直接管理
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const exists = cart.some(item => item.id === product.id);
      
      let updatedCart;
      if (exists) {
        updatedCart = cart.filter(item => item.id !== product.id);
        setIsAdded(false);
      } else {
        updatedCart = [...cart, { ...product, qty: 1 }];
        setIsAdded(true);
      }
      
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      
      // 觸發自定義事件通知其他組件購物車已更新
      window.dispatchEvent(new CustomEvent('cartUpdated', { 
        detail: { cart: updatedCart } 
      }));
    }
  };

  // 處理收藏功能
  const handleToggleFavorite = (e) => {
    e.preventDefault(); // 防止觸發 Link 導航
    toggleFavorite(product.id);
  };

  // 監聽購物車更新事件（當沒有傳入 cartItems 時）
  useEffect(() => {
    const handleCartUpdate = (event) => {
      if (cartItems.length === 0) {
        const updatedCart = event.detail.cart;
        const exists = updatedCart.some(item => item.id === product.id);
        setIsAdded(exists);
      }
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, [product.id, cartItems.length]);

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
          className={`${styles.addToCartBtn} ${isAdded ? styles.disabled : ''}`}
          onClick={handleToggleCartItem}  
        >
          {isAdded ? '取消加入' : '加入素購車'}
        </button>
        <div className={styles.likeBtn}>
          <LikeButton
            productId={product.id}
            className={styles.likeBtn}
            
            // className={isFavorite(product.id) ? `${styles.likeBtn} ${styles.active}` : styles.likeBtn}
          // aria-label={isFavorite(product.id) ? "取消收藏" : "加入收藏"}
            style={{ width: 30, height: 30 }}
          />

        </div>
      </div>
    </div>
  );
}

export default ProductCard;

// import React, { useState, useEffect } from 'react';
// import styles from '../../../scss/pages/shop/shop.module.scss';
// import { Link } from 'react-router-dom';

// function ProductCard({ product, onToggleCartItem }) {
//   const [isHover, setIsHover] = useState(false);
//   const [liked, setLiked] = useState(false);
//   const [isAdded, setIsAdded] = useState(false);

//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//     const exists = cart.some(item => item.id === product.id);
//     setIsAdded(exists);
//   }, [product.id]);

//   const handleToggle = () => {
//     if (onToggleCartItem) {
//       onToggleCartItem(product);
//       setIsAdded(prev => !prev); // 本地同步按鈕狀態
//     }
//   };

//   return (
//     <div
//       className={styles.productCard}
//       onMouseEnter={() => setIsHover(true)}
//       onMouseLeave={() => setIsHover(false)}
//     >
//       <Link
//         to={`/shop/product/${product.id}`}
//         style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
//       >
//         <div className={styles.productImageWrapper}>
//           <img
//             src={`${import.meta.env.BASE_URL}${isHover ? product.image.hover : product.image.default}`}
//             alt={`產品-${product.name}`}
//             className={styles.productImage}
//           />
//         </div>
//         <div className={styles.productInfo}>
//           <div className={styles.productTags}>{product.tags}</div>
//           <div className={styles.productTitle}>{product.name}</div>
//           <div className={styles.productDesc}>{product.desc}</div>
//         </div>
//       </Link>

//       <div className={styles.productBtnGroup}>
//         <button
//           className={`${styles.addToCartBtn} ${isAdded ? 'btn-RV-disabled' : ''}`}
//           onClick={handleToggle}
//         >
//           {isAdded ? '取消加入' : '加入素購車'}
//         </button>
//         <button
//           className={liked ? `${styles.likeBtn} ${styles.active}` : styles.likeBtn}
//           aria-label="加入收藏"
//           onClick={() => setLiked(prev => !prev)}
//         >
//           <img
//             src={liked
//               ? `${import.meta.env.BASE_URL}images/icons/btn-like-hover.svg`
//               : `${import.meta.env.BASE_URL}images/icons/btn-like-default.svg`}
//             alt={liked ? "已收藏" : "加入收藏"}
//             style={{ width: 30, height: 30 }}
//           />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
