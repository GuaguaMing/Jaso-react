
import React from 'react';
import './css/style.min.css';
import './main.css';

export default function Navbar() {
  return (
    <header className="main-navbar">
      <div className="navbar-container">
        {/* 左側 logo */}
        <div className="navbar-left">
          <a href="/"><img src="/assets/img/nav-logo.svg" alt="Jaso Logo" className="navbar-logo" /></a>
        </div>

        {/* 中間導覽連結 */}
        <div className="navbar-center">
          <nav className="navbar-links">
            <a href="#" className="nav-link">食物庫</a>
            <a href="#" className="nav-link">素食知識</a>
            <a href="#" className="nav-link">營養素算</a>
          </nav>
        </div>

        {/* 右側會員與購物按鈕 */}
        <div className="navbar-right">
          <div className="member">會員</div>
          <div className="bean-shape">
            <div className="go-to-shop"><a href="/shop">素購</a></div>
          </div>
        </div>
      </div>
    </header>
  );
}
