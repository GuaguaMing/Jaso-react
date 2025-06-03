import React from "react";
import '../../css/style.min.css';
import '../main.css';
export default function AppFooter() {

    return (
        <>
            <footer className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerMain}>
                        <p className={styles.footerMainHeading}>
                            專屬於你的 <br />
                            營養報告
                        </p>
                    </div>
                    <div className={styles.footerJaso}>
                        <p className={styles.footerJaso1}>JASO+素</p>
                        <p className={styles.footerJaso2}>素食營養專家 | 健康素食新選擇</p>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink}>
                                <img src="./icons/img/j_community_ins-bright.svg" alt="Instagram" className={styles.socialIcon} />
                            </a>
                            <a href="#" className={styles.socialLink}>
                                <img src="./icons/img/j_community_fb-bright.svg" alt="Facebook" className={styles.socialIcon} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.footerSection}>
                    <div>
                        <p className={styles.footerHeading}>認識JASO+素</p>
                        <ul>
                            <li><a href="faq.html">關於我們</a></li>
                            <li><a href="faq.html">活動資訊</a></li>
                            <li><a href="faq.html">最新消息</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className={styles.footerHeading}>購物須知</p>
                        <ul>
                            <li><a href="faq.html">如何訂購</a></li>
                            <li><a href="faq.html">退換政策</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className={styles.footerHeading}>客戶須知</p>
                        <ul>
                            <li><a href="faq.html">服務條款</a></li>
                            <li><a href="faq.html">隱私權政策</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className={styles.footerHeading}>客服中心</p>
                        <ul>
                            <li><a href="faq.html">線上客服</a></li>
                            <li><a href="faq.html">常見問題</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.ctaContainer}>
                    <a href="login.html" className={styles.ctaButton}>
                        <span className={styles.ctaButtonText}>
                            加<br />入<br />會<br />員
                        </span>
                        <span className={styles.ctaSubtext}>
                            馬<br />上<br />諮<br />詢
                        </span>
                    </a>

                    <a href="#" className={styles.backToTop}>
                        <img src="./icons/img/j_arrow_a-1.svg" alt="Back to Top" />
                    </a>
                </div>
            </footer>
        </>
    )
}