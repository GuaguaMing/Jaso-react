import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import styles from "../../scss/pages/1home/apphome.module.scss";

const AnimatedRadarChart = forwardRef((props, ref) => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseOverBlob, setIsMouseOverBlob] = useState(false);
  
  // 暴露方法給父組件
  useImperativeHandle(ref, () => ({
    setHoverState: (isHovered) => {
      setIsMouseOverBlob(isHovered);
    }
  }));
  
  const labels = ["維生素B12", "鐵", "Omega-3", "鈣", "維生素D", "蛋白質"];
  const baseWidth = 500;
  const baseHeight = 447;
  const pointCount = 6;
  const radius = 150;
  const rotationOffset = Math.PI / 3; // -30° rotation
  
  // 白色軟綿綿的參數
  const blobRadius = 95; // 增大六角形基礎大小
  const blobVertices = 6; // 不規則圓形的頂點數
  const magneticRange = 1500; // 磁性影響範圍設定為足夠大的值，確保整個視窗都有效果
  const maxAttraction = 50; // 增大最大吸引距離

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    // 高畫質 canvas 設定
    canvas.width = baseWidth * dpr;
    canvas.height = baseHeight * dpr;
    canvas.style.width = `${baseWidth}px`;
    canvas.style.height = `${baseHeight}px`;
    ctx.scale(dpr, dpr);

    const cx = baseWidth / 2;
    const cy = baseHeight / 2;
    
    // 滑鼠移動事件處理
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
      
      // 檢測滑鼠是否在白色區塊內 - 調整檢測範圍
      const distanceFromCenter = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      const averageBlobRadius = blobRadius + 8; // 調整檢測範圍
      const isOverBlob = distanceFromCenter <= averageBlobRadius;
      setIsMouseOverBlob(isOverBlob);
      
      // 通知父組件 hover 狀態變化
      if (props.onHoverChange) {
        props.onHoverChange(isOverBlob);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const draw = (t) => {
      ctx.clearRect(0, 0, baseWidth, baseHeight);

      // 根據滑鼠懸停狀態調整 scale - 增大hover效果
      const scale = isMouseOverBlob ? 1.25 : 1.0;

      // 畫六邊形背景層（5層靜態外框）
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 1.5;
      for (let layer = 1; layer <= 5; layer++) {
        ctx.beginPath();
        for (let i = 0; i < pointCount; i++) {
          const angle = (Math.PI * 2 * i) / pointCount + rotationOffset;
          const r = (radius * layer) / 5;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      }

      // 動態綠色區塊
      ctx.beginPath();
      for (let i = 0; i < pointCount; i++) {
        const angle = (Math.PI * 2 * i) / blobVertices + rotationOffset;
        const wave = Math.sin(t / 500 + i) * 8;
        const r = radius * 0.8 + wave;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fillStyle = "#3DCE94BB";
      ctx.strokeStyle = "#3DCE94";
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();

      // 白色不規則六角形物體 - 加入磁性變形效果
      ctx.beginPath();
      
      const vertices = [];
      
      // 計算每個頂點的位置（加入磁性效果）
      for (let i = 0; i < blobVertices; i++) {
        const angle = (Math.PI * 2 * i) / blobVertices + rotationOffset;
      
        // 基礎蠕動效果（保留一些自然律動）
        // const wave1 = Math.sin(t / 300 + i * 0.5) * 2;
        // const wave2 = Math.cos(t / 400 + i * 0.8) * 1.5;
        // const wave3 = Math.sin(t / 600 + i * 1.2) * 1.2;
        // let currentRadius = (blobRadius + wave1 + wave2 + wave3) * scale;
      // 基礎蠕動效果（保留一些自然律動）
const wave1 = Math.sin(t / 300 + i * 0.5) * 2;
const wave2 = Math.cos(t / 400 + i * 0.8) * 1.5;
const wave3 = Math.sin(t / 600 + i * 1.2) * 1.2;

// 加入輪流突出效果
const pulseIndex = Math.floor(t / 500) % blobVertices;
const isActive = i === pulseIndex;
const pulse = isActive ? Math.sin((t % 500) / 500 * Math.PI) * 12 : 0;

// 結合所有變化
let currentRadius = (blobRadius + wave1 + wave2 + wave3 + pulse) * scale;

        // 計算這個頂點的基礎位置
        const baseX = cx + Math.cos(angle) * currentRadius;
        const baseY = cy + Math.sin(angle) * currentRadius;
        
        // 計算滑鼠到這個頂點的距離
        const vertexDistance = Math.sqrt((mousePos.x - baseX) ** 2 + (mousePos.y - baseY) ** 2);
        
        // 磁性效果計算 - 移除距離限制，讓整個畫布都有磁吸效果
        // 計算滑鼠到六角形中心的距離，用於調整全域吸引力強度
        const mouseToCenterDistance = Math.sqrt((mousePos.x - cx) ** 2 + (mousePos.y - cy) ** 2);
        const maxViewportDistance = Math.sqrt((baseWidth/2) ** 2 + (baseHeight/2) ** 2); // 畫布對角線的一半
        const globalDistanceInfluence = Math.max(0.2, 1 - mouseToCenterDistance / maxViewportDistance); // 最小保持20%影響力
        
        // 計算局部影響力（頂點到滑鼠的距離）
        const localInfluence = Math.max(0.1, 1 - vertexDistance / magneticRange);
        const totalInfluence = localInfluence * globalDistanceInfluence;
        
        // 計算吸引力效果
        const attraction = totalInfluence * maxAttraction;
        
        // 計算從頂點指向滑鼠的方向
        const directionX = vertexDistance > 0 ? (mousePos.x - baseX) / vertexDistance : 0;
        const directionY = vertexDistance > 0 ? (mousePos.y - baseY) / vertexDistance : 0;
        
        // 應用吸引力，讓頂點向滑鼠方向移動
        const finalX = baseX + directionX * attraction;
        const finalY = baseY + directionY * attraction;
        
        vertices.push({ x: finalX, y: finalY });
      }
      
      // 繪製變形後的六角形
      vertices.forEach((vertex, i) => {
        if (i === 0) {
          ctx.moveTo(vertex.x, vertex.y);
        } else {
          ctx.lineTo(vertex.x, vertex.y);
        }
      });
      ctx.closePath();
      
      // 填充和邊框樣式（保持原有的懸停效果）
      ctx.fillStyle = isMouseOverBlob ? "#FFFFFF95" : "#FFFFFF75";
      ctx.fill();
      
      ctx.strokeStyle = isMouseOverBlob ? "#6dd6a7" : "#D4D4D4";
      ctx.lineWidth = isMouseOverBlob ? 2 : 1;
      ctx.stroke();

      // 六個文字標籤
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "16px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let i = 0; i < pointCount; i++) {
        const angle = (Math.PI * 2 * i) / pointCount + rotationOffset;
        // 調整某些標籤遠一點：2 = Omega-3，5 = 蛋白質
        const extraOffset = (i === 2 || i === 5) ? 48 : 28;
        const r = radius + extraOffset;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        ctx.fillText(labels[i], x, y);
      }
    };

    let animationFrame;
    const animate = (t) => {
      draw(t);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    
    return () => {
      cancelAnimationFrame(animationFrame);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos, isMouseOverBlob]); // 加入 isMouseOverBlob 依賴

  return (
    <canvas
      ref={canvasRef}
      className={styles.netCanvas}
    />
  );
});

export default AnimatedRadarChart;