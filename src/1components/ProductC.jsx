import React, { useEffect, useState, useRef } from 'react';
import styles from "../../scss/pages/1component/productc.module.scss";

const ProductC = ({ products, currentProduct, currentIndex, transitioning, handleShopClick, handleProductClick, goToSlide }) => {
  const mainProduct = products[currentIndex]; // 直接使用當前索引
  
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [orbitRotation, setOrbitRotation] = useState(0);

  // 3D軌道位置計算函數 - 調整為順時針旋轉且右側顯示3個角色
  const getCharacterPosition = (index, totalItems = products.length) => {
    // 計算相對於當前展示角色的位置偏移
    const relativeIndex = (index - currentIndex + totalItems) % totalItems;
    
    // 順時針角度計算，從右側開始（0度），向下到左側（180度）
    const baseAngle = (relativeIndex * 360) / totalItems;
    const angle = baseAngle + orbitRotation;
    const radian = (angle * Math.PI) / 180;
    
    // 3D橢圓軌道參數 - 調整為更適合右側顯示3個角色的參數
    const radiusX = 500; // 水平半徑
    const radiusY = 180;  // 垂直半徑，增加以便容納更多角色
    const centerX = -400; // 軌道中心向左移動
    const centerY = 0;
    
    // 軌道仰角參數，調整角度讓右側能看到3個角色
    const elevationAngle = 25; // 增加仰角，讓軌道更傾斜
    const elevationRadian = (elevationAngle * Math.PI) / 180;
    
    // 基本橢圓位置
    const baseX = radiusX * Math.cos(radian);
    const baseY = radiusY * Math.sin(radian);
    
    // 應用仰角變換
    const x = centerX + baseX;
    const y = centerY + baseY * Math.cos(elevationRadian);
    
    // Z軸深度效果
    const depth = (baseY * Math.sin(elevationRadian)) / radiusY;
    
    // 根據深度調整大小和透明度
    const baseScale = 0.9;
    const depthScale = 0.5 + (depth + 1) * 0.4; // 調整縮放範圍
    const finalScale = baseScale * depthScale;
    
    // 透明度基於深度
    const opacity = 0.4 + (depth + 1) * 0.5;
    
    // 判斷是否在前景
    const isInFront = depth > -0.2; // 調整閾值以顯示更多角色
    
    return {
      x,
      y,
      scale: finalScale,
      opacity: Math.max(0.3, opacity), // 確保最小透明度
      isInFront,
      depth,
      zIndex: Math.round((depth + 1) * 30) // 調整 z-index 範圍
    };
  };

  // 自動輪播效果 - 順時針旋轉
  useEffect(() => {
    const interval = setInterval(() => {
      if (!transitioning && !isHovered) {
        const nextIndex = (currentIndex + 1) % products.length;
        goToSlide(nextIndex);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, products.length, transitioning, isHovered]);

  // 軌道自動旋轉效果 - 順時針方向
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      if (!isHovered) {
        setOrbitRotation(prev => (prev + 1) % 360); // 增加旋轉速度
      }
    }, 80); // 調整旋轉間隔

    return () => clearInterval(rotationInterval);
  }, [isHovered]);

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
                filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))',
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
              margin: '0 0 2rem 0',
              animation: transitioning ? styles.productSlideIn : ''
            }}>
              <img
                src={mainProduct.product}
                alt={mainProduct.name}
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

        {/* 右側：3D軌道角色圓環 */}
        <div className={styles.containerSlides}>
          <ul>
            {products.map((item, index) => {
              const position = getCharacterPosition(index);
              const isActive = index === currentIndex;

              // 當前展示的角色不顯示在軌道上
              if (isActive) {
                return null;
              }

              // 只顯示在可見範圍內的角色（右側區域）
              const isVisible = position.x > -200 && position.isInFront;

              if (!isVisible) {
                return null;
              }

              return (
                <li
                  key={item.id}
                  style={{
                    transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${position.scale})`,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    filter: `blur(${position.isInFront ? 0 : 1}px) brightness(${0.8 + position.opacity * 0.2})`
                  }}
                  onClick={() => goToSlide(index)}
                >
                  <div
                    className={`${styles.card} ${styles.card3d}`}
                    style={{
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      cursor: 'pointer'
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