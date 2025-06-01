import React from 'react';

export default function TabBar() {
  return (
    <section className="tab-bar">
      <button className="tab-btn active" data-target="profile">個人資料</button>
      <button className="tab-btn" data-target="points">會員點數</button>
      <button className="tab-btn" data-target="guides">文章收藏</button>
      <button className="tab-btn" data-target="orders">訂單紀錄</button>
      <button className="tab-btn" data-target="favorites">素購收藏</button>
    </section>
  );
}