import React from 'react';

export default function OrdersTab() {
  return (
    <div className="tab-content" id="orders">
      <div className="order-section">
        <div className="order-table-wrapper">
          <table className="order-table">
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
                    <button className="order-btn">
                      <a href="order.html">查詢</a>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="order-note">
          <span>＊ 最多顯示3個月內點數資訊</span>
          <a href="#" className="order-more">
            <span className="text">MORE</span>
            <span className="arrow">&gt;</span>
          </a>
        </div>
      </div>
    </div>
  );
}