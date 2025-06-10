import React from 'react';
import styles from '../../scss/pages/member/MemberCenter.module.scss'
export default function AppTab({ activeTab, setActiveTab }) {
  const tabs = [
    { key: 'profile', label: '個人資料' },
    { key: 'points', label: '會員點數' },
    { key: 'guides', label: '文章收藏' },
    { key: 'orders', label: '訂單紀錄' },
    { key: 'favorites', label: '素購收藏' },
  ];

  return (
    <section className={styles.tabBar}>
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          className={`${styles.tabBtn} ${activeTab === key ? styles.active : ''}`}
          onClick={() => setActiveTab(key)}
          data-target={key}
        >
          {label}
        </button>
      ))}
    </section>
  );
}