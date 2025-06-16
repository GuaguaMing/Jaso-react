import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LikeButton({ articleId }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // 初始：從 localStorage 檢查是否已收藏
  useEffect(() => {
    const likedItems = JSON.parse(localStorage.getItem("likedArticles") || "[]");
    setIsLiked(likedItems.includes(articleId));
  }, [articleId]);

  const toggleLike = () => {
    const liked = JSON.parse(localStorage.getItem("likedArticles") || "[]");
    let updated;

    if (isLiked) {
      updated = liked.filter(id => id !== articleId);
    } else {
      updated = [...liked, articleId];
    }

    localStorage.setItem("likedArticles", JSON.stringify(updated));
    setIsLiked(!isLiked);
  };

  const iconSrc = isLiked
    ? "./images/icons/icon-like.svg" // 無hover
    : isHovered
    ? "./images/icons/icon-like.svg" // 未收藏 + hover  
    : "./images/icons/icon-like-default.svg"; // 未收藏 + 沒 hover 

  return (
    <motion.div
  onClick={toggleLike}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  whileTap={
    isLiked
      ? { scale: 0.95, rotate: [0, 0.5, 0], transition: { duration: 0.2 } }  // 收回動畫
      : { scale: 1.2, rotate: [0, -10, 0, 10, 0], transition: { duration: 0.4 } } // 收藏動畫（放大晃動）
  }
  style={{ width: 40, height: 40, cursor: "pointer" }}
>
      <img src={iconSrc} alt="like" style={{ width: 40, height: 40 }} />
    </motion.div>
  );
}
