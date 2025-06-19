import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from '../../scss/pages/member/MemberCenter.module.scss'
export default function OrdersTab() {
  return (
    <div className={styles.tabContent} id="orders">
      <div className={styles.orderSection}>
        <div className={styles.orderTableWrapper}>
          <table className={styles.orderTable}>
            <thead>
              <tr>
                <th>訂單號碼</th>
                <th>定期購入</th>
                <th>訂單日期</th>
                <th>合計</th>
                <th>訂單狀態</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[1, 2].map((_, index) => (
                <tr key={index}>
                  <td>0001223350</td>
                  <td>12期</td>
                  <td>2025.04.18</td>
                  <td>$2,200</td>
                  <td>已付款</td>
                  <td>
                    <button className={styles.orderBtn}>
                      <Link to="/order">
                        <a>查詢</a>
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.orderNote}>
          <span>＊ 最多顯示3個月內點數資訊</span>
          <Link to="/order">
            <a href="#" className={styles.orderMore}>
              <span className={styles.text}>MORE</span>
              <span className={styles.arrow}>&gt;</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}