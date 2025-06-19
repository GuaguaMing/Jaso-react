import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LikeButton({ 
  productId, 
  articleId, 
  className, 
  style,
  type = "auto" // "product", "article", "auto"
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getStorageConfig = () => {
    if (type === "product" || (type === "auto" && productId)) {
      return {
        storageKey: "likedProducts",
        itemId: productId
      };
    } else if (type === "article" || (type === "auto" && articleId)) {
      return {
        storageKey: "likedArticles", 
        itemId: articleId
      };
    }
    throw new Error("請提供 productId 或 articleId");
  };

  const { storageKey, itemId } = getStorageConfig();

  useEffect(() => {
    const likedItems = JSON.parse(localStorage.getItem(storageKey) || "[]");
    setIsLiked(likedItems.includes(itemId));
  }, [itemId, storageKey]);

  const toggleLike = () => {
    const liked = JSON.parse(localStorage.getItem(storageKey) || "[]");
    let updated;

    if (isLiked) {
      updated = liked.filter(id => id !== itemId);
    } else {
      updated = [...liked, itemId];
    }

    localStorage.setItem(storageKey, JSON.stringify(updated));
    setIsLiked(!isLiked);
  };

  const getIconSrc = () => {
    const baseUrl = import.meta.env?.BASE_URL || "./";
    
    if (isLiked) {
      return `${baseUrl}images/icons/icon-like.svg`;
    } else if (isHovered) {
      return `${baseUrl}images/icons/icon-like.svg`;
    } else {
      return `${baseUrl}images/icons/icon-like-default.svg`;
    }
  };

  return (
    <motion.div
      onClick={toggleLike}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={
        isLiked
          ? { scale: 0.95, rotate: [0, 0.5, 0], transition: { duration: 0.2 } }
          : { scale: 1.2, rotate: [0, -10, 0, 10, 0], transition: { duration: 0.4 } }
      }
      className={className}
      style={{ width: 40, height: 40, cursor: "pointer", ...style }}
    >
      <img src={getIconSrc()} alt="收藏" />
    </motion.div>
  );
}
