import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../scss/pages/1home/apphome.module.scss";
import AnimatedRadarChart from "./AnimatedRadarChart";
import ProductC from "../1components/ProductC";

const productData = [
  {
    id: 'protein',
    product: `${import.meta.env.BASE_URL}assets/product_N.png`, 
    role: `${import.meta.env.BASE_URL}assets/protein.svg`,
    speech: '自從吃素後感覺體力變差，運動完還一直肌肉痠痛？',
    name: '維生素超群膠囊',
    subtitle: '植萃綜合維他命配方',
    description: '素食飲食可能缺乏的關鍵營養素。',
    color: '#FFE4B5'
  },
  {
    id: 'b12',
    product: `${import.meta.env.BASE_URL}assets/product_B12.png`, 
    role: `${import.meta.env.BASE_URL}assets/b12.svg`,
    speech: '總是體力不支、難集中精神，懷疑自己缺乏B12？',
    name: '素食B12補充膠囊',
    subtitle: '植物來源維生素B12',
    description: '維持神經系統健康，改善疲勞與注意力',
    color: '#FFB6C1'
  },
  {
    id: 'iron', 
    product: `${import.meta.env.BASE_URL}assets/product_Fe.png`, 
    role: `${import.meta.env.BASE_URL}assets/iron.svg`,
    speech: '容易臉色蒼白、頭暈虛弱，可能是缺鐵惹的禍？',
    name: '素食鐵補充膠囊',
    subtitle: '植物性鐵與維生素C',
    description: '高吸收率鐵質，改善缺鐵性貧血',
    color: '#FFA07A'
  },
  {
    id: 'omega',
    product: `${import.meta.env.BASE_URL}assets/product_Omg.png`, 
    role: `${import.meta.env.BASE_URL}assets/omega3.svg`,
    speech: '老是感覺疲倦又心情低落，是不是缺Omega-3？',
    name: 'Omega-3植物膠囊',
    subtitle: '海藻Omega-3 DHA與EPA',
    description: '植物性DHA，促進大腦健康與情緒穩定',
    color: '#98FB98'
  },
  {
    id: 'vitaminD',
    product: `${import.meta.env.BASE_URL}assets/product_D.png`, 
    role: `${import.meta.env.BASE_URL}assets/d.svg`,
    speech: '白天待在室內不曬太陽，整天昏沉沒精神嗎？',
    name: '維生素D素食膠囊',
    subtitle: '植物來源維生素D3',
    description: '強化骨骼健康，提升免疫力與精神狀態',
    color: '#F0E68C'
  },
  {
    id: 'ca',
    product: `${import.meta.env.BASE_URL}assets/product_Ca.png`, 
    role: `${import.meta.env.BASE_URL}assets/ca.svg`,
    speech: '牙齒變敏感、膝蓋痠痛，可能是鈣質攝取不足？',
    name: '鈣心定植物鈣',
    subtitle: '藻鈣＋D3雙效配方',
    description: '鈣是維持骨骼與牙齒結構的關鍵營養素!',
    color: '#3DCE94'
  }
];

