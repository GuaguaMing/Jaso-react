import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from '../../scss/pages/1component/navbar.module.scss';

export default function Navbar({ cartItems = [], cartAnimation = false, onToggleCart }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("陳素食");

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 修正版本1: 根據 onToggleCart 的存在決定行為
  const handleCartClick = (e) => {
    console.log('Cart clicked', { cartItems });
    
    if (onToggleCart && typeof onToggleCart === 'function') {
      // 如果有 onToggleCart 函數，先執行它
      e.preventDefault();
      onToggleCart();
      // 如果 onToggleCart 不會處理導航，手動導航到購物車
      // 你可以根據實際需求決定是否需要這行
      // navigate('/cart');
    }
    // 如果沒有 onToggleCart，讓 Link 正常導航
  };

  // 修正版本2: 總是導航到購物車頁面
  const handleCartClickAlternative = (e) => {
    console.log('Cart clicked', { cartItems });
    
    // 如果有 onToggleCart 函數，執行它（但不阻止導航）
    if (onToggleCart && typeof onToggleCart === 'function') {
      onToggleCart();
    }
    // 讓 Link 正常導航到 /cart（不使用 preventDefault）
  };

  // 修正版本3: 使用 navigate 手動控制導航
  const handleCartClickManual = (e) => {
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
    <header className={styles.navbarMain}>
      <div className={styles.navbarContainer}>

        {/* 左側 logo 首頁不顯示 */}
        {!isHome && (
          <div className={styles.navLeft}>
            <a className={styles.navbarLogo}>
              <Link to="/">
                <img src={`${import.meta.env.BASE_URL}assets/nav-logo.svg`} alt="JasoLogo" />
              </Link>
            </a>
          </div>
        )}

        {/* 中間導覽連結 */}
        <div className={styles.navbarCenter}>
          <nav className={styles.navbarLinks}>
            <ul>
              <li><Link to="/guide">素食庫</Link></li>
              <li><Link to="/article">素食知識</Link></li>
              <li><Link to="/quiz">營養素算</Link></li>
            </ul>
          </nav>
        </div>

        {/* 右側會員與購物按鈕 */}
        <div className={styles.navRight}>
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

              {/* 購物車圖示 - 使用修正版本3 */}
              <div className={styles.shopIcon} style={{ position: 'relative' }}>
                <Link to="/cart" onClick={handleCartClickManual}>
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

          <div className={styles.beanShape}>
            {/* 漢堡 */}
            <button className={`${styles.navHamburger} ${menuOpen ? styles.isActive : ''}`} onClick={toggleMenu}>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
            <div className={styles.goToShop}><Link to="/shop">素購</Link></div>
          </div>
        </div>
      </div>

      {/* 漢堡下拉 */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li><Link to="/guide">食物庫</Link></li>
            <li><Link to="/article">素食知識</Link></li>
            <li><Link to="/quiz">營養素算</Link></li>
            <li><Link to="/shop">素購</Link></li>
          </ul>
          <ul>
            <li>
              <Link to="/cart" onClick={handleCartClickManual}>
                <img 
                  src={`${import.meta.env.BASE_URL}images/icons/btn-shop.svg`} 
                  alt="cart" 
                  className={styles.navIcon}
                />
                {getTotalCartItems() > 0 && (
                  <span className={styles.cartCountBadge}>
                    {getTotalCartItems()}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link to="/memberCenter" className={styles.navHamburgerMember}>
                {isLoggedIn ? `Hi, ${userName}` : '登入'}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}