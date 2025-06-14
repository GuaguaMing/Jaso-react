import React, { useState, useEffect } from "react";
import styles from "../../scss/pages/article/article.module.scss";
import { Link, useNavigate } from "react-router-dom";
import LikeButton from "../1components/LikeButton"; 





export default function AppArticle() {
      const navigate = useNavigate();
      const [showMore, setShowMore] = useState(false); 
          const [showBackToTop, setShowBackToTop] = useState(false);
                    useEffect(() => {
                
                        const handleScroll = () => {
                            setShowBackToTop(window.scrollY > 300);
                        };
                
                        window.addEventListener("scroll", handleScroll);
                        return () => window.removeEventListener("scroll", handleScroll);
                    }, []);

  return (
    <>
      <main className={styles.articlePage}>
  <section className={styles.searchSection}>
    <h1>search</h1>
    <h3>素食知識+</h3>
    <div className={styles.hashtag}>
      <span className={styles.tags}>新手必看</span>
      <span className={styles.tags}>素食原則</span>
      <span className={styles.tags}>營養攝取</span>
      <span className={styles.tags}>蛋白質</span>
      <span className={styles.tags}>維生素B12</span>
      <span className={styles.tags}>飲食習慣</span>
    </div>

    <div className={styles.searchBar}>
      <input type="text" placeholder="請輸入關鍵字" />
      <img src="./images/icons/icon_search.svg" alt="search" />
    </div>
  </section>

  <section className={styles.cardSection}>
    <div className={styles.column}>
      <div className={styles.cardOutline}>
        <div className={styles.card}>
        <div className={styles.like}>
        <LikeButton articleId="article1"/>
        </div>

        </div>
        <p>挑選素食保健品前你必須知道的五件事</p>
        <div className={styles.aDetail}>
        <span>June 20,2025</span><p>營養師 素芸</p>
        </div>
      </div>

      <div className={styles.cardOutline}>
        <div className={styles.card}>
        <div className={styles.like}>
        <LikeButton articleId="article2"/>
        </div>
        </div>
        <p>新手素食者最常缺的營養素，你補對了嗎？</p>
        <div className={styles.aDetail}>
        <span>June 13,2025</span><p>營養師 王昱呈</p>
        </div>
      </div>

      <div className={styles.cardOutline}  onClick={() => navigate('/article3')}>
        <div className={styles.card}>
          {/* <span className={styles.tags}>維生素B12</span> */}
          <div className={styles.like}>
        <LikeButton articleId="article3"/>
        </div>
        </div>
        <p>你吃對了嗎？六大類素食者食物分類與功能解析</p>
        <div className={styles.aDetail}>
        <span>June 6,2025</span><p>營養師 素素兒</p>
        </div>
      </div>
    </div>

    <div className={styles.column}>
      <div className={styles.cardOutline}>
        <div className={styles.card}>
          {/* <span className={styles.tags}>蛋白質</span> */}
          <div className={styles.like}>
        <LikeButton articleId="article4"/>
        </div>
        </div>
        <p>植物奶百百種，挑出真正適合你的那一款！</p>
        <div className={styles.aDetail}>
        <span>May 30,2025</span><p>營養師 素玲</p>
        </div>
      </div>

      <div className={styles.cardOutline}>
        <div className={styles.card}>
        <div className={styles.like}>
        <LikeButton articleId="article5"/>
        </div>
        </div>
        <p>上班族常疲勞、腸胃差？素食補對這些，精神體力不卡關！</p>
        <div className={styles.aDetail}>
        <span>May 23,2025</span><p>營養師 得來素</p>
        </div>
      </div>

      <div className={styles.cardOutline}>
        <div className={styles.card}>
        <div className={styles.like}>
        <LikeButton articleId="article6"/>
        </div>
        </div>
        <p>經期痛、貧血、掉髮？全素女性必備五大營養素</p>
        <div className={styles.aDetail}>
        <span>May 16,2025</span><p>營養師 素勾以</p>
        </div>
      </div>
    </div> 
    {showMore && (
    <div className={styles.cardMore}>
    <div className={styles.column}>
      <div className={styles.cardOutline}>
        <div className={styles.card}>
          {/* <span className={styles.tags}>蛋白質</span> */}
          <div className={styles.like}>
        <LikeButton articleId="article4"/>
        </div>
        </div>
        <p>植物奶百百種，挑出真正適合你的那一款！</p>
        <div className={styles.aDetail}>
        <span>May 30,2025</span><p>營養師 素玲</p>
        </div>
      </div>

      <div className={styles.cardOutline}>
        <div className={styles.card}>
        <div className={styles.like}>
        <LikeButton articleId="article5"/>
        </div>
        </div>
        <p>上班族常疲勞、腸胃差？素食補對這些，精神體力不卡關！</p>
        <div className={styles.aDetail}>
        <span>May 23,2025</span><p>營養師 得來素</p>
        </div>
      </div>

      <div className={styles.cardOutline}>
        <div className={styles.card}>
        <div className={styles.like}>
        <LikeButton articleId="article6"/>
        </div>
        </div>
        <p>經期痛、貧血、掉髮？全素女性必備五大營養素</p>
        <div className={styles.aDetail}>
        <span>May 16,2025</span><p>營養師 素勾以</p>
        </div>
      </div>
    </div> 
    <div className={styles.loadMore}>
    <p>SEE MORE</p>
      <a href="#" className={`${styles.less} ${showBackToTop ? styles.show : ""}`}>
        <img src="./images/plus.svg" alt="plus" />
      </a>
      </div>
      </div>
  )}
    
    {!showMore && (
           <div className={styles.loadMore}>
    <p>SEE MORE</p>
      <div className={styles.plus}
      onClick={() => setShowMore(true)}>
        <img src="./images/plus.svg" alt="plus" />
      </div>
      </div>
      )}
      
 
  </section>


</main>
{/* <Footer /> */}
    </>
  );
}
