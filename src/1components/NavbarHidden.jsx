import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from '../../scss/pages/1component/navbarhidden.module.scss';

const NavbarHidden = () => {
  const location = useLocation();

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
                >食物庫</Link></li>
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
            <div className={styles.member2}>
              {isLoggedIn
                ? <Link to="/memberCenter" 
                onClick={(e) => handleLinkClick(e, '/memberCenter')}
                className={location.pathname === '/memberCenter' ? 'active' : ''}
                >Hi, {userName}</Link>
                : <Link to="/login"                 
                onClick={(e) => handleLinkClick(e, '/login')}
                className={location.pathname === '/login' ? 'active' : ''}
                >登入</Link>
              }
            </div>

            {isLoggedIn && (
              <div className={styles.shopList2}>
                <Link to="/cart"
                 onClick={(e) => handleLinkClick(e, '/cart')}
                 className={location.pathname === '/cart' ? 'active' : ''}
                >
                  <img src={`${import.meta.env.BASE_URL}assets/shop-list.svg`} alt="cart" />
                </Link>
              </div>
            )}

            <div className={styles.beanShape2}>
              <div className={styles.goToShop2}><Link to="/shop"
               onClick={(e) => handleLinkClick(e, '/shop')}
               className={location.pathname === '/shop' ? 'active' : ''}
              >素購</Link></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarHidden;