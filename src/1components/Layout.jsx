import React, { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import NavbarHidden from './NavbarHidden';
import styles from '../../scss/pages/1component/layout.module.scss';

export default function Layout() {
  const location = useLocation();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showHiddenNavbar, setShowHiddenNavbar] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const SHOW_HIDDEN_NAVBAR_SCROLL_THRESHOLD = 100;


  const isQuizPage = location.pathname.startsWith('/quiz');

  useEffect(() => {
    if (isQuizPage) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      setScrollY(currentScroll); // 更新 scrollY 狀態

      if (currentScroll <= 0) {
        setHideNavbar(false);
        setShowHiddenNavbar(false);
      } else if (currentScroll > lastScrollTop + 10) {
        setHideNavbar(true);
        setShowHiddenNavbar(false);
      } else if (currentScroll < lastScrollTop - 10) {
        setHideNavbar(false);
        setShowHiddenNavbar(true);
      }

      setLastScrollTop(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop, isQuizPage]);

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
            <Navbar />
          </div>

          {/* 僅在往上滑且不是最頂端時顯示 HiddenNavbar */}
          {/* {showHiddenNavbar && scrollY > 0 && <NavbarHidden />} */}
          {showHiddenNavbar && scrollY > SHOW_HIDDEN_NAVBAR_SCROLL_THRESHOLD &&  (  <div className={styles.dropDown}>
    <NavbarHidden />
  </div>) }

        </>
      )}
      <Outlet />
    </>
  );
}
