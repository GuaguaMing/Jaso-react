import React from 'react';
import styles from '../../scss/pages/member/MemberCenter.module.scss'

export default function PointTab() {
  return (
    <div className={styles.tabContent} id="points">
      <div className={styles.pointsSection}>
        <div className={styles.pointsHeader}>
          <div className={styles.pointsIcon}>J</div>
          <h2 className={styles.pointsTitle}>點數紀錄</h2>
        </div>

        <div className={styles.pointsSummary}>
          <div className={styles.pointsInfo}>
            <p className={styles.pointsLabel}>現有總點數</p>
            <p className={styles.pointsTotal}>
              92<span>點</span>
            </p>
          </div>
          {/* <button className={styles.pointsExchangeBtn}>點數兌換</button> */}
        </div>

        <table className={styles.pointsTable}>
          <thead>
            <tr>
              <th>日期</th>
              <th>點數更動原因</th>
              <th>點數</th>
              <th>到期日</th>
              <th>現有總點數</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025.04.18</td>
              <td>訂單0001223350</td>
              <td className={styles.negative}>-4</td>
              <td>永久到期</td>
              <td>92</td>
            </tr>
            <tr>
              <td>2025.04.18</td>
              <td>訂單0001223350</td>
              <td className={styles.negative}>-4</td>
              <td>永久到期</td>
              <td>96</td>
            </tr>
                        <tr>
              <td>2025.04.18</td>
              <td>加入會員 - 新人禮金</td>
              <td>100</td>
              <td>永久到期</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>

        <p className={styles.pointsNote}>＊ 最多顯示 3 個月內點數資訊</p>
      </div>
    </div>
  );
}