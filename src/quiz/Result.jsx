import React, { useState, useEffect, useRef } from "react";
import styles from "../../scss/pages/quiz/result.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import DownloadOk from "./DownloadOk";

// 動態載入圖表組件
const LazyRadarChart = ({ radarData }) => {
  const [chartComponents, setChartComponents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadChart = async () => {
      try {
        const module = await import('recharts');
        const { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } = module;
        
        setChartComponents(() => (
          <ResponsiveContainer width={400} height={360}>
            <RadarChart
              data={radarData}
              cx="50%"
              cy="50%"
              outerRadius="80%"
              startAngle={0}
              endAngle={-360}
            >
              <PolarGrid stroke="#AAA6A8" />
              <PolarAngleAxis dataKey="nutrient" tick={{ fontSize: 12 }} />
              <Radar
                name="營養分數"
                dataKey="score"
                stroke="#3DCE94"
                fill="#3DCE94"
                fillOpacity={0.75}
              />
            </RadarChart>
          </ResponsiveContainer>
        ));
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load chart:', error);
        setIsLoading(false);
      }
    };

    loadChart();
  }, [radarData]);

  if (isLoading) {
    return (
      <div style={{ 
        width: 400, 
        height: 360, 
        backgroundColor: '#f0f0f0', 
        borderRadius: '8px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <span>圖表載入中...</span>
      </div>
    );
  }

  return chartComponents;
};

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDownload, setShowDownload] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [html2canvas, setHtml2canvas] = useState(null);
  const resultRef = useRef(null);

  // Lazy load html2canvas when needed
  const loadHtml2Canvas = async () => {
    if (!html2canvas) {
      try {
        const module = await import('html2canvas');
        const html2canvasFunc = module.default;
        setHtml2canvas(() => html2canvasFunc);
        return html2canvasFunc;
      } catch (error) {
        console.error('Failed to load html2canvas:', error);
        throw error;
      }
    }
    return html2canvas;
  };

  const handleShareClick = async () => {
    setIsDownloading(true);
    
    try {
      // Lazy load html2canvas
      const html2canvasModule = await loadHtml2Canvas();
      
      // 等待一小段時間確保所有元素都已渲染
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const canvas = await html2canvasModule(resultRef.current, {
        backgroundColor: '#ffffff',
        scale: 2, // 提高清晰度
        useCORS: true, // 允許跨域圖片
        allowTaint: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        onclone: (clonedDoc) => {
          // 確保克隆的文檔中的圖片正確載入
          const images = clonedDoc.querySelectorAll('img');
          images.forEach(img => {
            if (img.src.startsWith('blob:')) {
              img.style.display = 'none';
            }
          });
        }
      });

      // 創建下載連結
      const link = document.createElement('a');
      link.download = `營養分析結果_${new Date().toLocaleDateString('zh-TW')}.png`;
      link.href = canvas.toDataURL('image/png');
      
      // 觸發下載
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // 顯示成功提示
      setShowDownload(true);
      setTimeout(() => {
        setShowDownload(false);
      }, 2000);
      
    } catch (error) {
      console.error('下載失敗:', error);
      alert('下載失敗，請稍後再試');
    } finally {
      setIsDownloading(false);
    }
  };

  const resultData = location.state;
  if (!resultData) {
    return <p>請先完成測驗</p>
  }
  
  const {
    bmi,
    bmr,
    tdee,
    radarScores,
    conditions
  } = resultData;
  
  // 六大營養素的紅配綠
  const getBubble = (score) => {
    let levelClass = "";
    let text = "";

    if (score >= 8) {
      levelClass = styles.high;
      text = "正常";
    } else if (score >= 5) {
      levelClass = styles.medium;
      text = "偏低";
    } else {
      levelClass = styles.low;
      text = "嚴重偏低";
    }

    return (
      <div className={`${styles.bubble} ${levelClass}`}>
        <span>{text}</span>
      </div>
    );
  };
  
  const suggestions = {
    protein: "．建議多攝取豆製品、堅果等植物性蛋白，補足蛋白質需求。",
    b12: "．純素飲食容易缺乏B12，建議選擇B12補充品。",
    ca: "．建議多吃深綠色蔬菜、黑芝麻等含鈣食物，提升鈣質攝取。",
    iron: "．建議搭配維生素C攝取鐵質，搭配適量C補充品。",
    d: "．建議多曬太陽，搭配適量維生素D補充品。",
    omg: "．建議攝取亞麻仁籽、奇亞籽等富含Omega-3的植物性食材。"
  };

  const nutrientKeys = ["protein", "b12", "iron", "omega3", "ca", "d"];
  const nutrientLabels = {
    protein: "蛋白質",
    b12: "B12",
    iron: "鐵",
    omega3: "Omega-3",
    ca: "鈣",
    d: "維生素D"
  };

  const radarLabels = {
    protein: "蛋白質",
    b12: "維生素B12",
    iron: "鐵",
    omega3: "Omega-3",
    ca: "鈣",
    d: "維生素D"
  };
  
  const radarData = Object.keys(radarScores).map((key) => ({
    nutrient: radarLabels[key],
    score: radarScores[key],
  }));

  // 蛋白質建議與三大營養素分配（以 TDEE 推算）
  const proteinNeed = Math.round(tdee * 0.15 / 4);
  const nutritionSplit = {
    carb: Math.round(tdee * 0.5 / 4),
    protein: proteinNeed,
    fat: Math.round(tdee * 0.35 / 9),
  };

  const recommendedProducts = {
    fatigue: [
      {
        name: "鐵了心膠囊",
        desc: "植萃鐵＋B群補給",
        image: "/assets/shop_iron.png",
      },
      {
        name: "維生素 B12",
        desc: "補B不累口含錠",
        image: "/assets/shop_B12.png",
      }
    ],
    headache: [
      {
        name: "OMEG3",
        desc: "油你真好植物膠囊",
        image: "/assets/shop_omg.png",
      }
    ],
    constipation: [
      {
        name: "維生素超群膠囊",
        desc: "植萃綜合維他命配方",
        image: "/assets/shop_protein.png",
      }
    ],
    cramp: [
      {
        name: "鈣心定植物鈣",
        desc: "藻鈣＋D3雙效配方",
        image: "/assets/shop_Ca.png",
      },
      {
        name: "素D速補D",
        desc: "植萃維生素D膠囊",
        image: "/assets/shop_D.png",
      }
    ]
  };

  const handleRetry = () => {
    navigate("/quiz");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "營養分析結果",
        text: `我的營養分析結果：TDEE: ${tdee}，BMR: ${bmr}，BMI: ${bmi}`,
        url: window.location.href,
      });
    } else {
      alert("分享功能在此設備上不可用");
    }
  };

  return (
    <div className={styles.result} ref={resultRef}>
      {/* 1. Header 檢測叮嚀 */}
      <section className={styles.header}>
        <h2 className={styles.title}>檢測完成，專屬你的營養分析已出爐！ </h2>
        <p className={styles.subtitle}>"多曬太陽，常保好心情！"</p>
      </section>

      {/* 2.角色+雷達圖 */}
      <section className={styles.radarSection}>
        {/* 左：六大營養素 */}
        <div className={styles.radarLeft}>
          <div className={styles.radarCharacter}>
            {nutrientKeys.map((key) => (
              <div key={key} className={styles.characterBox}>
                <div className={styles.characterImgWrapper}>
                  {getBubble(radarScores[key])}
                  <img
                    src={`${import.meta.env.BASE_URL}assets/${key}.svg`}
                    alt={nutrientLabels[key]}
                  />
                </div>
                <div className={styles.bubbleText}>
                  <span>{nutrientLabels[key]}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.suggestionBox}>
            {nutrientKeys
              .filter((key) => radarScores[key] < 6)
              .map((key) => (
                <p key={key} className={styles.suggestion}>
                  {suggestions[key]}
                </p>
              ))}
          </div>
        </div>

        {/* 右：雷達圖 - 使用自定義 Lazy Loading */}
        <div className={styles.radarChart}>
          <LazyRadarChart radarData={radarData} />
          {/* 右下：雷達小語 */}
          <div className={styles.chartText}>
            <h4 className={styles.chartTitle}><div className={styles.circle}></div>實際攝取量</h4>
            <p className={styles.chartNote}>本圖為六大營養素攝取平衡圖，角落越接近圓心表示該營養素攝取不足。
              建議每日攝取針對性保健食品不足該營養素。</p>
          </div>
        </div>
      </section>

      {/* 攝取計算 */}
      <section className={styles.summary}>
        <h4>根據你的飲食填答，我們整理了以下營養狀況與建議，
          協助你掌握當前狀況並找到適合的改善方式。</h4>
        <h3>營養攝取建議</h3>
        <div className={styles.barGroup}>
          <div className={styles.bar}>
            <div className={styles.fill} style={{ width: `${(tdee / 3000) * 100}%` }}>
              <label>TDEE每日總熱量消耗（千卡）</label>
            </div>
            {tdee}
          </div>
          <div className={styles.bar}>
            <div className={styles.fill} style={{ width: `${(bmr / 2000) * 100}%` }}>
              <label>BMR基礎代謝率</label>
            </div>
            {bmr}
          </div>
          <div className={styles.bar}>
            <div className={styles.fill} style={{ width: `${(bmi / 30) * 100}%` }}>
              <label>BMI身體質量指數</label>
            </div>
            {bmi}
          </div>
        </div>
        <div className={styles.protein}>每日蛋白質需求＝<p><strong>{proteinNeed}g</strong></p></div>
      </section>

      {/* 推薦產品 */}
      <section className={styles.productList}>
        {Object.keys(recommendedProducts).map((symptomKey) => {
          if (!conditions[symptomKey]) return null;

          return recommendedProducts[symptomKey].map((product, idx) => (
            <div className={styles.card} key={`${symptomKey}-${idx}`}>
              <img src={`${import.meta.env.BASE_URL}${product.image.replace(/^\//, '')}`} alt={product.name} />
              <div className={styles.needWhat}>
                <div className={styles.needLeft}>
                  <h4>Need </h4>
                  <span>補營養！</span>
                </div>
                <div className={styles.needRight}>
                  <span>{product.name}</span>
                  <p>{product.desc}</p>
                </div>
              </div>
            </div>
          ));
        })}
      </section>
      
      {/* 行動按鈕 */}
      <section className={styles.actions}>
        <button 
          className={styles.share} 
          onClick={handleShareClick}
          disabled={isDownloading}
        >
          {isDownloading ? '下載中...' : '分享結果'}
        </button>
        {showDownload && <DownloadOk />}
        <button className={styles.retry} onClick={handleRetry}>再測一次</button>
      </section>
    </div>
  );
};

export default Result;