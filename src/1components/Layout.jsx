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
  const [isMobile, setIsMobile] = useState(false);
  const SHOW_HIDDEN_NAVBAR_SCROLL_THRESHOLD = 100;
  const [showNavbarHidden, setShowNavbarHidden] = useState(false);
  const [fadeOutNavbarHidden, setFadeOutNavbarHidden] = useState(false);
  const fadeOutTimerRef = useRef(null);
  
  const isQuizPage = location.pathname.startsWith('/quiz');

  // 檢測是否為手機版
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1130); // 1130px 以下視為手機版
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    if (isQuizPage) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      setScrollY(currentScroll);

      // 如果是手機版，不執行滾動隱藏邏輯
      if (isMobile) {
        return;
      }

      if (currentScroll <= 0) {
        setHideNavbar(false);
        setShowHiddenNavbar(false);
        
        if (showNavbarHidden) {
          setFadeOutNavbarHidden(true);
          clearTimeout(fadeOutTimerRef.current);
          fadeOutTimerRef.current = setTimeout(() => {
            setShowNavbarHidden(false);
          }, 400);
        }
      } else if (currentScroll > lastScrollTop + 10) {
        setHideNavbar(true);
        setShowHiddenNavbar(false);
        if (showNavbarHidden) {
          setFadeOutNavbarHidden(true);
          clearTimeout(fadeOutTimerRef.current);
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
      clearTimeout(fadeOutTimerRef.current);
    };
  }, [lastScrollTop, isQuizPage, showNavbarHidden, isMobile]);

  return (
    <>
      {isQuizPage ? null : (
        <>
          {/* 桌面版：原有的滾動行為 */}
          {/* 手機版：navbar 永遠顯示 */}
          <div
            className={`${styles.navbarWrapper} ${
              !isMobile && (hideNavbar || showHiddenNavbar) ? styles.hidden : ''
            } ${isMobile ? styles.mobileFixed : ''}`}
          >
            <Navbar
              cartItems={cartItems}
              cartAnimation={cartAnimation}
              onToggleCart={() => {
                console.log('Toggle cart from navbar');
              }}
            />
          </div>

          {/* 隱藏的 navbar 只在桌面版顯示 */}
          {!isMobile && showNavbarHidden && scrollY > SHOW_HIDDEN_NAVBAR_SCROLL_THRESHOLD && (
            <div
              className={`${styles.navHiddenWrapper} ${
                fadeOutNavbarHidden ? styles.fadeOut : styles.fadeIn
              }`}
            >
              <NavbarHidden
                cartItems={cartItems}
                cartAnimation={cartAnimation}
                onToggleCart={() => {
                  console.log('Toggle cart from navbar');
                }}
              />
            </div>
          )}
        </>
      )}
      <Outlet context={{ cartItems, onToggleCartItem }} />
      <Footer />
    </>
  );
}