import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../scss/pages/article/article.module.scss';
import LikeButton from '../1components/LikeButton';

const allArticles = [
  {
    id: "article1",
    title: "挑選素食保健品前你必須知道的五件事",
    date: "June 20,2025",
    author: "營養師 素芸",
    route: "/article1",
    backgroundImage: "./images/logo.svg",
    tags: ["素食原則"]
  },
  {
    id: "article2",
    title: "新手素食者最常缺的營養素，你補對了嗎？",
    date: "June 13,2025",
    author: "營養師 王昱呈",
    route: "/article2",
    backgroundImage: "./images/logo.svg",
    tags: ["新手必看"]
  },
  {
    id: "article3",
    title: "你吃對了嗎？六大類素食者食物分類與功能",
    date: "June 6,2025",
    author: "營養師 素素兒",
    route: "/article3",
    backgroundImage: "./images/logo.svg",
    tags: ["營養攝取"]
  },
  {
    id: "article4",
    title: "植物奶百百種，挑出真正適合你的那一款！",
    date: "May 30,2025",
    author: "營養師 素玲",
    route: "/article4",
    backgroundImage: "./images/logo.svg",
    tags: ["蛋白質"]
  },
  {
    id: "article5",
    title: "上班族補對這些，精神體力不卡關！",
    date: "May 23,2025",
    author: "營養師 得來素",
    route: "/article5",
    backgroundImage: "./images/logo.svg",
    tags: ["飲食習慣"]
  },
  {
    id: "article6",
    title: "經痛、貧血、掉髮？女性必備五大營養素",
    date: "May 16,2025",
    author: "營養師 素勾以",
    route: "/article6",
    backgroundImage: "./images/logo.svg",
    tags: ["維生素B12"]
  }
];

export default function GuidesTab() {
  const navigate = useNavigate();
  const [likedArticles, setLikedArticles] = useState([]);

  useEffect(() => {
    const likedIds = JSON.parse(localStorage.getItem("likedArticles") || "[]");
    const liked = allArticles.filter(article => likedIds.includes(article.id));
    setLikedArticles(liked);
  }, []);

  return (
    <main className={styles.articlePage}>
      <section className={styles.cnppSection}>
        {likedArticles.length === 0 ? (
          <div className={styles.noResults}>
            <p>你還沒有收藏任何文章唷！</p>
          </div>
        ) : (
          <div className={styles.column}>
            {likedArticles.map((article, index) => (
              <div className={styles.cardOutline} key={article.id}>
                <div
                  className={styles.card}
                  style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}${article.backgroundImage.replace("./", "")})`,
                    backgroundSize: "120px",
                    backgroundPosition: "center",
                  }}
                >
                  <div className={styles.like}>
                    <LikeButton articleId={article.id} />
                  </div>
                </div>
                <p
                  onClick={() => navigate(article.route)}
                  style={{ cursor: "pointer" }}
                >
                  {article.title}
                </p>
                <div className={styles.aDetail}>
                  <span>{article.date}</span>
                  <span className={styles.author}>{article.author}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
