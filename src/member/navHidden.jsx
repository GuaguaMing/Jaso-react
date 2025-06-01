import React from 'react';

export default function NavHidden() {
  return (
    <div className="nav-hidden">
      <a href="index.html">
        <div className="logo">
          <img src="./assets/img/nav-logo.svg" alt="Jaso Logo" />
        </div>
      </a>
      <div className="navbar">
        <div className="nav-center">
          <nav className="navbar-links">
            <a href="#" className="nav-link">食物庫</a>
            <a href="#" className="nav-link">素食知識</a>
            <a href="#" className="nav-link">營養素算</a>
          </nav>
        </div>
        <div className="nav-right">
          <div className="member">會員</div>
          <div className="bean-shape">
            <div className="go-to-shop">
              <a href="./shop.html">素購</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
