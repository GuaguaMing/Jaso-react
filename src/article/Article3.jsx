import React, { useState, useEffect } from "react";
import styles from "../../scss/pages/article/article1.module.scss";
import { useNavigate } from "react-router-dom";
const Article3 = () => {
  return (
    <article className={styles.articlePage}>
      <h1 className={styles.title}>你吃對了嗎？六大類素食者食物分類與功能解析</h1>
      <div className={styles.meta}>
        <p>作者：營養師 素素兒</p>
        <span>2025年6月6日</span>
      </div>

      <p className={styles.intro}>
        天然來源好，配方解析！補對營養，讓植物飲食更安心。對於完全素食或蛋奶素的朋友來說，雖然植物食富含膳食纖維與抗氧化物，但某些營養素仍可能攝取不足而影響生理機能。以下是我們精選的六大針對素食者常見缺乏營養素的重點整理與建議，幫助你每日補得準、補得對，提升整體健康與活力。
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
          <h2>鋅</h2>
          <ul>
            <li><strong>功能：</strong>支持免疫功能、皮膚修復、味覺與生殖健康</li>
            <li><strong>缺乏可能症狀：</strong>易感冒、皮膚乾癢、傷口癒合慢</li>
            <li><strong>天然補充來源：</strong>南瓜籽、全穀、豆類、發酵食品（味噌、納豆）</li>
            <li><strong>補充建議：</strong>鋅與植物中的植酸易結合，建議從發酵或發芽食材獲得</li>
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
    </article>
  );
};

export default Article3;
