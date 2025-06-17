import React from "react";
import '../../css/style.min.css';
import '../main.css';
import styles from './AppAbout.module.css';
export default function AppAbout() {

    return (
        <>
            <div>

                {/* Hero */}
                <section className={styles.hero}>
                    <img src="./public/images/about_us/about-mage.svg" alt="產品圖片" />
                    <h1 className={styles.aboutTitle}>ABOUT<br />US</h1>
                </section>

                {/* About */}
                <section className={styles.about}>
                    <div className={styles.sectionContainer}>
                        <h2 className={styles.sectionGreenAbout}>關於</h2>
                        <div className={styles.aboutSimple}>
                            <img src="./public/images/about_us/jaso-logo.svg" alt="JaSo+ LOGO" className={styles.aboutLogo} />
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
                    <div className={styles.sectionContainer}>
                        <div className={styles.certContent}>
                            <div className={styles.certTitleBlock}>
                                <h2 className={styles.sectionGreenTitle}>國際認證 <br />與標章</h2>
                                <h3 className={styles.aboutSubtitle}>JaSo 食品安全製造的核心</h3>
                            </div>
                            <div className={styles.certTextBlock}>
                                <p>透過第三方公正的認證，JaSo+能以最高標準提供產品及值得信賴的品質。
                                    證書和標章不僅是對我們品牌和產品的認可，同時也是消費者選擇優質產品的重要依據。</p>
                                <p>高度關注消費者使用的產品效果、安全、品質，並遵守認證機構和政府法規的要求，不斷優化我們的產品。使我們能確保您的健康更美好、簡單。</p>
                                <p>我們非常重視我們所有原料廠商的食品安全管理，我們要求他們嚴格遵守國際標準並獲得各種認證。透過科學和客觀的管理，致力於建立最高水平的食品安全標準。</p>
                            </div>
                        </div>
                        <div className={styles.certGrid}>
                            {[...Array(8)].map((_, idx) => (
                                <img key={idx} src={`./public/images/about_us/pf${idx + 1}.svg`} alt={`cert ${idx + 1}`} />
                            ))}
                        </div>
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
                                通過英國、美國素食協會認證，國際認證，純素有保障。 <br />
                                清楚標示純素、奶素等，給素食朋友們最安心的保健食品選擇。
                            </p>
                        </div>
                        <div className={styles.certVeganGrid}>
                            <img src="./public/images/about_us/Vpf1.svg" alt="vegan1" />
                            <img src="./public/images/about_us/Vpf2.svg" alt="vegan2" />
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
                                        <span className={styles.plusLeft}><img src="./public/images/icons/pluss.svg" alt="+" /></span>
                                        <span className={styles.moreText}>more</span>
                                        <span className={styles.plusRight}><img src="./public/images/icons/pluss.svg" alt="+" /></span>
                                    </a>
                                    <div className={styles.faqLine}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}