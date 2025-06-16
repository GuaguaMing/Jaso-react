import React, { useEffect, useState, useRef } from 'react';
import styles from "../../scss/pages/1component/productc.module.scss";

const ProductC = ({ products, currentProduct, currentIndex, transitioning, handleShopClick, handleProductClick, goToSlide }) => {
  const mainProduct = products[currentIndex]; // 直接使用當前索引
  
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [orbitRotation, setOrbitRotation] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // 3D軌道位置計算函數 - 6個角色在軌道上輪轉，右側固定3個位置
  const getCharacterPosition = (index, totalItems = products.length) => {
    // 計算相對於當前展示角色的位置偏移
    const relativeIndex = (index - currentIndex + totalItems) % totalItems;
    
    // 當前展示角色不顯示在軌道上
    if (relativeIndex === 0) return null;
    
    // 計算軌道角度 - 6個角色平均分布在圓形軌道上
    const baseAngle = (relativeIndex * 360) / totalItems;
    const angle = baseAngle + orbitRotation;
    const radian = (angle * Math.PI) / 180;
    
    // 3D橢圓軌道參數
    const radiusX = 450; // 水平半徑
    const radiusY = 160;  // 垂直半徑
    const centerX = -350; // 軌道中心向左移動
    const centerY = 0;
    
    // 軌道仰角參數
    const elevationAngle = 20;
    const elevationRadian = (elevationAngle * Math.PI) / 180;
    
    // 基本橢圓位置
    const baseX = radiusX * Math.cos(radian);
    const baseY = radiusY * Math.sin(radian);
    
    // 應用仰角變換
    const x = centerX + baseX;
    const y = centerY + baseY * Math.cos(elevationRadian);
    
    // Z軸深度效果
    const depth = (baseY * Math.sin(elevationRadian)) / radiusY;
    
    // 判斷是否應該顯示 - 只顯示接下來要展示的3個角色
    // relativeIndex 1,2,3 分別是下一個、下下個、下下下個要展示的角色
    const isVisible = relativeIndex >= 1 && relativeIndex <= 3;
    
    // 根據深度調整大小
    const baseScale = 0.8;
    const depthScale = 0.6 + (depth + 1) * 0.3;
    
    // 根據相對位置調整大小 - 下一個展示的角色(relativeIndex=1)稍大
    const positionScale = relativeIndex === 1 ? 1.2 : 1.0;
    const finalScale = baseScale * depthScale * positionScale;
    
    // 透明度
    const opacity = 0.7 + (depth + 1) * 0.2;
    
    return {
      x,
      y,
      scale: finalScale,
      opacity: Math.max(0.5, opacity),
      depth,
      zIndex: Math.round((depth + 1) * 30) + (relativeIndex === 1 ? 10 : 0), // 下一個展示角色z-index最高
      relativeIndex,
      isVisible
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

              const isHoveredItem = hoveredIndex === index;

              return (
                <li
                  key={item.id}
                  style={{
                    transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${position.scale * (isHoveredItem ? 1.2 : 1)})`,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onClick={() => goToSlide(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`${styles.card} ${styles.card3d}`}
                    style={{
                      boxShadow: isHoveredItem ? '0 8px 25px rgba(0, 0, 0, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.2)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      cursor: 'pointer',
                      transform: isHoveredItem ? 'translateY(-5px)' : 'translateY(0)',
                      transition: 'all 0.3s ease'
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