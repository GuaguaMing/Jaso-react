import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../../scss/pages/member/MemberCenter.module.scss'

export default function ProfileTab() {
  const [formData, setFormData] = useState({
    gender: '',
    birth: '',
    email: '',
    phone: '',
    address: ''
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');

    const saved = localStorage.getItem('profileData');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing saved profile data:', e);
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      localStorage.setItem('profileData', JSON.stringify(updated));
      return updated;
    });
  };

  const handleCancel = () => {
    const cleared = {
      gender: '',
      birth: '',
      email: '',
      phone: '',
      address: ''
    };
    setFormData(cleared);
    localStorage.setItem('profileData', JSON.stringify(cleared));
  };

  return (
    <>
      <div className={styles.tabContent} id="profile">
        <div className={styles.helloWrapper}>
          <span className={styles.greeting}>Hello！</span>
        </div>
        <div className={styles.profileContainer}>
          {/* 左上：會員資訊區塊 */}
          <div className={styles.profileLeftTop}>
            <div className={styles.userNameRank}>
              <div className={styles.iconNameRow}>
                <div className={styles.leftGroup}>
                  <img
                    src={`${import.meta.env.BASE_URL}images/icons/j_member_normal.svg`}
                    alt="member"
                    className={styles.icon}
                  />
                  <p className={styles.userName}>王小明</p>
                  <div className={styles.userRankBadge}>一般會員</div>
                </div>
                <button className={styles.logoutButton} onClick={handleLogout}>登出</button>
              </div>
            </div>
            <div className={styles.rankRuleBox}>
              <div className={styles.rankRuleItem}>
                <img src={`${import.meta.env.BASE_URL}images/icons/btn-rank-copper.svg`} alt="銅級會員" className={styles.rankIcon} />
                <div className={styles.rankInlineText}>
                  <span className={styles.rankTitle}>升級至銅級會員</span>
                  <span className={styles.divider}>｜</span>
                  <span className={styles.rankCondition}>訂閱制滿 1 個月或消費滿 NT$3500 即可升級</span>
                </div>
              </div>
              <a onClick={() => setShowModal(true)} className={styles.rankLink}>查看所有會員等級規則</a>
            </div>
            <p className={styles.userBonus}>．新加入會員享會員禮金100元，無使用期限！</p>
            <p className={styles.userBonus}>．訂閱制會員，商品一律7折優惠</p>
          </div>

          {/* 右上：12個月累計消費 */}
          <div className={styles.profileRightTop}>
            <div className={styles.summaryHeader}>
              <img src={`${import.meta.env.BASE_URL}images/icons/icon_gift.svg`} alt="gift" className={styles.giftIcon} />
              <span className={styles.summaryTitle}>12 個月累計消費</span>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progressInfoRow}>
                <span className={styles.currentAmount}>NT$2000</span>
                <span className={styles.upgradeInfo}>差 NT$5000 升級</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: '28%' }}></div>
              </div>
            </div>
          </div>

          {/* 左下：個人資料 */}
          <div className={styles.profileLeftBottom}>
            <div className={styles.genderRow}>
              <span className={styles.shippingTitle}>生理性別</span>
              <label><input type="checkbox" name="gender" value="男" checked={formData.gender === '男'} onChange={handleChange} /> 男</label>
              <label><input type="checkbox" name="gender" value="女" checked={formData.gender === '女'} onChange={handleChange} /> 女</label>
              <label><input type="checkbox" name="gender" value="不透露" checked={formData.gender === '不透露'} onChange={handleChange} /> 不透露</label>
            </div>
            <div className={styles.inputRow}>
              <span className={styles.inputLabel}>出生年月日</span>
              <input type="date" name="birth" value={formData.birth} onChange={handleChange} className={styles.roundedInput} />
            </div>
            <div className={styles.inputRow}>
              <span className={styles.inputLabel}>電子信箱</span>
              <input type="email" name="email" placeholder="請輸入" value={formData.email} onChange={handleChange} className={styles.roundedInput} />
            </div>
          </div>

          {/* 右下：送貨與付款 */}
          <div className={styles.profileRightBottom}>
            <div className={styles.shippingHeader}>
              <img src={`${import.meta.env.BASE_URL}images/icons/icon-shipping.svg`} alt="truck" className={styles.icon} />
              <span className={styles.shippingTitle}>送貨與付款</span>
            </div>
            <div className={styles.inputRow}>
              <span className={styles.inputLabel}>聯絡電話</span>
              <input type="text" name="phone" placeholder="請輸入" value={formData.phone} onChange={handleChange} className={styles.roundedInput} />
            </div>
            <div className={styles.inputRow}>
              <span className={styles.inputLabel}>儲存地址</span>
              <input type="text" name="address" placeholder="請輸入" value={formData.address} onChange={handleChange} className={styles.roundedInput} />
            </div>
          </div>

          {/* profile-container 下方的按鈕區塊 */}
          <div className={styles.editButtonWrapper}>
            <button className={styles.cancelButton} onClick={handleCancel} >取消</button>
            <button className={styles.editButton}>更改資料</button>
          </div>
        </div>
      </div >

      {/* 彈窗區塊 */}
      {
        showModal && (
          <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={() => setShowModal(false)}>X</button>
              <img src={`${import.meta.env.BASE_URL}images/rankPage.svg`} alt="會員等級說明" />
            </div>
          </div>
        )
      }
    </>
  );
}
