import React, { useState, useEffect } from "react";
import styles from "../../scss/pages/article/article1.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Article2 = () => {
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
    <div className={styles.articlePage}>
      <h1 className={styles.title}>新手素食者最常缺的營養素，你補對了嗎？</h1>

      <div className={styles.hashtag}>
                  <Link to="/article?tag=新手必看" className={styles.tags}>新手必看</Link>
      </div>

      <div className={styles.meta}>
        <p>作者：營養師 王昱呈</p>
        <span>2025年6月13日</span>
      </div>

      <p className={styles.intro}>
        剛轉素，最常遇到的問題就是「今天要吃什麼？」<br />
        面對原本習慣的肉類消失在餐盤中，許多新手會感到迷惘。<br />
        其實素食不是只能吃青菜白飯，只要掌握幾種關鍵植物食材，就能吃得營養又多變。
      </p>

      <section className={styles.nutrients}>
        <div className={styles.nutrientBlock}>
          <h2>1. 豆製品是你的好朋友</h2>
          <ul>
            <li><strong>豆腐、豆干、豆漿：</strong>富含植物性蛋白，是取代肉類的最佳選擇。</li>
            <li><strong>毛豆與黃豆：</strong>可加入炒飯、沙拉或湯品，提升蛋白質與飽足感。</li>
            <li><strong>豆包與素雞：</strong>口感紮實，適合喜歡咀嚼感的新手素食者。</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>2. 全穀根莖類幫助增能</h2>
          <ul>
            <li><strong>糙米、燕麥、薏仁：</strong>比起白飯，這些穀類富含更多纖維與營養素。</li>
            <li><strong>地瓜、南瓜：</strong>提供天然甜味與能量來源，搭配主餐或當點心都合適。</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>3. 色彩繽紛的蔬果不可少</h2>
          <ul>
            <li><strong>深綠色蔬菜：</strong>如菠菜、芥藍富含鐵與鈣，是素食者的關鍵營養來源。</li>
            <li><strong>紅黃橙色蔬果：</strong>如紅蘿蔔、番茄、南瓜提供維生素A與抗氧化力。</li>
            <li><strong>水果：</strong>奇異果、橙子等富含維生素C，有助於鐵質吸收。</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>4. 健康油脂不能忽略</h2>
          <ul>
            <li><strong>酪梨、堅果、亞麻仁籽油：</strong>提供Omega-3脂肪酸與好油脂，有助於大腦與心血管健康。</li>
            <li><strong>建議：</strong>每天攝取適量堅果（如腰果、核桃），可當零食或撒在沙拉上。</li>
          </ul>
        </div>
      </section>

      <section className={styles.whySupplement}>
        <h2>結語｜從日常食材開始，素食生活其實很簡單</h2>
        <ul>
          <li>不需要昂貴的替代肉產品，只要善用常見植物食材，就能吃得營養又滿足。</li>
          <li>搭配多樣化烹調與簡單調味，素食也能很有味道。</li>
          <li>從今天開始，給自己一個健康轉變的機會！</li>
        </ul>
      </section>

      <p className={styles.note}>
        *小提醒：轉素初期請多觀察自己的身體反應，建議每週規劃一至兩天的「蔬食日」，循序漸進更容易維持。
      </p>
      </div>
                         <section className={styles.otherPage}>
                      <div className={styles.articles}>
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
                      </div>
                      </section>
      </article>

);
};

export default Article2;