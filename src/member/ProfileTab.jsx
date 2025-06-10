import React from 'react';

export default function ProfileTab() {
  return (
    <div className="tab-content active" id="profile">
      <div className="profile-container">
        {/* 左上：會員資訊區塊 */}
        <div className="profile-left-top">
          <div className="user-name-rank">
            <img src="./icons/img/j_member_normal.svg" alt="member" className="icon" />
            <p className="user-name">王小明</p>
            <div className="user-rank-badge">一般會員</div>
          </div>
          <div className="rank-rule-box">
            <div className="rank-rule-item">
              <img src="./icons/img/btn-rank-copper.svg" alt="銅級會員" className="rank-icon" />
              <div className="rank-inline-text">
                <span className="rank-title">升級至銅級會員</span>
                <span className="divider">｜</span>
                <span className="rank-condition">訂閱制滿 1 個月或消費滿 NT$3500 即可升級</span>
              </div>
            </div>
            <a href="#" className="rank-link">查看所有會員等級規則</a>
          </div>
          <p className="user-bonus">．新加入會員享會員禮金100元，無使用期限！</p>
          <p className="user-bonus">．訂閱制會員，商品一律7折優惠</p>
        </div>

        {/* 右上：12個月累計消費 */}
        <div className="profile-right-top">
          <div className="summary-header">
            <img src="./icons/img/j_icon_gift.svg" alt="gift" className="gift-icon" />
            <span className="summary-title">12 個月累計消費</span>
          </div>
          <div className="progress-container">
            <div className="progress-info-row">
              <span className="current-amount">NT$2000</span>
              <span className="upgrade-info">差 NT$5000 升級</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '28%' }}></div>
            </div>
          </div>
        </div>

        {/* 左下：個人資料 */}
        <div className="profile-left-bottom">
          <div className="gender-row">
            <span className="shipping-title">生理性別</span>
            <label><input type="checkbox" name="gender" /> 男</label>
            <label><input type="checkbox" name="gender" /> 女</label>
            <label><input type="checkbox" name="gender" /> 不透露</label>
          </div>
          <div className="input-row">
            <span className="input-label">出生年月日</span>
            <input type="date" className="rounded-input" />
          </div>
          <div className="input-row">
            <span className="input-label">電子信箱</span>
            <input type="email" placeholder="請輸入" className="rounded-input" />
          </div>
        </div>

        {/* 右下：送貨與付款 */}
        <div className="profile-right-bottom">
          <div className="shipping-header">
            <img src="./icons/img/j_shop_drive.svg" alt="truck" className="icon" />
            <span className="shipping-title">送貨與付款</span>
          </div>
          <div className="input-row">
            <span className="input-label">聯絡電話</span>
            <input type="text" placeholder="請輸入" className="rounded-input" />
          </div>
          <div className="input-row">
            <span className="input-label">儲存地址</span>
            <input type="text" placeholder="請輸入" className="rounded-input" />
          </div>
        </div>
      </div>

      {/* profile-container 下方的按鈕區塊 */}
      <div className="edit-button-wrapper">
        <button className="edit-button">更改資料</button>
      </div>
    </div>
  );
}
