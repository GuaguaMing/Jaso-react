import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from '../../scss/pages/1component/footer.module.scss';

export default function Footer() {
    const navigate = useNavigate();
    const [showBackToTop, setShowBackToTop] = useState(false);
      const [isHovered, setIsHovered] = useState(false);
          useEffect(() => {
      
              const handleScroll = () => {
                  setShowBackToTop(window.scrollY > 1000);
              };
      
              window.addEventListener("scroll", handleScroll);
              return () => window.removeEventListener("scroll", handleScroll);
          }, []);

return (
    <>
            <footer>
                <div className={styles.footerBg}>
                    <a href="#" className={`${styles.backToTop} ${showBackToTop ? styles.show : ""}`}>
                        <img src="./images/icons/gotop-gray.svg" alt="Back to Top" />
                    </a>
                    <div className={styles.footerTop}>
                        <div className={styles.footerGrid}>
                            <div>
                                <p className={styles.footerHeading}>認識JASO+素</p>
                                <ul>
                                    <li><a href="#">關於我們</a></li>
                                    <li><a href="#">活動資訊</a></li>
                                    <li><a href="#">最新消息</a></li>
                                </ul>
                            </div>
                            <div>
                                <p className={styles.footerHeading}>購物須知</p>
                                <ul>
                                    <li><a href="#">如何訂購</a></li>
                                    <li><a href="#">退換政策</a></li>
                                </ul>
                            </div>
                            <div>
                                <p className={styles.footerHeading}>客戶須知</p>
                                <ul>
                                    <li><a href="#">服務條款</a></li>
                                    <li><a href="#">隱私權政策</a></li>
                                </ul>
                            </div>
                            <div>
                                <p className={styles.footerHeading}>客服中心</p>
                                <ul>
                                    <li><a href="#">線上客服</a></li>
                                    <li><a href="#">常見問題</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.footerCta}>
                            <div className={styles.loginCta}>
                                <h3 style={{ color: '#FFF' }}>專屬於你的營養報告</h3>
                                {/* <a href="login.html" target="_blank"> */}
                                    <button className={styles.joinBtn} onClick={() => navigate('/login')}>
                                        <p>加入會員</p><span>馬上諮詢</span>
                                    </button>
                                {/* </a> */}
                            </div>
                            <div className={styles.footerSlogan}>
                                <div>
                                    <span>JASO+素</span>
                                    <p>素食營養專家 | 健康素食新選擇</p>
                                </div>
                                <div className={styles.icon}>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <img src="./images/icons/icon-ins-bright.svg" alt="Instagram" />
                                    </a>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <img src="./images/icons/icon-fb-bright.svg" alt="Facebook" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={styles.copyright}>© 2025 JASO+素. All Rights Reserved.</p>
                </div>
            </footer>
            </>
              );
            }
            