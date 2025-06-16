import React from "react";
import '../../css/style.min.css';
import '../main.css';
import styles from '../../scss/pages/about/AppAbout.module.css';
export default function AppAbout() {

    return (
        <>
            <div>

                {/* Hero */}
                <section className={styles.hero}>
                    <img src="/about_us/img/about-mage.svg" alt="產品圖片" />
                    <h1 className={styles.aboutTitle}>ABOUT<br />US</h1>
                </section>

                {/* About */}
                <section className={styles.about}>
                    <div className={styles.sectionContainer}>
                        <h2 className={styles.sectionGreenAbout}>關於</h2>
                        <div className={styles.aboutSimple}>
                            <img src="/assets/img/LOGO1.svg" alt="JaSo+ LOGO" className={styles.aboutLogo} />
                            <p className={styles.aboutText}>
                                JaSo+來自對「純淨健康」的堅持與對素食生活的熱愛。<br />
                                我們專注於提供優質、天然、純素的保健食品，為每一位重視身心健康、尊重生命的你打造更安心的選擇。<br />
                                不添加動物成分，不使用不必要的化學添加物，每一樣產品都經過嚴格把關，<br />
                                不論你是長年茹素者、環保實踐者，還是剛開始關注飲食與健康的新朋友，JaSo+都希望成為你生活中最溫柔、可靠的支持。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Certification */}
                <section className={styles.certifications}>
                    <div className={styles.certContent}>
                        <div className={styles.certTitleBlock}>
                            <h2 className={styles.sectionGreenTitle}>國際認證 <br />與標章</h2>
                            <h3 className={styles.aboutSubtitle}>JaSo 食品安全製造的核心</h3>
                        </div>
                        <div className={styles.certTextBlock}>
                            <p>透過第三方公正的認證...重要依據。</p>
                            <p>高度關注消費者使用...簡單。</p>
                            <p>我們非常重視...最高水平的食品安全標準。</p>
                        </div>
                    </div>
                    <div className={styles.certGrid}>
                        {[...Array(8)].map((_, idx) => (
                            <img key={idx} src={`/about_us/img/pf${idx + 1}.svg`} alt={`cert ${idx + 1}`} />
                        ))}
                    </div>
                </section>

                {/* Vegan */}
                <section className={styles.vegan}>
                    <div className={styles.sectionContainer}>
                        <div className={styles.veganHeader}>
                            <div className={styles.veganTitles}>
                                <h2 className={styles.sectionGreenTitle}>Vegan</h2>
                                <h3 className={styles.sectionH3}>素食認證</h3>
                            </div>
                            <p className={styles.veganDesc}>
                                通過英國、美國素食協會認證...保健食品選擇。
                            </p>
                        </div>
                        <div className={styles.certVeganGrid}>
                            <img src="/about_us/img/Vpf1.svg" alt="vegan1" />
                            <img src="/about_us/img/Vpf2.svg" alt="vegan2" />
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className={styles.faq}>
                    <div className={styles.sectionContainer}>
                        <div className={styles.faqWrapper}>
                            <div className={styles.faqLeft}>
                                <h2 className={styles.faqGreen}>FAQ</h2>
                                <h3 className={styles.faqSub}>常見問題</h3>
                            </div>
                            <div className={styles.faqRight}>
                                <div className={styles.faqList}>
                                    <p>服務條款</p>
                                    <p>隱私權政策</p>
                                    <p>常見問題（FAQ）</p>
                                </div>
                                <div className={styles.faqBottom}>
                                    <a href="#" className={styles.moreBtn}>
                                        <span className={styles.plusLeft}><img src="/about_us/img/greenplus.svg" alt="+" /></span>
                                        <span className={styles.moreText}>more</span>
                                        <span className={styles.plusRight}><img src="/about_us/img/greenplus.svg" alt="+" /></span>
                                    </a>
                                    <div className={styles.faqLine}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer 略，可拆成 Footer.jsx */}
            </div>
        </>
    )
}