import React, { useState, useEffect } from "react";
import styles from "../../scss/pages/article/article1.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Article6 = () => {
  const navigate = useNavigate();
      // hr
      const CustomHR = () => {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="1085" height="2" viewBox="0 0 1085 2" fill="none"   style={{
            display: 'block',
            margin: '0 auto',
            width: '100%',
            maxWidth: '1085px'
          }}>
            <path d="M0 1.5H1085" stroke="#E0DDDD" strokeWidth="1"/>
          </svg>
        );
      };

  return (
    <article>
    <div  className={styles.articlePage}>
      <h1 className={styles.title}>經痛、貧血、掉髮？女性必備五大營養素</h1>
      <div className={styles.hashtag}> 
  <Link to="/article?tag=維生素B12" className={styles.tags}>維生素B12</Link> 
</div>

      <div className={styles.meta}>
        <p>作者：營養師 素勾以</p>
        <span>2025年5月16日</span>
      </div>

      <p className={styles.intro}>
        妳是否常常手腳冰冷、掉髮、經痛？<br />
        全素女性在飲食上若未特別注意，容易因營養攝取不足導致荷爾蒙失衡與身體不適。<br />
        本篇聚焦女性常見問題，整理五大關鍵營養素與對應天然食材。<br />
        讓我們一起從日常飲食穩定體質、養出好氣色！
      </p>

      <section className={styles.nutrients}>
        <div className={styles.nutrientBlock}>
          <h2>1. 鐵｜改善經期疲倦與手腳冰冷</h2>
          <ul>
            <li><strong>推薦食材：</strong>紅莧菜、黑芝麻、葡萄乾、黑糖薑茶</li>
            <li><strong>補充小撇步：</strong>搭配富含維生素C的水果（如芭樂、奇異果）提升吸收率。</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>2. 鋅｜穩定荷爾蒙、防止掉髮</h2>
          <ul>
            <li><strong>推薦食材：</strong>南瓜子、全穀類、堅果類（如杏仁、腰果）</li>
            <li><strong>補充小撇步：</strong>避免長期高糖飲食，糖分會干擾鋅吸收。</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>3. 鈣｜減緩經痛、保護骨骼</h2>
          <ul>
            <li><strong>推薦食材：</strong>黑芝麻醬、豆腐、強化植物奶</li>
            <li><strong>補充小撇步：</strong>攝取時避免同時攝入過多草酸（如菠菜），以免降低吸收率。</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>4. 維生素B群｜提神抗疲勞、穩定情緒</h2>
          <ul>
            <li><strong>推薦食材：</strong>糙米、燕麥、酵母粉、強化穀片</li>
            <li><strong>補充小撇步：</strong>日常飲食難攝足量時，可考慮複方B群補充品。</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>5. 植物雌激素｜幫助調經、緩解更年期不適</h2>
          <ul>
            <li><strong>推薦食材：</strong>黃豆、豆腐、豆漿、亞麻籽</li>
            <li><strong>補充小撇步：</strong>選擇非基改、有機黃豆製品，提升荷爾蒙平衡效果。</li>
          </ul>
        </div>
      </section>

      <section className={styles.whySupplement}>
        <h2>結語｜打造穩定荷爾蒙，從吃對開始</h2>
        <ul>
          <li>全素女性容易面臨經期不適與營養缺口。</li>
          <li>多攝取鐵、鋅、鈣、B群與植物性荷爾蒙來源，能幫助調節生理機能。</li>
          <li>若有長期症狀或備孕需求，建議搭配專業營養師諮詢進一步調整飲食。</li>
        </ul>
      </section>

      <p className={styles.note}>
        *小提醒：每個人體質不同，適合的食材也可能略有差異，補充前可先觀察自身反應。
      </p>
      </div>
                         <section className={styles.otherPage}>
                      <div className={styles.articles}>
                      <CustomHR />

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
                          <div className={styles.article} onClick={() => navigate('/article1')}>
      
                              <div className={styles.aLeft}>
                                  <img src={`${import.meta.env.BASE_URL}images/logo.svg`} style={{ width: '120px' }} alt="" />
                              </div>
                              <div className={styles.aCenter}>                        
                                  <div className={styles.aCenterWord}>
                                  <p className={styles.title}>挑選素食保健品前你必須知道的五件事</p>
                                  <p>不是 Vegan 標籤就安心？看懂產品才不踩雷！</p>
                                  <p>保健品市場琳瑯滿目，對素食者而言，選擇看似更多，風險其實也更多。</p>
              
                              </div><span className={styles.tags}>素食原則</span>
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
                            <p>剛轉素，最常遇到的問題就是「今天要吃什麼？」</p>
                            <p>其實素食不是只能吃青菜白飯，只要掌握幾種關鍵植物食材，就能吃得營養又多變。</p>
        
                        </div><span className={styles.tags}>新手必看</span>
                        </div>
                        <div className={styles.aRight}>MORE<img src={`${import.meta.env.BASE_URL}images/arrow.svg`} alt="" /></div>
                    </div>
                          <CustomHR />
                      </div>
                      </section>
      </article>

);
};

export default Article6;