export default function AppHome() {

    const navigate = useNavigate();
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [hovered, setHovered] = useState(false);
    const chartRef = useRef(null);
    // hr
    const CustomHR = () => {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="2" viewBox="0 0 1280 2" fill="none"
          style={{
                display: 'block',
                margin: '0 auto',
                width: '100%',
                maxWidth: '1280px'
          }}>
            <path d="M0 1H1280" stroke="#E0DDDD" strokeWidth="1"/>
          </svg>
        );
    };

    // 處理 hover 狀態變化
    const handleHoverChange = (hovered) => {
        setIsHovered(hovered);
    };

    // 按鈕 hover 事件
    const handleButtonMouseEnter = () => {
        setIsHovered(true);
        if (chartRef.current) {
            chartRef.current.setHoverState(true);
        }
    };

    const handleButtonMouseLeave = () => {
        setIsHovered(false);
        if (chartRef.current) {
            chartRef.current.setHoverState(false);
        }
    };
    const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
    const products = [...productData]; // 用內建資料，不拆檔
  const currentProduct = products[currentIndex];

  // 點擊右側角色卡時切換
  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setTransitioning(false);
    }, 500);
  };

  const getCharacterPosition = (index) => {
    const total = products.length;
    const diff = (index - currentIndex + total) % total;
    const angle = (diff / total) * 2 * Math.PI;
    const radius = 150;

    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
      scale: 0.8 + 0.2 * Math.cos(angle),
      opacity: 0.4 + 0.6 * Math.cos(angle),
      isInFront: Math.cos(angle) > 0.5
    };
  };

  const handleShopClick = () => {
    navigate('/shop')
    // alert('前往商店（可換成 router 導向）');
  };

  const handleProductClick = (product) => {
    console.log('點擊產品角色：', product.name);
  };

    useEffect(() => {

        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 1000);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* <Navbar /> */}
            <section className={styles.banner1}>
                <div className={styles.titleTop}>
                    <div className={styles.bannerLeft}>
                        <div className={styles.line1}>
                            <div className={styles.bannerLogo}>
                                <img className={styles.bigLogo} src={`${import.meta.env.BASE_URL}images/logo-banner.svg`} alt="LogoBanner" />
                                <img className={styles.logoPlus} src={`${import.meta.env.BASE_URL}images/plus.svg`} alt="" />

                            </div>
                            <h3>是專為素食者</h3>
                        </div>
                        <div className={styles.line2}>
                            <h3>打造的營養管理平台</h3>
                            <div className={styles.bannerEmoji}><img src={`${import.meta.env.BASE_URL}images/banner-emoji.svg`} alt="" /></div>
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
                        <div className={styles.updateLeft} onClick={() => navigate('/article')}>
                            <div className={styles.fixed}>Update | </div>
                            <div className={styles.updateContent}>
                                <div className={styles.content}>
                                    最新文章：挑選素食保健品前你必須知道的五件事!
                                    不是 Vegan 標籤就安心？看懂產品才不踩雷
                                    新手素食者最常缺的營養素...
                                </div>
                            </div>
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
                                {/* <button className={styles.calcBtn} onClick={() => navigate('/quiz')}> */}
                                <button
                                    className={`${styles.calcBtn} ${isHovered ? styles.calcBtnHovered : ''}`}
                                    onClick={() => navigate('/quiz')}
                                    onMouseEnter={handleButtonMouseEnter}
                                    onMouseLeave={handleButtonMouseLeave}>
                                    馬上素算
                                </button>
                            </div>
                        </div>
                        <div className={styles.chartRight}>
                            <div className={styles.netWrapper}>
                                <AnimatedRadarChart
                                    ref={chartRef}
                                    onHoverChange={handleHoverChange}
                                />
                            </div>
                            {/* <div className={styles.netWrapper} onClick={() => navigate('/quiz')}></div> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.about}>
                <div className={styles.aboutAll}>
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutLeft}>
                            <Link to="/about" onClick={() => navigate('/about')}>
                                <img src={`${import.meta.env.BASE_URL}images/logo-big.svg`} alt="" />
                            </Link>
                        </div>
                        <div className={styles.aboutRight}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        > <Link to="/about" onClick={() => navigate('/about')}>
                                <h1 className={hovered ? styles.hovered : ""} onClick={() => navigate('/about')}>ABOUT<br />US</h1>
                            </Link>
                            <p>
                                JASO+ 音讀作台語發音"呷素"來自一群對「純淨健康」的堅持<br />
                                與素食生活熱愛的人。
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.aboutBtn} ${hovered ? styles.hoveredBtn : ""}`} onClick={() => navigate('/about')}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}>

                        <img
                            src={`${import.meta.env.BASE_URL}images/${hovered ? 'plus-gray.svg' : 'plus.svg'}`}
                            style={{ width: '17.5px', height: '17.5px', marginLeft: '0.5rem' }}
                            alt="aboutUs" />

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
                        <img src={`${import.meta.env.BASE_URL}images/wangDoc.svg`} alt="" className={styles.doc1} />
                        <div className={styles.intro1}>
                            <img className={styles.plus} src={`${import.meta.env.BASE_URL}images/plus.svg`} style={{ width: '33.272px', height: '33.272px' }} alt="" />
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
                        <img src={`${import.meta.env.BASE_URL}images/chengDoc.svg`} alt="" className={styles.doc2} />
                        <div className={styles.intro1}>
                            <img className={styles.plus} src={`${import.meta.env.BASE_URL}images/plus.svg`} style={{ width: '33.272px', height: '33.272px' }} alt="" />
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
                                <ProductC
                    products={products}
                    currentProduct={currentProduct}
                    currentIndex={currentIndex}
                    transitioning={transitioning}
                    handleShopClick={handleShopClick}
                    handleProductClick={handleProductClick}
                    goToSlide={goToSlide}
                    getCharacterPosition={getCharacterPosition}
                />
                {/* <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.dialog}>
                            <p>自從吃素後感覺體力變差，運動完還一直肌肉痠痛？</p>
                            <div className={styles.roundedTriangle}></div>
                        </div>
                        <div className={styles.role}>
                            <img src={`${import.meta.env.BASE_URL}images/N.svg`} style={{ width: '338px', height: '338px' }} alt="" />
                        </div>
                    </div>

                    <div className={styles.containerCenter} >
                        <div className={styles.centerBox} onClick={() => navigate('/shop')}>
                            <figure><img src={`${import.meta.env.BASE_URL}images/main-product.svg`} style={{ width: '400px', height: '502px' }} alt="" /></figure>
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
                        <div className={styles.centerCorner} onClick={() => navigate('/shop')}>
                        </div>

                    </div>

                    <div className={styles.containerSlides}>
                        <ul>
                            <li className={styles.rTop}><img src={`${import.meta.env.BASE_URL}images/D.svg`} alt="" /></li>
                            <li className={styles.rMiddle}><img src={`${import.meta.env.BASE_URL}images/omega.svg`} alt="" /></li>
                            <li className={styles.rBottom}><img src={`${import.meta.env.BASE_URL}images/fe.svg`} alt="" /></li>
                        </ul>
                    </div>

                    <div className={styles.rightBackground}></div>
                </div> */}
            </section>

            <section className={styles.knowledge}>
                <div className={styles.kTitle}>
                    <div className={styles.kTitleLeft}>
                        <img src={`${import.meta.env.BASE_URL}images/plus.svg`} style={{ width: '56px' }} alt="" />
                        <h3>素食知識</h3>
                    </div>
                    <div className={styles.kTitleRight} onClick={() => navigate('/article')}>
                        <span>查看更多</span>
                    </div>
                </div>

                <div className={styles.articles}>
                    <CustomHR />
                    <div className={styles.article} onClick={() => navigate('/article1')}>
                        <div className={styles.aLeft}>
                            <img src={`${import.meta.env.BASE_URL}images/logo.svg`} style={{ width: '120px' }} alt="" />
                        </div>
                        <div className={styles.aCenter}>
                            <div className={styles.aCenterWord}>

                                <p className={styles.title}>挑選素食保健品前你必須知道的五件事</p>
                                <p>不是 Vegan 標籤就安心？看懂產品才不踩雷</p>
                                <p>素食營養品怎麼挑才對？一文看懂 Vegan、無基改、吸收率與劑型選擇差異，買得聰明，補得安心。</p>
                            </div>
                            <span className={styles.tags}>素食原則</span>
                        </div>
                        <div className={styles.aRight}>MORE<img src={`${import.meta.env.BASE_URL}images/arrow.svg`} alt="" /></div>
                    </div>
                    
                    <CustomHR />
                    <div className={styles.article} onClick={() => navigate('/article2')}>

                        <div className={styles.aLeft}>
                            <img src={`${import.meta.env.BASE_URL}images/logo.svg`} style={{ width: '120px' }} alt="" />
                        </div>
                        <div className={styles.aCenter}>
                            <div className={styles.aCenterWord}>
                                <p className={styles.title}>新手素食者最常缺的營養素，你補對了嗎？</p>
                                <p>專為剛轉素或彈性素食者設計，轉素初期最容易缺乏的營養</p>
                                <p>如何從日常食材與保健品中補足，同時介紹外食族也方便攝取的懶人素食營養補充包。</p>
                            </div><span className={styles.tags}>新手必看</span>
                        </div>
                        <div className={styles.aRight}>MORE<img src={`${import.meta.env.BASE_URL}images/arrow.svg`} alt="" /></div>
                    </div>
                    <CustomHR />
                    <div className={styles.article} onClick={() => navigate('/article3')}>

                        <div className={styles.aLeft}>
                            <img src={`${import.meta.env.BASE_URL}images/logo.svg`} style={{ width: '120px' }} alt="" />
                        </div>
                        <div className={styles.aCenter}>
                            <div className={styles.aCenterWord}>

                                <p className={styles.title}>你吃對了嗎？六大類素食者食物分類與功能</p>
                                <p>掌握食物種類，營養補得剛剛好</p>
                                <p>你知道植物奶與豆類在身體裡扮演的角色嗎？從全穀到堅果，六大分類圖文解析營養功能，幫助你打造均衡又有變化的素食生活。</p>
                            </div>
                            <span className={styles.tags}>營養攝取</span>

                        </div>
                        <div className={styles.aRight}>MORE<img src={`${import.meta.env.BASE_URL}images/arrow.svg`} alt="" /></div>
                    </div>
                    <CustomHR />
                </div>
            </section>

            <div className={styles.loginCta}>
                <h3>專屬於你的營養報告</h3>
                <button className={styles.joinBtn} onClick={() => navigate('/login')}>
                    <p>加入會員</p><span>馬上諮詢</span>
                </button>
            </div>


        </>
    );
}
