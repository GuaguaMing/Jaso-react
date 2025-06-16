import React, { useEffect, useState, useRef } from 'react';
import styles from "../../scss/pages/1component/productc.module.scss";

const ProductC = ({ products, currentProduct, currentIndex, transitioning, handleShopClick, handleProductClick, goToSlide }) => {
  const mainProduct = products[currentIndex]; // 直接使用當前索引
  
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [orbitRotation, setOrbitRotation] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null); // 重新加入，但只用於視覺效果

  // 3D軌道位置計算函數 - 6個角色在軌道上輪轉，右側固定3個位置
  const getCharacterPosition = (index) => {
    const totalItems = products.length;
    const relativeIndex = (index - currentIndex + totalItems) % totalItems;
  
    // 只顯示下一個、下下個、下下下個（最多三個）
    if (relativeIndex === 0 || relativeIndex > 3) return null;
  
    // 👉 改為順時針，最下方是下一個展示角色
    const orbitAngles = [60, 0, -50]; // 原為 [300, 0, 60]
    const angle = orbitAngles[relativeIndex - 1];
    const radian = (angle * Math.PI) / 180;
  
    const radiusX = 450;
    const radiusY = 160;
    const centerX = -350;
    const centerY = 0;
  
    const x = centerX + radiusX * Math.cos(radian);
    const y = centerY + radiusY * Math.sin(radian);
  
    // const scale = relativeIndex === 1 ? 1.2 : 1.0;
    let scale = 1.0;
if (relativeIndex === 1) scale = 1.25; // 下一位（即將登場）
else if (relativeIndex === 2) scale = 1.1; // 下下位
else if (relativeIndex === 3) scale = 1.0; // 最後一位

    const opacity = 1;
    const zIndex = 10 - relativeIndex;
  
    return {
      x,
      y,
      scale,
      opacity,
      zIndex,
      isVisible: true
    };
  };
  
  
  const handleCharacterClick = (index) => {
    if (!transitioning && index !== currentIndex) {
      goToSlide(index);
    }
  };
    

  // 自動輪播效果 - 順時針旋轉，更流暢的間隔
  useEffect(() => {
    const interval = setInterval(() => {
      if (!transitioning) { // 移除 isHovered 檢查，讓輪播持續進行
        const nextIndex = (currentIndex + 1) % products.length;
        goToSlide(nextIndex);
      }
    }, 2000); // 增加間隔時間讓動畫更流暢

    return () => clearInterval(interval);
  }, [currentIndex, products.length, transitioning]); // 移除 isHovered 依賴

  // 軌道自動旋轉效果 - 順時針方向
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      if (!isHovered) {
        setOrbitRotation(prev => (prev + 1) % 360);
      }
    }, 80);

    return () => clearInterval(rotationInterval);
  }, [isHovered]);

  return (
    <section className={`${styles.shop} ${styles.rightBackground}`}>
      <div
        ref={containerRef}
        className={styles.container}
        onMouseEnter={() => {}} // do nothing
        onMouseLeave={() => {}} // do nothing
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
            <p>{mainProduct.speech}</p>
            <div className={styles.roundedTriangle}></div>
          </div>

          {/* 當前角色 */}
          <div className={styles.role}>
            <img
              src={mainProduct.role}
              alt={mainProduct.name}
              style={{
                width: '250px',
                height: '250px',
                objectFit: 'contain',
                transition: 'all 0.5s ease',
                transform: transitioning ? 'scale(1.1)' : 'scale(1)'
              }}
              onClick={() => handleProductClick(mainProduct)}
            />
          </div>
        </div>

        {/* 中央：主要產品展示區 */}
        <div className={styles.containerCenter} onClick={handleShopClick}>
          <div className={styles.centerBox}>
            {/* 產品圖片 */}
            <figure style={{
              animation: transitioning ? styles.productSlideIn : ''
            }}>
              <img
                src={mainProduct.product}
                alt={mainProduct.name}
                style={{
                  width: '400px',
                  height: '502px',
                  objectFit: 'contain'
                }}
              />
            </figure>

            {/* 產品資訊 */}
            <div className={`${styles.centerBottom} ${transitioning ? styles.fadeInUp : ''}`}>
              <div>
                <div className={styles.centerNeed}>Need
                  <p className={styles.span0}>大補帖!</p>
                </div>
              </div>

              <div>
                <p className={styles.span1}>{mainProduct.name}</p>
                <p className={styles.span2}>{mainProduct.subtitle}</p>
                <p className={styles.span3}>{mainProduct.description}</p>
              </div>
            </div>
          </div>
          <div className={styles.centerCorner} onClick={handleShopClick} />
        </div>

        {/* 右側：3D軌道角色圓環 - 6個角色輪轉，右側固定顯示可見的角色 */}
        <div className={styles.containerSlides}>
          <ul>
            {products.map((item, index) => {
              const position = getCharacterPosition(index);
              const isActive = index === currentIndex;

              // 當前展示的角色不顯示在軌道上
              if (isActive || !position || !position.isVisible) {
                return null;
              }

              return (
                <li
                  key={item.id}
                  style={{
                    transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${position.scale})`,
                    transition: 'transform 0.6s ease, opacity 0.4s ease',

                    opacity: position.opacity,
                    zIndex: position.zIndex,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' // 更流暢的過渡效果
                  }}
                  onClick={() => handleCharacterClick(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`${styles.card} ${styles.card3d} ${hoveredIndex === index ? styles.cardHovered : ''}`}
                    style={{
                      // boxShadow: hoveredIndex === index 
                      //   ? '0 12px 30px rgba(0, 0, 0, 0.4)' 
                      //   : '0 4px 15px rgba(0, 0, 0, 0.2)',
                      // border: '1px solid rgba(255, 255, 255, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)'
                    }}
                  >
                    <img
                      src={item.role}
                      alt={item.name}
                      style={{
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>

          {/* 3D軌道線 */}
          <div className={styles.orbit3d}>
            {/* 主軌道 */}
            <div className={styles.trackEllipse} />
            {/* 內軌道 */}
            <div className={styles.trackEllipseInner} />
            {/* 外軌道 */}
            <div className={styles.trackEllipseOuter} />
          </div>
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