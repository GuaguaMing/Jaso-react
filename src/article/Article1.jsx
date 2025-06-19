import React, { useState, useEffect } from "react";
import styles from "../../scss/pages/article/article1.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Article1 = () => {
  const navigate = useNavigate();
          // hr
          const CustomHR = () => {
            return (
              <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="2" viewBox="0 0 1200 2" fill="none"   style={{
                display: 'block',
                margin: '0 auto',
              }}>
                <path d="M0 1H1200" stroke="#E0DDDD" strokeWidth="1"/>
              </svg>
            );
          };

  return (
    <article>
    <div className={styles.articlePage}>
      <h1 className={styles.title}>挑選素食保健品前你必須知道的五件事</h1>
      
      <div className={styles.hashtag}>
          <Link to="/article?tag=素食原則" className={styles.tags}>素食原則</Link>
      </div>

      <div className={styles.meta}>
        <p>作者：營養師 素芸</p>
        <span>2025年6月20日</span>
      </div>

      <p className={styles.intro}>
      不是 Vegan 標籤就安心？看懂產品才不踩雷！<br/>
        保健品市場琳瑯滿目，對素食者而言，選擇看似更多，風險其實也更多。許多產品標示 Vegan，但實際上仍可能含有動物成分，或在製程中不符合素食者的倫理與健康訴求。以下五點，是每位素食者在選購前絕對不能忽略的事：
      </p>

      <section className={styles.nutrients}>
        {/* 五個重點 */}
        <div className={styles.nutrientBlock}>
          <h2>1.「Vegan」標示 ≠ 經過嚴格認證</h2>
          <p>
          很多產品標榜「純植物」、「無動物成分」，但實際上僅是廠商自定義的說法，並未經過第三方認證。
          像是常見的膠囊形式，若未標明來源，很可能含有動物性明膠（牛或豬），或含有胭脂蟲萃取的色素，
          即使產品整體看起來「天然」，也未必符合素食者標準。
          </p>
          <p>
          建議選購時，優先選擇擁有 國際素食認證（如歐洲的 V-Label、英國的 The Vegan Society、美國的 Certified Vegan）的品牌，
          這類產品需經過嚴格的成分與製程審核，更值得信賴。
          </p>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>2. 劑型不同，吸收效果也不同</h2>
          <ul>
            <li><strong>錠劑：</strong>穩定性佳、便於儲存，但不易吞嚥。</li>
            <li><strong>膠囊：</strong>多數為明膠製，建議選擇植物膠囊（如羥丙基甲基纖維素 HPMC）。</li>
            <li><strong>粉包/沖泡包：</strong>適合怕吞錠者，也可加入日常飲品中。</li>
            <li><strong>液體：</strong>吸收快但保存不易，開封後需冷藏。</li>
            <li><strong>軟膠囊：</strong>多含油脂類營養素，如Omega-3，但素食者須確認其是否來自微藻或植物油。</li>
            <li>選購時除了看劑型本身，也要留意使用情境與保存方式是否符合自己的需求與生活習慣。</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>3. 別只看「毫克數」，吸收率才是關鍵</h2>
<ul>
            <li>市面上許多產品強調「高單位」、「每日足量」，但身體能否吸收才是真正關鍵。例如：</li>
            <li>鐵劑若與維生素 C 搭配，吸收率可顯著提高；</li>
            <li>維生素 B12 建議選擇活性型態，更容易被身體利用；</li>
            <li>鈣質補充建議選用含有維生素 D 的配方，有助腸道吸收與骨質利用。</li>
            <li>此外，也要特別留意產品中是否有添加影響吸收的抑制劑，例如草酸（菠菜）或植酸（穀類）。</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>4. 避免攝取過多人工添加物與加工成分</h2>
          <p>
          健康意識抬頭，越來越多人開始關注「成分乾淨」。
          尤其對素食者而言，選擇保健食品時除了排除動物性原料，也要避免過度加工與人工化學添加物。以下是應避免的成分：  </p>
<ul>
            <li> • 人工甜味劑（如阿斯巴甜、糖精）</li>
            <li> • 合成色素與香料</li>
            <li> • 防腐劑（如對羥基苯甲酸酯）</li>
          </ul>
        </div>

        <div className={styles.nutrientBlock}>
          <h2>5. 依個人需求選擇營養補充方向</h2>
          <ul>
            <li> • 外食族：常缺乏膳食纖維、益生菌與微量元素</li>
            <li> • 轉素初期者：因尚未熟悉素食均衡，容易缺鐵、B12 與蛋白質</li>
            <li> • 女性族群：經期可能需要額外補充鐵與鈣質</li>
            <li> • 運動者：肌肉合成所需蛋白質與維生素B群需求提升</li>
          </ul>
          <p>
            每位素食者的飲食習慣與體質不同，例如外食族容易缺纖維與益生菌，轉素者可能缺 B12 與鐵，女性則更需注意鈣與植物性荷爾蒙補充。選擇前應了解自己的缺乏項目，必要時可透過營養師或醫師建議進行評估。
          </p>
        </div>
      </section>

      <section className={styles.whySupplement}>
        <h2>結語｜選擇保健品，就是選擇對自己健康的負責態度</h2>
        <ul>
          <li>選對素食保健品，才能真正吃得健康、補得有效。</li>
          <li>無論你是剛轉素還是長期素食者，都值得擁有一款真正為你設計的純素配方。</li>
          <li>Jaso獨家嚴選的素食營養補充方案，讓你每一口都補得安心。</li>
        </ul>
      </section>

      <p className={styles.note}>
        *小提醒：素食者的營養吸收可能受腸道菌相與酵素活性影響，建議定期檢測營養素狀態，選擇對應需求的補充配方。
      </p>

    </div>
    
                   <section className={styles.otherPage}>
                <div className={styles.articles}>
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
    </article>

  );
};

export default Article1;