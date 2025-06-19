import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import NavbarHidden from './NavbarHidden';
import Footer from './Footer';

import styles from '../../scss/pages/1component/layout.module.scss';

export default function Layout({ cartItems = [], cartAnimation = false, onToggleCartItem }) {
  console.log('Layout received cartItems:', cartItems);
  const location = useLocation();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showHiddenNavbar, setShowHiddenNavbar] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const SHOW_HIDDEN_NAVBAR_SCROLL_THRESHOLD = 100;
  const [showNavbarHidden, setShowNavbarHidden] = useState(false);
  const [fadeOutNavbarHidden, setFadeOutNavbarHidden] = useState(false);
  const fadeOutTimerRef = useRef(null);
  



  const isQuizPage = location.pathname.startsWith('/quiz');

  useEffect(() => {
    if (isQuizPage) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      setScrollY(currentScroll); // 更新 scrollY 狀態

      if (currentScroll <= 0) {
        setHideNavbar(false);
        setShowHiddenNavbar(false);
          if (showNavbarHidden) {
    setFadeOutNavbarHidden(true);
    clearTimeout(fadeOutTimerRef.current); // 清掉舊的
  fadeOutTimerRef.current = setTimeout(() => {
    setShowNavbarHidden(false);
  }, 400); // 等動畫時間結束後再關掉
  }
      // setFadeOutNavbarHidden(true);
      // setTimeout(() => setShowNavbarHidden(false), 400);
      } else if (currentScroll > lastScrollTop + 10) {
        setHideNavbar(true);
        setShowHiddenNavbar(false);
        if (showNavbarHidden) {
        setFadeOutNavbarHidden(true);
         clearTimeout(fadeOutTimerRef.current); // 避免 timer 疊加
  fadeOutTimerRef.current = setTimeout(() => {
    setShowNavbarHidden(false);
  }, 400);
      }
      } else if (currentScroll < lastScrollTop - 10) {
        setHideNavbar(false);
        setFadeOutNavbarHidden(false);
        setShowHiddenNavbar(true);
        setShowNavbarHidden(true);
      }

      setLastScrollTop(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);

      return () => {
    window.removeEventListener('scroll', handleScroll);
    clearTimeout(fadeOutTimerRef.current); // 這才是妳後來需要補的
  };
}, [lastScrollTop, isQuizPage, showNavbarHidden]);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [lastScrollTop, isQuizPage]);

  return (
    <>
      {isQuizPage ? null : (
        <>
          {/* 僅在非置頂 && 非 showHiddenNavbar 時顯示 Navbar */}
          <div
            className={`${styles.navbarWrapper} ${
              hideNavbar || showHiddenNavbar ? styles.hidden : ''
            }`}
          >
            
              <Navbar 
        cartItems={cartItems} 
        cartAnimation={cartAnimation}
        onToggleCart={() => {
          // 這裡可以處理購物車切換邏輯
          console.log('Toggle cart from navbar');
        }}
      />

          </div>

          {/* 僅在往上滑且不是最頂端時顯示 HiddenNavbar */}
          {/* {showHiddenNavbar && scrollY > 0 && <NavbarHidden />} */}
          {/* {showHiddenNavbar && scrollY > SHOW_HIDDEN_NAVBAR_SCROLL_THRESHOLD &&  (  <div className={styles.dropDown}>
    <NavbarHidden />
  </div>) } */}
{showNavbarHidden && scrollY > SHOW_HIDDEN_NAVBAR_SCROLL_THRESHOLD && (
  <div
    className={`${styles.navHiddenWrapper} ${
      fadeOutNavbarHidden ? styles.fadeOut : styles.fadeIn
    }`}
  >
    <NavbarHidden 
        cartItems={cartItems} 
        cartAnimation={cartAnimation}
        onToggleCart={() => {
          // 這裡可以處理購物車切換邏輯
          console.log('Toggle cart from navbar');
        }}/>
  </div>
)}
        </>
      )}
      <Outlet context={{ cartItems, onToggleCartItem }} />
      <Footer /> 
    </>
  );
}
