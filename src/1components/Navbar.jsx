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

  const updateLoginStatus = () => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");

    if (token) {
      setIsLoggedIn(true);
      setUserName(name || "會員");
    } else {
      setIsLoggedIn(false);
      setUserName("");
    }
  };

  useEffect(() => {
    updateLoginStatus(); // 初始狀態

    // ✅ 監聽登入或登出後的 storage 變化
    const handleStorageChange = () => {
      updateLoginStatus();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleCartClickManual = (e) => {
    e.preventDefault();
    if (onToggleCart && typeof onToggleCart === 'function') {
      onToggleCart();
    }
    navigate('/cart');
  };

  const getTotalCartItems = () => {
    if (!Array.isArray(cartItems)) return 0;
    return cartItems.reduce((sum, item) => sum + (item.qty || 0), 0);
  };

  return (
    <header className={styles.navbarMain}>
      <div className={styles.navbarContainer}>
        {!isHome && (
          <div className={styles.navLeft}>
            <a className={styles.navbarLogo}>
              <Link to="/">
                <img src={`${import.meta.env.BASE_URL}assets/nav-logo.svg`} alt="JasoLogo" />
              </Link>
            </a>
          </div>
        )}

        <div className={styles.navbarCenter}>
          <nav className={styles.navbarLinks}>
            <ul>
              <li><Link to="/guide">素食庫</Link></li>
              <li><Link to="/article">素食知識</Link></li>
              <li><Link to="/quiz">營養素算</Link></li>
            </ul>
          </nav>
        </div>

        <div className={styles.navRight}>
          {isLoggedIn ? (
            <>
              <div className={styles.navMember}>
                <Link to="/memberCenter" className={styles.avatarWrapper}>
                  <div className={styles.avatarContent}>
                    <img
                      src={`${import.meta.env.BASE_URL}images/icons/btn-member-default.svg`}
                      alt="會員頭像"
                      className={styles.avatarIcon}
                    />
                    <div className={styles.userName}>Hello, {userName}</div>
                  </div>
                </Link>
              </div>

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
            <button className={`${styles.navHamburger} ${menuOpen ? styles.isActive : ''}`} onClick={toggleMenu}>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
            <div className={styles.goToShop}><Link to="/shop">素購</Link></div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li><Link to="/guide">素食庫</Link></li>
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
