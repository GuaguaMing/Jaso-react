import React, { useEffect, useState, useRef } from 'react';
import styles from "../../scss/pages/1components/productc.module.scss";

// 產品資料 - 可以移到獨立的 data.js 檔案
const productData = [
  {
    id: 'protein',
    product: 'https://via.placeholder.com/400x502/FFE4B5/333?text=蛋白質膠囊',
    role: 'https://via.placeholder.com/250x250/FFE4B5/333?text=蛋白質角色',
    speech: '自從吃素後感覺體力變差，運動完還一直肌肉痠痛？',
    name: '蛋白質膠囊',
    subtitle: '植物蛋白配方',
    description: '提供完整胺基酸，支持肌肉修復與體力維持',
    color: '#FFE4B5'
  },
  {
    id: 'b12',
    product: 'main.svg',
    role: 'N.svg',
    speech: '常覺得頭暈疲憊、注意力不集中，吃素之後變得更嚴重？',
    name: '維生素B12',
    subtitle: '神經系統守護者',
    description: '維持神經系統健康，改善疲勞與注意力',
    color: '#FFB6C1'
  },
  {
    id: 'iron',
    product: 'main.svg',
    role: 'N.svg',
    speech: '最近常臉色蒼白、容易喘氣，月經期間也特別疲倦？',
    name: '鐵質補充',
    subtitle: '血紅素生成助手',
    description: '高吸收率鐵質，改善缺鐵性貧血',
    color: '#FFA07A'
  },
  {
    id: 'omega',
    product: 'main.svg',
    role: 'N.svg',
    speech: '腦袋常打結、情緒低落，好像比較難專注思考？',
    name: 'Omega-3',
    subtitle: '腦部營養補給',
    description: '植物性DHA，促進大腦健康與情緒穩定',
    color: '#98FB98'
  },
  {
    id: 'vitaminD',
    product: 'main.svg',
    role: 'N.svg',
    speech: '白天無精打採、想睡覺，曬不到太陽總覺得沒精神？',
    name: '維生素D3',
    subtitle: '陽光維他命',
    description: '強化骨骼健康，提升免疫力與精神狀態',
    color: '#F0E68C'
  },
  {
    id: 'main',
    product: 'main.svg',
    role: 'N.svg',
    speech: '素食營養需要全方位補充，一次滿足所有需求！',
    name: '維生素超群膠囊',
    subtitle: '植萃綜合維他命配方',
    description: '由於素食飲食可能缺乏的關鍵營養素，如B群、鐵、鋅與維生素D。',
    color: '#3DCE94'
  }
];
const ProductC = ({ products, currentProduct, currentIndex, transitioning, handleShopClick, handleProductClick, goToSlide, getCharacterPosition }) => {
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <section className={`${styles.shop} ${styles.rightBackground}`}>
        <div 
          ref={containerRef}
          className={styles.container}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
  
          {/* 左側：對話氣泡和當前角色 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 10
          }}>
            {/* 對話氣泡 */}
            <div className={styles.dialog}>
              <p>{currentProduct.speech}</p>
              <div className={styles.roundedTriangle}></div>
            </div>
  
            {/* 當前角色 */}
            <div className={styles.role}>
              <img 
                src={currentProduct.role} 
                alt={currentProduct.name}
                style={{
                  width: '250px',
                  height: '250px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))',
                  transition: 'all 0.5s ease',
                  transform: transitioning ? 'scale(1.1)' : 'scale(1)'
                }}
                onClick={() => handleProductClick(currentProduct)}
              />
            </div>
          </div>
  
          {/* 中央：主要產品展示區 */}
          <div className={styles.containerCenter} onClick={handleShopClick}>
            <div className={styles.centerBox}>
              {/* 產品圖片 */}
              <figure style={{ 
                margin: '0 0 2rem 0',
                animation: transitioning ? styles.productSlideIn : ''
              }}>
                <img 
                  src={currentProduct.product}
                  alt={currentProduct.name}
                  style={{
                    width: '400px',
                    height: '502px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.1))'
                  }}
                />
              </figure>
  
              {/* 產品資訊 */}
              <div className={`${styles.centerBottom} ${transitioning ? styles.fadeInUp : ''}`}>
                <div>
                  <div className={styles.centerNeed}>Need</div>
                  <p className={styles.span0}>大補帖!</p>
                </div>
  
                <div>
                  <p className={styles.span1}>{currentProduct.name}</p>
                  <p className={styles.span2}>{currentProduct.subtitle}</p>
                  <p className={styles.span3}>{currentProduct.description}</p>
                </div>
              </div>
            </div>
            <div className={styles.centerCorner} onClick={handleShopClick} />
          </div>
  
          {/* 右側：360度旋轉角色圓環 */}
          <div className={styles.containerSlides}>
            <ul>
              {products.map((item, index) => {
                const position = getCharacterPosition(index);
                const isActive = index === currentIndex;
  
                return (
                  <li
                    key={item.id}
                    style={{
                      transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${position.scale})`,
                      opacity: isActive ? 0 : position.opacity,
                      zIndex: position.isInFront ? 10 : 1
                    }}
                    onClick={() => goToSlide(index)}
                  >
                    <div 
                      className={styles.card}
                      style={{
                        boxShadow: `0 ${8 * position.scale}px ${20 * position.scale}px rgba(0,0,0,0.15)`,
                        animationDelay: `${index * 0.3}s`,
                        background: `radial-gradient(circle, ${item.color}22 0%, transparent 70%)`
                      }}
                    >
                      <img 
                        src={item.role} 
                        alt={item.name}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
  
            {/* 中心軌道線 (裝飾用) */}
            <div className={styles.trackCircle} />
          </div>
        </div>
  
        {/* 進度指示器 */}
        <div className={styles.progressDots}>
          {products.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default ProductC;


