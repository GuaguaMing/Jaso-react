import React,{ useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../1components/Navbar";
import styles from "../../scss/pages/1home/apphome.module.scss";


export default function AppHome() {
    const navigate = useNavigate();
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 1000);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Navbar />
            <section className={styles.banner1}>
                <div className={styles.titleTop}>
                    <div className={styles.bannerLeft}>
                        <div className={styles.line1}>
                            <div className={styles.bannerLogo}>
                                <img className={styles.logo} src="./images/logo-banner.svg" alt="" />
                                <img className={styles.plus} src="./images/plus.svg" alt="" />
                            </div>
                            <h3>是專為素食者</h3>
                        </div>
                        <div className={styles.line2}>
                            <h3>打造的營養管理平台</h3>
                            <div className={styles.bannerEmoji}><img src="./images/banner-emoji.svg" alt="" /></div>
                        </div>
                    </div>
                    <div className={styles.bannerRight}>
                        <p className={styles.en}>A Nutrition Management Platform Designed for Vegetarians Comprehensive</p>
                        <p className={styles.ch}>全面營養，專屬素食者的健康方案</p>
                    </div>
                </div>
            </section>

            <section className={styles.banner2}>
                <div className={styles.titleBottom}>
                    <div className={styles.backgroundLogo}></div>
                    <div className={styles.update}>
                        <div className={styles.updateLeft}>
                            <p className={styles.fixed}>Update | </p>
                            <p className={styles.content}>最新文章：挑選素食保健品前你必須知道的五件事!</p>
                        </div>
                        <div className={styles.updateRight}>more</div>
                    </div>
                </div>
            </section>

            <section className={styles.chart}>
                <div className={styles.backgroundColor}>
                    <div className={styles.background}>
                        <div className={styles.chartLeft}>
                            <div className={styles.calc}>
                                <h3>你的 營養素值<br />交給我們來算</h3>
                                <p>
                                    我們根據個人健康數據與素食飲食需求，<br />
                                    計算出每日所需營養素，透過專業分析提供你完整報告
                                </p>
                                <button className={styles.calcBtn} onClick={() => navigate('/quiz')}>
                                    馬上素算
                                </button>
                            </div>
                        </div>
                        <div className={styles.chartRight}>
                            <div className={styles.netWrapper}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.about}>
                <div className={styles.aboutAll}>
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutLeft}>
                            <img src="./images/logo-big.svg" alt="" />
                        </div>
                        <div className={styles.aboutRight}>
                            <h1>ABOUT<br />US</h1>
                            <p>
                                JASO+ 音讀作台語發音"呷素"來自一群對「純淨健康」的堅持<br />
                                與素食生活熱愛的人。
                            </p>
                        </div>
                    </div>
                    <div className={styles.aboutBtn}>
                        <img className={styles.plus} src="./images/plus.svg" alt="" />
                        <p>VIEW ABOUT US</p>
                    </div>
                </div>
            </section>

            <section className={styles.people}>
                <div className={styles.pTitle}>
                    <h1>營養師專業鑑定</h1>
                    <h3>素於你需要的，不需要的就別多吃</h3>
                </div>
                <div className={styles.team}>
                    <div className={styles.teamLeft}>
                        <img src="./images/wangDoc.svg" alt="" className={styles.doc1} />
                        <div className={styles.intro1}>
                            <img src="./images/plus.svg" style={{ width: '33.272px', height: '33.272px' }} alt="" />
                            <div className={styles.intro}>
                                <div className={styles.intro2}>
                                    <span>王昱程<p>營養師</p></span>
                                    <div className={styles.intro3}>
                                        ｜證照｜ <br />國家專技高考營養師
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.teamRight}>
                        <img src="./images/chengDoc.svg" alt="" className={styles.doc2} />
                        <div className={styles.intro1}>
                            <img src="./images/plus.svg" style={{ width: '33.272px', height: '33.272px' }} alt="" />
                            <div className={styles.intro}>
                                <div className={styles.intro2}>
                                    <span>陳小莉<p>營養師</p></span>
                                    <div className={styles.intro3}>
                                        ｜證照｜ <br />國家專技高考營養師
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.shop}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.dialog}>
                            自從吃素後感覺體力變差，運動完還一直肌肉痠痛？
                            <div className={styles.roundedTriangle}></div>
                        </div>
                        <div className={styles.role}>
                            <img src="./images/N.svg" style={{ width: '338px', height: '338px' }} alt="" />
                        </div>
                    </div>

                    <div className={styles.containerCenter}>
                        <div className={styles.centerBox}>
                            <figure><img src="./images/main-product.svg" style={{ width: '400px', height: '502px' }} alt="" /></figure>
                            <div className={styles.centerBottom}>
                                <div className={styles.centerNeed}>
                                    Need <br />
                                    <p className={styles.span0}>大補帖!</p>
                                </div>
                                <div className={styles.centerText}>
                                    <p className={styles.span1}>維生素超群膠囊</p>
                                    <p className={styles.span2}>植萃綜合維他命配方</p>
                                    <p className={styles.span3}>
                                        由於素食飲食可能缺乏的關鍵營養素，如B群、鐵、鋅與維生素D。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.containerSlides}>
                        <ul>
                            <li className={styles.rTop}><img src="./images/D.svg" alt="" /></li>
                            <li className={styles.rMiddle}><img src="./images/omega.svg" alt="" /></li>
                            <li className={styles.rBottom}><img src="./images/fe.svg" alt="" /></li>
                        </ul>
                    </div>

                    <div className={styles.rightBackground}></div>
                </div>
            </section>

            <section className={styles.knowledge}>
                <div className={styles.kTitle}>
                    <div className={styles.kTitleLeft}>
                        <img src="./images/plus.svg" style={{ width: '56px' }} alt="" />
                        <h3>素食知識</h3>
                    </div>
                    <div className={styles.kTitleRight}>
                        <span>查看更多</span>
                    </div>
                </div>
                <hr />
                <div className={styles.articles}>
                    <div className={styles.article}>
                        <div className={styles.aLeft}>
                            <img src="./images/logo.svg" style={{ width: '120px' }} alt="" />
                        </div>
                        <div className={styles.aCenter}>
                            <p className={styles.title}>素食營養補充指南</p>
                            <p>素食五大營養缺乏的風險與補充方案</p>
                            <span className={styles.tags}>新手必看</span>
                        </div>
                        <div className={styles.aRight}>more<img src="./images/plus.svg" alt="" /></div>
                    </div>
                    <hr />
                    <div className={styles.article}>
                        <div className={styles.aLeft}>
                            <img src="./images/logo.svg" style={{ width: '120px' }} alt="" />
                        </div>
                        <div className={styles.aCenter}>
                            <p className={styles.title}>你吃對了嗎？六大類素食者食物分類與功能解析</p>
                            <span className={styles.tags}>營養攝取</span>
                        </div>
                        <div className={styles.aRight}>more<img src="./images/plus.svg" alt="" /></div>
                    </div>
                    <hr />
                </div>
            </section>

            <div className={styles.cta}>
                <h3>專屬於你的營養報告</h3>
                <button className={styles.joinBtn}>
                    <p>加入會員</p><span>馬上諮詢</span>
                </button>
            </div>

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
                            <div className={styles.cta}>
                                <h3 style={{ color: '#FFF' }}>專屬於你的營養報告</h3>
                                <a href="login.html" target="_blank">
                                    <button className={styles.joinBtn}>
                                        <p>加入會員</p><span>馬上諮詢</span>
                                    </button>
                                </a>
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
