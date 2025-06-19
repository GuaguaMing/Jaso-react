import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from '../../scss/pages/1component/navbarhidden.module.scss';

const NavbarHidden = ({ cartItems = [], cartAnimation = false, onToggleCart }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault(); // 阻止默認導航
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    // 如果不是當前頁面，Link 會正常工作
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("會員");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");
    if (token) {
      setIsLoggedIn(true);
      setUserName(name || "會員");
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // 購物車點擊處理函數 - 手動控制導航
  const handleCartClick = (e) => {
    e.preventDefault(); // 總是阻止 Link 的預設行為
    console.log('Cart clicked', { cartItems });
    
    // 如果有 onToggleCart 函數，執行它
    if (onToggleCart && typeof onToggleCart === 'function') {
      onToggleCart();
    }
    
    // 手動導航到購物車頁面
    navigate('/cart');
  };

  // 計算購物車商品總數量
  const getTotalCartItems = () => {
    if (!Array.isArray(cartItems)) return 0;
    return cartItems.reduce((sum, item) => sum + (item.qty || 0), 0);
  };

  return (
    <header>
      <div className={styles.navHidden}>
        <a href="#" className={styles.logo2}>
          <Link to="/" onClick={(e) => handleLinkClick(e, '/')}
                className={location.pathname === '/' ? 'active' : ''}>
            <img src={`${import.meta.env.BASE_URL}assets/nav-logo.svg`} alt="logo" />
          </Link>
        </a>

        <div className={styles.navbar2}>
          <div className={styles.navCenter2}>
            <ul>
              <li><Link to="/guide" onClick={(e) => handleLinkClick(e, '/guide')}
                className={location.pathname === '/guide' ? 'active' : ''}
                >素食庫</Link></li>
              <li><Link to="/article" 
                              onClick={(e) => handleLinkClick(e, '/article')}
                              className={location.pathname === '/article' ? 'active' : ''}
                              >素食知識</Link></li>
              <li><Link to="/quiz"
                              onClick={(e) => handleLinkClick(e, '/quiz')}
                              className={location.pathname === '/quiz' ? 'active' : ''}
                              >營養素算</Link></li>
            </ul>
          </div>

          <div className={styles.navRight2}>
            {isLoggedIn ? (
              <>
                <div className={styles.navMember}>
                  <Link to="/memberCenter" className={styles.avatarWrapper}>
                    <div className={styles.avatarContent}>
                      <img
                        src={`${import.meta.env.BASE_URL}images/icons/btn-member-default.svg`}
                        style={{ width: '40px', height: '10px' }}
                        alt="會員頭像"
                        className={styles.avatarIcon}
                      />
                      <div className={styles.userName}>Hello, {userName}</div>
                    </div>
                  </Link>
                </div>

                {/* 購物車圖示 - 加入購物車功能 */}
                <div className={styles.shopIcon} style={{ position: 'relative' }}>
                  <Link to="/cart" onClick={handleCartClick}>
                    <img 
                      src={`${import.meta.env.BASE_URL}assets/shop-list.svg`} 
                      alt="購物車" 
                      className={styles.cartIcon}
                    />
                    {getTotalCartItems() > 0 && (
                      <span className={`${styles.cartCountBadge} ${cartAnimation ? styles.bump : ''}`}>
                        {getTotalCartItems()}
                      </span>
                    )}
                  </Link>
                </div>
              </>
            ) : (
              <div className={styles.navMember}>
                <Link to="/login">登入</Link>
              </div>
            )}
            
            <div className={styles.beanShape2}>
              <div className={styles.goToShop2}>
                <Link to="/shop"
                 onClick={(e) => handleLinkClick(e, '/shop')}
                 className={location.pathname === '/shop' ? 'active' : ''}
                >素購</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarHidden;