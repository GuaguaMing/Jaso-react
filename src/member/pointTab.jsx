import React from 'react';

export default function PointsTab() {
  return (
    <div className="tab-content" id="points">
      <div className="points-section">
        <div className="points-header">
          <div className="points-icon">J</div>
          <h2 className="points-title">點數紀錄</h2>
        </div>

        <div className="points-summary">
          <div className="points-info">
            <p className="points-label">現有總點數</p>
            <p className="points-total">
              96<span>點</span>
            </p>
          </div>
          {/* <button className="points-exchange-btn">點數兌換</button> */}
        </div>

        <table className="points-table">
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
              <td>加入會員 - 新人禮金</td>
              <td>100</td>
              <td>永久到期</td>
              <td>100</td>
            </tr>
            <tr>
              <td>2025.04.18</td>
              <td>訂單0001223350</td>
              <td>100</td>
              <td>永久到期</td>
              <td className="negative">-4</td>
            </tr>
            <tr>
              <td>2025.04.18</td>
              <td>訂單0001223350</td>
              <td>100</td>
              <td>永久到期</td>
              <td className="negative">-4</td>
            </tr>
          </tbody>
        </table>

        <p className="points-note">＊ 最多顯示 3 個月內點數資訊</p>
      </div>
    </div>
  );
}