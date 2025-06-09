import React, { useState, useEffect } from "react";
import styles from "../../scss/pages/article/article.module.scss";
import { useNavigate } from "react-router-dom";
import Footer from "../1components/Footer";


export default function AppArticle() {
  return (
    <>
      {/* <NavbarHidden /> */}
      <main className={styles.articlePage}>
  <section className={styles.searchSection}>
    <h1>search</h1>
    <h3>素食知識+</h3>
    {/* <div className={styles.hashtag}>
      <span className={styles.tags}>新手必看</span>
      <span className={styles.tags}>素食原則</span>
      <span className={styles.tags}>營養攝取</span>
      <span className={styles.tags}>蛋白質</span>
      <span className={styles.tags}>維生素B12</span>
      <span className={styles.tags}>飲食習慣</span>
    </div> */}

    <div className={styles.searchBar}>
      <input type="text" placeholder="請輸入關鍵字" />
      <img src="./images/icons/icon_search.svg" alt="search" />
    </div>
  </section>

  <section className={styles.cardSection}>
    <div className={styles.column}>
      <div className={styles.cardOutline}>
        <div className={styles.card}>
          {/* <span className={styles.tags}>素食原則</span> */}
          <div className={styles.like}>
            <img src="./images/icons/icon-like-default.svg" alt="like" style={{ width: 40, height: 40 }} />
          </div>
        </div>
        <p>挑選素食保健品前你必須知道的五件事</p>
      </div>

      <div className={styles.cardOutline}>
        <div className={styles.card}>
          {/* <span className={styles.tags}>新手必看</span> */}
          <div className={styles.like}>
            <img src="./images/icons/icon-like-default.svg" alt="like" style={{ width: 40, height: 40 }} />
          </div>
        </div>
        <p>新手素食者最常缺的營養素，你補對了嗎？</p>
      </div>

      <div className={styles.cardOutline}>
        <div className={styles.card}>
          {/* <span className={styles.tags}>維生素B12</span> */}
          <div className={styles.like}>
            <img src="./images/icons/icon-like-default.svg" alt="like" style={{ width: 40, height: 40 }} />
          </div>
        </div>
        <p>你吃對了嗎？六大類素食者食物分類與功能解析</p>
      </div>
    </div>

    <div className={styles.column}>
      <div className={styles.cardOutline}>
        <div className={styles.card}>
          {/* <span className={styles.tags}>蛋白質</span> */}
          <div className={styles.like}>
            <img src="./images/icons/icon-like-default.svg" alt="like" style={{ width: 40, height: 40 }} />
          </div>
        </div>
        <p>植物奶百百種，哪一款最適合你？</p>
      </div>

      <div className={styles.cardOutline}>
        <div className={styles.card}>
          {/* <span className={styles.tags}>飲食習慣</span> */}
          <div className={styles.like}>
            <img src="./images/icons/icon-like-default.svg" alt="like" style={{ width: 40, height: 40 }} />
          </div>
        </div>
        <p>上班族常疲勞、腸胃差？素食補對這些，精神體力不卡關！</p>
      </div>

      <div className={styles.cardOutline}>
        <div className={styles.card}>
          {/* <span className={styles.tags}>營養攝取</span> */}
          <div className={styles.like}>
            <img src="./images/icons/icon-like-default.svg" alt="like" style={{ width: 40, height: 40 }} />
          </div>
        </div>
        <p>經期痛、貧血、掉髮？全素女性必備五大營養素</p>
      </div>
    </div> 
     <div className={styles.loadMore}>
    <p>SEE MORE</p>
    <div className={styles.plus}>
      <img src="./images/plus.svg" alt="plus" />
    </div>
  </div>
  </section>


</main>
{/* <Footer /> */}
    </>
  );
}