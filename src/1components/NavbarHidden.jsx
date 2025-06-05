import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from '../../scss/pages/1component/navbarhidden.module.scss';

const NavbarHidden = () => {
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
        <a className={styles.logo2}>
          <Link to="/">
            <img src={`${import.meta.env.BASE_URL}assets/nav-logo.svg`} alt="logo" />
          </Link>
        </a>

        <div className={styles.navbar2}>
          <div className={styles.navCenter2}>
            <ul>
              <li><Link to="/guide">食物庫</Link></li>
              <li><Link to="/article">素食知識</Link></li>
              <li><Link to="/quiz">營養素算</Link></li>
            </ul>
          </div>

          <div className={styles.navRight2}>
            <div className={styles.member2}>
              {isLoggedIn
                ? <Link to="/memberCenter">Hi, {userName}</Link>
                : <Link to="/login">登入</Link>
              }
            </div>

            {isLoggedIn && (
              <a className={styles.shopList2}>
                <Link to="/cart">
                  <img src={`${import.meta.env.BASE_URL}assets/shop-list.svg`} alt="cart" />
                </Link>
              </a>
            )}

            <div className={styles.beanShape2}>
              <div className={styles.goToShop2}><Link to="/shop">素購</Link></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarHidden;