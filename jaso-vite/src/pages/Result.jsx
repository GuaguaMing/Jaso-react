import React from "react";
import styles from "../css/result.module.scss";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";

const Result = ({ resultData }) => {
  const {
    bmi, bmr, tdee, proteinNeed,
    radarData,
    recommendedProducts,
    nutritionSplit // e.g. { carb: 225, protein: 90, fat: 60 }
  } = resultData;

  return (
    <div className={styles.result}>
      {/* 1. Header 區塊 */}
      <section className={styles.header}>
        <h2>結果完成，專屬你的營養分析已出爐！</h2>
        <p>🧠 身體太累，需要好好 C 一下！</p>
      </section>

      {/* 2. 雷達圖區塊 */}
      <section className={styles.radarSection}>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="nutrient" />
            <Radar name="營養評估" dataKey="score" stroke="#3CB371" fill="#3CB371" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
        <p className={styles.chartNote}>圖表顯示的是你的日常營養攝取評估</p>
      </section>

      {/* 3. 數值建議區塊 */}
      <section className={styles.summary}>
        <h3>營養攝取建議</h3>
        <div className={styles.barGroup}>
          <label>TDEE（每日總熱量消耗）</label>
          <div className={styles.bar}><div className={styles.fill} style={{ width: "100%" }}>{tdee}</div></div>

          <label>BMR（基礎代謝率）</label>
          <div className={styles.bar}><div className={styles.fill} style={{ width: "90%" }}>{bmr}</div></div>

          <label>BMI（身體質量指數）</label>
          <div className={styles.bar}><div className={styles.fill} style={{ width: "30%" }}>{bmi}</div></div>
        </div>

        <div className={styles.protein}>每日蛋白質需求：<strong>{proteinNeed}g</strong></div>
      </section>

      {/* 4. 營養分配區塊 */}
      <section className={styles.nutritionSplit}>
        <h3>建議營養分配為：</h3>
        <p>碳水 <strong>{nutritionSplit?.carb}g</strong>、蛋白質 <strong>{nutritionSplit?.protein}g</strong>、脂肪 <strong>{nutritionSplit?.fat}g</strong></p>
      </section>

      {/* 5. 推薦產品區塊 */}
      <section className={styles.productList}>
        <h3>推薦補給品</h3>
        {recommendedProducts.map((p, idx) => (
          <div className={styles.card} key={idx}>
            <img src={p.image} alt={p.name} />
            <h4>Need 補營養！</h4>
            <p>{p.name}</p>
            <p>{p.desc}</p>
          </div>
        ))}
      </section>

      {/* 6. 行動按鈕 */}
      <section className={styles.actions}>
        <button className={styles.retry}>再次測驗</button>
        <button className={styles.share}>分享結果</button>
      </section>
    </div>

    
  );
};

export default Result;
