import React from 'react';
import styles from '../../scss/pages/member/MemberCenter.module.scss'

export default function GuidesTab() {
  return (
    <div className={styles.tabContent} id="guides">
      <div className={styles.collectArticles}>
        {[1, 2, 3].map((_, index) => (
          <div className={styles.articleCard} key={index}>
            <div className={styles.articleThumbnail}>
              <img src={`${import.meta.env.BASE_URL}images/A-card.svg`} alt="文章封面" />
              <button className={styles.likeBtn} aria-label="收藏">
                <img
                  src={`${import.meta.env.BASE_URL}./images/icons/btn-like-default.svg`}
                  className={styles.default}
                  alt="收藏"
                />
                <img
                  src={`${import.meta.env.BASE_URL}./images/icons/btn-like-hover.svg`}
                  className={styles.hover}
                  alt="已收藏"
                />
              </button>
            </div>
            <div className={styles.articleInfo}>
              <h3 className={styles.articleTitle}>
                挑選素食保健品前你必須知道的五件事
              </h3>
              <div className={styles.articleMeta}>
                <span className={styles.date}>July 23,2024</span>
                <span className={styles.author}>營養師 素素兒</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}