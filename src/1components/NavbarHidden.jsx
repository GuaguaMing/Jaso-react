import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from '../../scss/pages/1component/navbarhidden.module.scss';

const NavbarHidden = () => {
  return (
    <header>
      <div className={styles.navHidden}>
        <a className={styles.logo2} href="/article-main.html">
        <img src={`${import.meta.env.BASE_URL}assets/nav-logo.svg`} alt="logo"/>
          {/* <img src={navLogo} alt="logo" /> */}
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
            <div className={styles.member2}>會員</div>
            <a className={styles.shopList2} href="/shop-list.html">
              <img src="/assets/shop-list.svg" alt="" />
            </a>

            <div className={styles.beanShape2}>
              <div className={styles.goToShop2}>素購</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarHidden;
