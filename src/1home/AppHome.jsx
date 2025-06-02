import React from "react";
import { Link, useNavigate} from "react-router-dom";
import '../../css/style.min.css';
import '../main.css';

export default function AppHome() {
    const navigate = useNavigate();
    return (
        <>
            <header>
                <div className="navbar">
                    <div className="nav-center">
                        <ul>
                            <li><Link to="/guide">食物庫</Link></li>
                            <li><Link to="/article">素食知識</Link></li>
                            <li><Link to="/quiz">營養素算</Link></li>
                        </ul>
                    </div>
                    <div className="nav-right">
                        <div className="member"><Link to="./member-profile.html">會員</Link></div>
                        <div className="bean-shape">
                            <div className="go-to-shop"><Link to="./shop">素購</Link></div>
                        </div>
                    </div>
                </div>
            </header>

            <>
                <section id="banner-1">
                    <div className="title-top">
                        <div className="banner-left">
                            <div className="line1">
                                <div className="banner-logo">
                                    <img className="logo" src="./images/logo-banner.svg" alt="" />
                                    <img className="plus" src="./images/plus.svg" alt="" />
                                </div>
                                <h3>是專為素食者</h3>
                            </div>
                            <div className="line2">
                                <h3>打造的營養管理平台</h3>
                                <div className="banner-emoji"><img src="./images/banner-emoji.svg" alt="" /></div>
                            </div>
                        </div>
                        <div className="banner-right">
                            <p className="en">A Nutrition Management Platform Designed for Vegetarians Comprehensive</p>
                            <p className="ch">全面營養，專屬素食者的健康方案</p>
                        </div>
                    </div>
                </section>

                <section id="banner-2">
                    <div className="title-bottom">
                        <div className="background-logo"></div>
                        <div className="update">
                            <div className="update-left">
                                <p className="fixed">Update | </p>
                                <p className="content">最新文章：挑選素食保健品前你必須知道的五件事!</p>
                            </div>
                            <div className="update-right">more</div>
                        </div>
                    </div>
                </section>

                <section id="chart">
                    <div className="background-color">
                        <div className="background">
                            <div className="chart-left">
                                <div className="calc">
                                    <h3>你的 營養素值<br />交給我們來算</h3>
                                    <p>我們根據個人健康數據與素食飲食需求，<br />
                                        計算出每日所需營養素，透過專業分析提供你完整報告</p>
                                    <button className="calc-btn" onClick={() => navigate('/quiz')}>
                                        馬上素算</button>
                                </div>
                            </div>
                            <div className="chart-right">
                                <div className="netWrapper"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about">
                    <div className="about-all">
                        <div className="about-content">
                            <div className="about-left">
                                <img src="./images/LOGO1.svg" alt="" />
                            </div>
                            <div className="about-right">
                                <h1>ABOUT<br />US</h1>
                                <p>JASO+ 音讀作台語發音"呷素"來自一群對「純淨健康」的堅持<br />
                                    與素食生活熱愛的人。</p>
                            </div>
                        </div>
                        <div className="about-btn">
                            <img className="plus" src="./images/plus.svg" alt="" />
                            <p>VIEW ABOUT US</p>
                        </div>
                    </div>
                </section>

                <section id="people">
                    <div className="p-title">
                        <h1>營養師專業鑑定</h1>
                        <h3>素於你需要的，不需要的就別多吃</h3>
                    </div>
                    <div className="team">
                        <div className="team-left">
                            <img src="./images/wangDoc.svg" alt="" className="doc-1" />
                            <div className="intro-1">
                                <img src="./images/plus.svg" style={{ width: '33.272px', height: '33.272px' }} alt="" />
                                <div className="intro">
                                    <div className="intro-2">
                                        <span>王昱程<p>營養師</p></span>
                                        <div className="intro-3">
                                            ｜證照｜ <br />國家專技高考營養師
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-right">
                            <img src="./images/chengDoc.svg" alt="" className="doc-2" />
                            <div className="intro-1">
                                <img src="./images/plus.svg" style={{ width: '33.272px', height: '33.272px' }} alt="" />
                                <div className="intro">
                                    <div className="intro-2">
                                        <span>陳小莉<p>營養師</p></span>
                                        <div className="intro-3">
                                            ｜證照｜ <br />國家專技高考營養師
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="shop">
                    <div className="container">
                        <div className="card">
                            <div className="dialog">
                                自從吃素後感覺體力變差，運動完還一直肌肉痠痛？
                                <div className="rounded-triangle"></div>
                            </div>
                            <div className="role">
                                <img src="./images/N.svg" style={{ width: '338px', height: '338px' }} alt="" />
                            </div>
                        </div>

                        <div className="container-center">
                            <div className="center-box">
                                <figure><img src="./images/main-product.svg" style={{ width: '400px', height: '502px' }} alt="" /></figure>
                                <div className="center-bottom">
                                    <div className="center-need">
                                        Need <br />
                                        <p className="span0">大補帖!</p>
                                    </div>
                                    <div className="center-text">
                                        <p className="span1">維生素超群膠囊</p>
                                        <p className="span2">植萃綜合維他命配方</p>
                                        <p className="span3">
                                            由於素食飲食可能缺乏的關鍵營養素，如B群、鐵、鋅與維生素D。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-slides">
                            <ul>
                                <li className="r-top"><img src="./images/D.svg" alt="" /></li>
                                <li className="r-middle"><img src="./images/omega.svg" alt="" /></li>
                                <li className="r-bottom"><img src="./images/fe.svg" alt="" /></li>
                            </ul>
                        </div>

                        <div className="right-background"></div>
                    </div>
                </section>

                <section id="knowledge">
                    <div className="k-title">
                        <div className="k-title-left">
                            <img src="./images/plus.svg" style={{ width: '56px' }} alt="" />
                            <h3>素食知識</h3>
                        </div>
                        <div className="k-title-right">
                            <span>查看更多</span>
                        </div>
                    </div>
                    <hr />
                    <div className="articles">
                        <div className="article">
                            <div className="a-left">
                                <img src="./images/logo.svg" style={{ width: '120px' }} alt="" />
                            </div>
                            <div className="a-center">
                                <p className="title">素食營養補充指南</p>
                                <p>素食五大營養缺乏的風險與補充方案</p>
                                <span className="tags">新手必看</span>
                            </div>
                            <div className="a-right">more<img src="./images/plus.svg" alt="" /></div>
                        </div>
                        <hr />
                        <div className="article">
                            <div className="a-left">
                                <img src="./images/logo.svg" style={{ width: '120px' }} alt="" />
                            </div>
                            <div className="a-center">
                                <p className="title">你吃對了嗎？六大類素食者食物分類與功能解析</p>
                                <span className="tags">營養攝取</span>
                            </div>
                            <div className="a-right">more<img src="./images/plus.svg" alt="" /></div>
                        </div>
                        <hr />
                    </div>
                </section>

                <div className="cta">
                    <h3>專屬於你的營養報告</h3>
                    <button className="join-btn">
                        <p>加入會員</p><span>馬上諮詢</span>
                    </button>
                </div>
            </>
            <footer>
                <div className="footer-bg">
                    <a href="#" className="back-to-top">
                        <img src="./images/j_arrow_a-1.svg" alt="Back to Top" />
                    </a>
                    <div className="footer-top">
                        <div className="footer-grid">
                            <div>
                                <p className="footer-heading">認識JASO+素</p>
                                <ul>
                                    <li><a href="#">關於我們</a></li>
                                    <li><a href="#">活動資訊</a></li>
                                    <li><a href="#">最新消息</a></li>
                                </ul>
                            </div>

                            <div>
                                <p className="footer-heading">購物須知</p>
                                <ul>
                                    <li><a href="#">如何訂購</a></li>
                                    <li><a href="#">退換政策</a></li>
                                </ul>
                            </div>

                            <div>
                                <p className="footer-heading">客戶須知</p>
                                <ul>
                                    <li><a href="#">服務條款</a></li>
                                    <li><a href="#">隱私權政策</a></li>
                                </ul>
                            </div>

                            <div>
                                <p className="footer-heading">客服中心</p>
                                <ul>
                                    <li><a href="#">線上客服</a></li>
                                    <li><a href="#">常見問題</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-cta">
                            <div className="cta">
                                <h3 style={{ color: '#FFF' }}>專屬於你的營養報告</h3>
                                <a href="login.html">
                                    <button className="join-btn">
                                        <p>加入會員</p><span>馬上諮詢</span>
                                    </button>
                                </a>
                            </div>
                            <div className="footer-slogan">
                                <div>
                                    <span>JASO+素</span>
                                    <p>素食營養專家 | 健康素食新選擇</p>
                                </div>
                                <div className="icon">
                                    <img src="./images/icons/j_community_ins-bright.svg" alt="" />
                                    <img src="./images/icons/j_community_fb-bright.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="copyright">© 2025 JASO+素. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}