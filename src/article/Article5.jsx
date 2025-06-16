import React, { useState, useEffect } from "react";
import styles from "../../scss/pages/article/article1.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Article5 = () => {
  const navigate = useNavigate();
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
    <div className={styles.articlePage}>
      <h1 className={styles.title}>上班族補對這些，精神體力不卡關！</h1>
      <div className={styles.hashtag}>
  <Link to="/article?tag=飲食習慣" className={styles.tags}>飲食習慣</Link>
      </div>

      <div className={styles.meta}>
        <p>作者：營養師 得來素</p>
        <span>2025年5月23日</span>
      </div>

      <p className={styles.intro}>
        很多素食上班族常抱怨「每天都好累」、「腸胃總是不太順」。<br />
        面對高壓的工作環境與不固定的作息，飲食變得更關鍵。<br />
        以下整理幾種常見症狀對應的植物性營養食材，幫你找回精神與消化力。
      </p>

      <section className={styles.nutrients}>
        <div className={styles.nutrientBlock}>
          <h2>1. 總是覺得疲倦？補鐵與維生素B群</h2>
          <ul>
            <li><strong>紅莧菜、菠菜：</strong>富含植物性鐵質，搭配維生素C水果幫助吸收。</li>
            <li><strong>糙米、全麥麵包：</strong>提供B群與穩定能量，是代謝的重要幫手。</li>
            <li><strong>黑芝麻、葡萄乾：</strong>零食替代品，也含有鐵與微量元素，提升精神力。</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>2. 腸胃不適、容易脹氣？這樣吃更順暢</h2>
          <ul>
            <li><strong>木耳、秋葵、地瓜：</strong>富含可溶性纖維，能潤腸通便、溫和幫助排便。</li>
            <li><strong>發酵食品如味噌、泡菜：</strong>含益菌，有助調節腸道菌相。</li>
            <li><strong>避免過多豆類或加工素食：</strong>如素火腿、素丸子，容易造成脹氣。</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>3. 一餐吃完就昏昏欲睡？掌握穩糖技巧</h2>
          <ul>
            <li><strong>豆腐搭配糙米：</strong>蛋白質+全穀讓血糖穩定上升，避免午餐後昏沉。</li>
            <li><strong>避免高糖精緻點心：</strong>如含糖飲、蛋糕，雖然提神快但易導致血糖大幅波動。</li>
            <li><strong>加點堅果或酪梨：</strong>健康脂肪延長飽足感，提升下午專注力。</li>
          </ul>
        </div>
      </section>

      <section className={styles.whySupplement}>
        <h2>結語｜吃得對，素食上班族也能精神滿滿</h2>
        <ul>
          <li>避免只吃澱粉或炸物，改用天然食材補足關鍵營養。</li>
          <li>利用全穀、深綠蔬菜、堅果與發酵食品，改善體力與腸道狀況。</li>
          <li>想吃得更有力氣，就從今天開始調整你的素食餐盤！</li>
        </ul>
      </section>

      <p className={styles.note}>
        *小提醒：若持續感到疲倦或消化不良，建議尋求專業營養師協助，排除潛在缺乏與身體狀況。
      </p>
      </div>
                         <section className={styles.otherPage}>
                      <div className={styles.articles}>
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
                          <CustomHR />
                          <div className={styles.article} onClick={() => navigate('/article6')}>
                              <div className={styles.aLeft}>
                                  <img src={`${import.meta.env.BASE_URL}images/logo.svg`} style={{ width: '120px' }} alt="" />
                              </div>
                              <div className={styles.aCenter}>
                                  <div className={styles.aCenterWord}>
      
                                      <p className={styles.title}>經痛、貧血、掉髮？女性必備五大營養素</p>
                                      <p>妳是否常常手腳冰冷、掉髮、經痛？</p>
                                      <p>素女性在飲食上若未特別注意，容易因營養攝取不足導致荷爾蒙失衡與身體不適。</p>
                                  </div>
                                  <span className={styles.tags}>維生素B12</span>
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

                      </div>
                      </section>
      </article>

);
};

export default Article5;








