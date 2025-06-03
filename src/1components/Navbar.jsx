import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from '../../scss/pages/1component/navbar.module.scss';


export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false); // 控制 menu 狀態

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
          <div className={styles.navMember}><Link to="/memberCenter">登入</Link></div>
          <div className={styles.navIcon}><Link to="/cart"></Link></div>
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
            <li><Link to="/cart"><img src="./images/icons/j_shop_buy.svg" alt="cart" className={styles.navIcon} /></Link></li>
            <li><Link to="/memberCenter" className={styles.navHamburgerMember}>登入</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
