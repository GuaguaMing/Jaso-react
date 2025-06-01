import React from 'react';

export default function GuidesTab() {
  return (
    <div className="tab-content" id="guides">
      <div className="collect-articles">
        {[1, 2, 3].map((_, index) => (
          <div className="article-card" key={index}>
            <div className="article-thumbnail">
              <img src="./assets/img/A-card.svg" alt="文章封面" />
              <button className="like-btn" aria-label="收藏">
                <img
                  src="./icons/img/j_icon_likegray.svg"
                  className="default"
                  alt="收藏"
                />
                <img
                  src="./icons/img/j_icon_like.svg"
                  className="hover"
                  alt="已收藏"
                />
              </button>
            </div>
            <div className="article-info">
              <h3 className="article-title">
                挑選素食保健品前你必須知道的五件事
              </h3>
              <div className="article-meta">
                <span className="date">July 23,2024</span>
                <span className="author">營養師 素素兒</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}