import React, { useState, useEffect } from "react";
import styles from "../../scss/pages/article/article1.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Article3 = () => {
  const navigate = useNavigate();
        // hr
          const CustomHR = () => {
            return (
              <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="2" viewBox="0 0 1200 2" fill="none"   style={{
                display: 'block',
                margin: '0 auto',
                width: '100%',
                maxWidth: '1200px'
              }}>
                <path d="M0 1H1200" stroke="#E0DDDD" strokeWidth="1"/>
              </svg>
            );
          };

  return (
    <article>
    <div className={styles.articlePage}>
      <h1 className={styles.title}>你吃對了嗎？六大類素食者食物分類與功能</h1>

              <div className={styles.hashtag}>
  <Link to="/article?tag=營養攝取" className={styles.tags}>營養攝取</Link>

</div>
      <div className={styles.meta}>
        <p>作者：營養師 素素兒</p>
        <span>2025年6月6日</span>
      </div>

      <p className={styles.intro}>
      掌握食物種類，營養補得剛剛好！<br/>
你知道植物奶與豆類在身體裡扮演的角色嗎？
從全穀到堅果，六大分類圖文解析營養功能，幫助你打造均衡又有變化的素食生活。
以下是我們精選的六大針對素食者常見缺乏營養素的重點整理與建議，幫助你每日補得準、補得對，提升整體健康與活力。
      </p>

      <section className={styles.nutrients}>
        {/* 每一種營養素： */}
        <div className={styles.nutrientBlock}>
          <h2>維生素 B12</h2>
          <ul>
            <li><strong>功能：</strong>參與紅血球生成、維持神經系統健康</li>
            <li><strong>缺乏可能症狀：</strong>疲倦、手腳麻、記憶力下降、惡性貧血</li>
            <li><strong>天然補充來源：</strong>營養酵母、強化植物奶、海藻（含量有限）</li>
            <li><strong>建議補充方式：</strong>定期補充穩定來源，例如口含錠或滴劑形式的補充劑</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>鐵</h2>
          <ul>
            <li><strong>功能：</strong>攜帶氧氣、維持免疫力與代謝能量</li>
            <li><strong>缺乏可能症狀：</strong>臉色蒼白、易喘、頭暈、注意力不集中</li>
            <li><strong>天然補充來源：</strong>紅藜、黑芝麻、深綠色蔬菜、乾燥水果</li>
            <li><strong>補充建議：</strong>搭配維生素 C 攝取可促進植物性鐵吸收（如：柑橘、番茄）</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>蛋白質</h2>
          <ul>
            <li><strong>功能：</strong>構成肌肉、酵素與免疫因子，維持細胞修復</li>
            <li><strong>缺乏可能症狀：</strong>易疲勞、肌肉量下降、免疫力差</li>
            <li><strong>天然補充來源：</strong>黃豆、毛豆、豆腐、豌豆、藜麥、堅果與種子</li>
            <li><strong>補充建議：</strong>結合多樣植物蛋白可取得完整胺基酸</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>Omega-3 脂肪酸（DHA/EPA）</h2>
          <ul>
            <li><strong>功能：</strong>維持心血管、腦部與眼睛健康</li>
            <li><strong>缺乏可能症狀：</strong>皮膚乾燥、注意力差、發炎反應增加</li>
            <li><strong>天然補充來源：</strong>亞麻籽、奇亞籽、核桃、紫蘇籽油</li>
            <li><strong>補充建議：</strong>素食者建議補充來自微藻的 DHA/EPA，轉換效率較高</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>鈣</h2>
          <ul>
            <li><strong>功能：</strong>維持骨骼密度、肌肉收縮、神經傳導</li>
            <li><strong>缺乏可能症狀：</strong>骨質疏鬆、抽筋、牙齒脆弱</li>
            <li><strong>天然補充來源：</strong>黑芝麻、小松菜、豆乾、強化植物奶</li>
            <li><strong>補充建議：</strong>搭配維生素 D 可提高鈣質吸收效率</li>
          </ul>
        </div>
        <div className={styles.nutrientBlock}>
          <h2>維生素 D</h2>
          <ul>
            <li><strong>功能：</strong>幫助鈣質吸收、維持骨骼健康、參與免疫功能調節</li>
            <li><strong>缺乏可能症狀：</strong>骨質疏鬆、免疫力下降、情緒低落</li>
            <li><strong>天然補充來源：</strong>日曬、強化植物奶、香菇（特別是曬過的）</li>
            <li><strong>補充建議：</strong>素食者可考慮補充來自植物性來源的 D2 或微生物來源的 D3</li>
          </ul>
        </div>
      </section>

      <section className={styles.whySupplement}>
        <h2>為什麼選擇純素保健品更安心？</h2>
        <ul>
          <li>無動物成分：避免明膠、魚油、乳糖等常見隱藏動物來源</li>
          <li>環保永續：多數植物來源成分碳足跡較低，製程更友善地球</li>
          <li>透明標示：選擇有 Vegan、Non-GMO、有機認證產品更安心</li>
        </ul>
      </section>

      <p className={styles.note}>
        *小提醒：素食者營養吸收效率可能因腸道狀況、消化酵素不同而有所影響，建議定期檢查營養素狀態，或根據生理狀況選擇適合的補充方式。
      </p>
      </div>
                         <section className={styles.otherPage}>
                      <div className={styles.articles}>
                      <CustomHR />

                    <div className={styles.article} onClick={() => navigate('/article2')}>

                        <div className={styles.aLeft}>
                            <img src={`${import.meta.env.BASE_URL}images/logo.svg`} style={{ width: '120px' }} alt="" />
                        </div>
                        <div className={styles.aCenter}>                        
                            <div className={styles.aCenterWord}>
                            <p className={styles.title}>新手素食者最常缺的營養素，你補對了嗎？</p>
                            <p>剛轉素，最常遇到的問題就是「今天要吃什麼？」</p>
                            <p>其實素食不是只能吃青菜白飯，只要掌握幾種關鍵植物食材，就能吃得營養又多變。</p>
        
                        </div><span className={styles.tags}>新手必看</span>
                        </div>
                        <div className={styles.aRight}>MORE<img src={`${import.meta.env.BASE_URL}images/arrow.svg`} alt="" /></div>
                    </div>
                          <CustomHR />
                          <div className={styles.article} onClick={() => navigate('/article4')}>
                              <div className={styles.aLeft}>
                                  <img src={`${import.meta.env.BASE_URL}images/logo.svg`} style={{ width: '120px' }} alt="" />
                              </div>
                              <div className={styles.aCenter}>
                                  <div className={styles.aCenterWord}>
      
                                      <p className={styles.title}>植物奶百百種，挑出真正適合你的那一款！</p>
                                      <p>市面上的植物奶到底有什麼不同？</p>
                                      <p>你是否也曾站在超市貨架前，面對琳瑯滿目的植物奶感到無從選擇？</p>
                                  </div>
                                  <span className={styles.tags}>蛋白質</span>
                              </div>
                              <div className={styles.aRight}>MORE<img src={`${import.meta.env.BASE_URL}images/arrow.svg`} alt="" /></div>
                          </div>
                          <CustomHR/>
                          <div className={styles.article} onClick={() => navigate('/article5')}>
                              <div className={styles.aLeft}>
                                  <img src={`${import.meta.env.BASE_URL}images/logo.svg`} style={{ width: '120px' }} alt="" />
                              </div>
                              <div className={styles.aCenter}>
                                  <div className={styles.aCenterWord}>
      
                                      <p className={styles.title}>上班族補對這些，精神體力不卡關！</p>
                                      <p>很多素食上班族常抱怨「每天都好累」、「腸胃總是不太順」。</p>
                                      <p>面對高壓的工作環境與不固定的作息，飲食變得更關鍵。</p>
                                  </div>
                                  <span className={styles.tags}>飲食習慣</span>
      
                              </div>
                              <div className={styles.aRight}>MORE<img src={`${import.meta.env.BASE_URL}images/arrow.svg`} alt="" /></div>
                          </div>
                          <CustomHR />
                      </div>
                      </section>
      </article>

);
};

export default Article3;
