import React, { useState, useEffect, useCallback } from 'react';
import styles from '../../../scss/pages/shop/shop.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import LikeButton from '../../1components/LikeButton'; 

// 購物車管理工具函數
const CartManager = {
  // 獲取購物車數據
  getCart: () => {
    try {
      const cart = localStorage.getItem('cart');
      return cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.error('Error getting cart from localStorage:', error);
      return [];
    }
  },

  // 保存購物車數據
  saveCart: (cart) => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
      // 觸發自定義事件
      window.dispatchEvent(new CustomEvent('cartUpdated', { 
        detail: { cart, timestamp: Date.now() } 
      }));
      return true;
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
      return false;
    }
  },

  // 檢查商品是否在購物車中
  isInCart: (productId) => {
    const cart = CartManager.getCart();
    return cart.some(item => item.id === productId);
  },

  // 添加商品到購物車
  addToCart: (product) => {
    try {
      const cart = CartManager.getCart();
      const existingItem = cart.find(item => item.id === product.id);
      
      let updatedCart;
      if (existingItem) {
        // 如果已存在，增加數量
        updatedCart = cart.map(item => 
          item.id === product.id 
            ? { ...item, qty: (item.qty || 1) + 1 }
            : item
        );
      } else {
        // 如果不存在，添加新商品
        updatedCart = [...cart, { ...product, qty: 1 }];
      }
      
      return CartManager.saveCart(updatedCart) ? updatedCart : cart;
    } catch (error) {
      console.error('Error adding to cart:', error);
      return CartManager.getCart();
    }
  },

  // 從購物車移除商品
  removeFromCart: (productId) => {
    try {
      const cart = CartManager.getCart();
      const updatedCart = cart.filter(item => item.id !== productId);
      return CartManager.saveCart(updatedCart) ? updatedCart : cart;
    } catch (error) {
      console.error('Error removing from cart:', error);
      return CartManager.getCart();
    }
  }
};

// 收藏商品管理 Hook
const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('favorites');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error parsing favorites from localStorage:', error);
      setFavorites([]);
    }
  }, []);

  const toggleFavorite = useCallback((productId) => {
    setFavorites(prev => {
      const updatedFavorites = prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId];
      
      try {
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      } catch (error) {
        console.error('Error saving favorites:', error);
      }
      
      return updatedFavorites;
    });
  }, []);

  const isFavorite = useCallback((productId) => favorites.includes(productId), [favorites]);

  return { favorites, toggleFavorite, isFavorite };
};

function ProductCard({ product, cartItems = [], setCartItems = null }) {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();

  // 判斷是否使用外部狀態管理
  const hasExternalCartManagement = Array.isArray(cartItems) && typeof setCartItems === 'function';

  // 檢查商品是否在購物車中
  const checkIsInCart = useCallback(() => {
    if (hasExternalCartManagement) {
      return cartItems.some(item => item.id === product.id);
    } else {
      return CartManager.isInCart(product.id);
    }
  }, [hasExternalCartManagement, cartItems, product.id]);

  // 初始化 isAdded 狀態
  useEffect(() => {
    setIsAdded(checkIsInCart());
  }, [checkIsInCart]);

  // 處理購物車操作
  const handleToggleCartItem = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isLoading) return;
    
    setIsLoading(true);
    
    try {
      if (hasExternalCartManagement) {
        // 使用外部狀態管理
        setCartItems(prevItems => {
          const exists = prevItems.some(item => item.id === product.id);
          let updatedItems;
          
          if (exists) {
            updatedItems = prevItems.filter(item => item.id !== product.id);
          } else {
            updatedItems = [...prevItems, { ...product, qty: 1 }];
          }
          
          // 同步到 localStorage
          CartManager.saveCart(updatedItems);
          return updatedItems;
        });
      } else {
        // 使用內部購物車管理
        const currentInCart = CartManager.isInCart(product.id);
        let updatedCart;
        
        if (currentInCart) {
          updatedCart = CartManager.removeFromCart(product.id);
          console.log('商品已從購物車移除:', product.name);
        } else {
          updatedCart = CartManager.addToCart(product);
          console.log('商品已加入購物車:', product.name, updatedCart);
        }
        
        setIsAdded(!currentInCart);
      }
    } catch (error) {
      console.error('購物車操作失敗:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 處理收藏功能
  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  // 監聽購物車更新事件
  useEffect(() => {
    if (!hasExternalCartManagement) {
      const handleCartUpdate = (event) => {
        try {
          const { cart } = event.detail;
          const exists = cart.some(item => item.id === product.id);
          setIsAdded(exists);
        } catch (error) {
          console.error('Error handling cart update event:', error);
        }
      };

      window.addEventListener('cartUpdated', handleCartUpdate);
      return () => window.removeEventListener('cartUpdated', handleCartUpdate);
    }
  }, [product.id, hasExternalCartManagement]);

  // 調試信息
  useEffect(() => {
    console.log('ProductCard Debug:', {
      productId: product.id,
      productName: product.name,
      isAdded,
      hasExternalCartManagement,
      currentCart: hasExternalCartManagement ? cartItems : CartManager.getCart()
    });
  }, [isAdded, product.id, product.name, hasExternalCartManagement, cartItems]);

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
          className={`${styles.addToCartBtn} ${isAdded ? styles.added : ''} ${isLoading ? styles.loading : ''}`}
          onClick={handleToggleCartItem}
          disabled={isLoading}
        >
          {isLoading ? '處理中...' : (isAdded ? '取消加入' : '加入素購車')}
        </button>
        
        <div className={styles.likeBtn} onClick={handleToggleFavorite}>
          <LikeButton
            productId={product.id}
            className={styles.likeBtn}
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

