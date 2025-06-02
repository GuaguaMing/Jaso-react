import React from 'react';
import { Link, useNavigate} from "react-router-dom";
import '../../css/style.css';
import '../main.css';

export default function Navbar() {
  return (
    <header className="main-navbar">
      <div className="navbar-container">
        {/* 左側 logo */}
        <div className="navbar-left">
          <a href="/"><img src="./assets/nav-logo.svg" alt="Jaso Logo" className="navbar-logo" /></a>
        </div>

        {/* 中間導覽連結 */}
        <div className="navbar-center">
          <nav className="navbar-links">
            <ul>
              <li><Link to="/guide">食物庫</Link></li>
              <li><Link to="/article">素食知識</Link></li>
              <li><Link to="/quiz">營養素算</Link></li>
            </ul>
          </nav>
        </div>

        {/* 右側會員與購物按鈕 */}
        <div className="nav-right">
          <div className="member"><Link to="/memberCenter">會員</Link></div>
          <div className="bean-shape">
            <div className="go-to-shop"><Link to="/shop">素購</Link></div>
          </div>
        </div>
      </div>
    </header>
  );
}
