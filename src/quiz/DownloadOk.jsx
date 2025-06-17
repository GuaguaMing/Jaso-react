import React from "react";
import styles from "../../scss/pages/quiz/downloadok.module.scss";


const DownloadOk = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <img className={styles.icon} src={`${import.meta.env.BASE_URL}images/icons/icon_download.svg`} alt="下載圖示" />
        
        <h2 className={styles.title}>下載完成！</h2>
        <p className={styles.text}>趕快分享給親朋好友～</p>
      </div>
    </div>
  );
};

export default DownloadOk;
