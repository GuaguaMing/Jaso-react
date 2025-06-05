import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from '../../scss/pages/1component/navbar.module.scss';


export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false); // 控制 menu 狀態
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

  return (
    <header className={styles.navbarMain}>
      <div className={styles.navbarContainer}>

        {/* 左側 logo 首頁不顯示 */}
        {!isHome && (
          <div className={styles.navLeft}>
            <a href="/"><img src="./assets/nav-logo.svg" alt="Jaso Logo" className="navbarLogo" /></a>
          </div>
        )}

        {/* 中間導覽連結 */}
        <div className={styles.navbarCenter}>
          <nav className={styles.navbarLinks}>
            <ul>
              <li><Link to="/guide">食物庫</Link></li>
              <li><Link to="/article">素食知識</Link></li>
              <li><Link to="/quiz">營養素算</Link></li>
            </ul>
          </nav>
        </div>

        {/* 右側會員與購物按鈕 */}
        <div className={styles.navRight}>
          {isLoggedIn ? (
            <div className={styles.navMember}>
              <Link to="/memberCenter">Hi, {userName}</Link>
            </div>
          ) : (
            <div className={styles.navMember}>
              <Link to="/login">登入</Link>
            </div>
          )}

          {isLoggedIn && (
<div className={styles.shopIcon}>
  <Link to="/cart">
              <img src="./assets/shop-list.svg" alt="" /></Link> 
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
            <li><Link to="/cart"><img src={`${import.meta.env.BASE_URL}images/icons/btn-shop.svg`} alt="cart" className={styles.navIcon}/></Link> </li>
    
            <li><Link to="/memberCenter" className={styles.navHamburgerMember}>登入</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
