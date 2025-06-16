import React, { useState, useEffect } from "react";
import styles from "../../scss/pages/article/article1.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Article4 = () => {
  const navigate = useNavigate();
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
      <h1 className={styles.title}>植物奶百百種，挑出真正適合你的那一款！</h1>

      <div className={styles.hashtag}>
  <Link to="/article?tag=蛋白質" className={styles.tags}>蛋白質</Link>
</div>

      <div className={styles.meta}>
        <p>作者：營養師 素玲</p>
        <span>2025年5月30日</span>
      </div>

      <p className={styles.intro}>
      市面上的植物奶到底有什麼不同？<br/>
      你是否也曾站在超市貨架前，面對琳瑯滿目的植物奶感到無從選擇？<br/>
      豆奶、燕麥奶、杏仁奶、椰奶……看起來都很健康，但口感和營養到底差在哪裡？<br/>
      本篇將從蛋白質含量到使用情境（沖咖啡、配麥片）全面比較，幫你選出最適合你的那一杯。
      </p>

      <section className={styles.nutrients}>
        <div className={styles.nutrientBlock}>
          <h2>1. 認識植物奶的常見種類</h2>
   
          <ul>
      <li><strong>豆奶：</strong></li>
      <li>蛋白質含量最高，是素食者補充優質植物蛋白的首選，亦常見於早餐豆漿中。</li>
      <li><strong>燕麥奶：</strong></li>
      
      <li>富含膳食纖維，能幫助腸道健康與穩定血糖，非常適合用來沖泡拿鐵或搭配咖啡。</li>
      <li><strong>杏仁奶：</strong></li>
      
      <li>熱量低，蛋白質含量偏低，適合控制體重或減糖者使用，建議搭配高蛋白來源食物飲用。</li>
      <li><strong>椰奶：</strong></li>
      
      <li>香氣濃郁，適合亞洲料理與甜點製作，但飽和脂肪偏高，建議少量飲用為佳。</li>
    </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>2. 怎麼挑選適合自己的植物奶？</h2>

          <ul>
      <li><strong>根據飲用情境選擇：</strong></li>

      <li>愛喝咖啡的人建議選用「不易分離」的燕麥奶或豆奶，口感穩定又不搶味。</li>
      <li><strong>搭配早餐麥片：</strong></li>

      <li>建議使用口感較香濃的杏仁奶或椰奶，可提升整體風味與飽足感。</li>
      <li><strong>注重營養者：</strong></li>

      <li>建議選擇標示「添加鈣質、維生素 D、B12」的強化型植物奶，以補足素食者常見營養缺口。</li>
      <li><strong>減糖需求者：</strong></li>

      <li>選購時請留意是否為「無糖版本」，避免攝取過多隱藏糖分，尤其是調味型植物奶。</li>
    </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>3. 素食者飲用植物奶的注意事項</h2>
          <ul>
      <li><strong>鈣質補充：</strong></li>

      <li>建議選擇標示「鈣強化」的產品，每杯至少提供 100mg 鈣質為佳。</li>
      <li><strong>維生素 D 與 B12：</strong></li>

      <li>這兩項是純素者容易缺乏的營養素，選購時可優先挑選有額外添加的版本。</li>
      <li><strong>避免過度加工：</strong></li>

      <li>選擇成分簡單、無添加香料與增稠劑的產品，保留植物原味也對腸胃更友善。</li>
    </ul>
        </div>
      </section>

      <section className={styles.whySupplement}>
        <h2>結語｜植物奶怎麼選？看情境也看營養</h2>
        <ul>
          <li>不同植物奶適合不同的生活情境與營養需求。</li>
          <li>選擇強化型植物奶，補足鈣與維生素缺口。</li>
          <li>適當搭配其他營養食材，才能真正達到均衡飲食。</li>
        </ul>
      </section>

      <p className={styles.note}>
        *小提醒：並非所有植物奶都天然健康，建議選擇成分簡單、無多餘添加物的產品。
      </p>
      </div>
                         <section className={styles.otherPage}>
                      <div className={styles.articles}>
                      <CustomHR  />

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
                          <CustomHR  />
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
                          <CustomHR  />
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
                          <CustomHR  />
                      </div>
                      </section>
      </article>

);
};

export default Article4;
