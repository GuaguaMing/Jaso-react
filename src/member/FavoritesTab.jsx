import React from 'react';
import styles from '../../scss/pages/member/MemberCenter.module.scss'

export default function FavoritesTab() {
  // 假資料範例，後續可串接 API 或 props 傳入
  const products = Array(5).fill({
    image: './shop/img/jaso-medicine_Ca.png',
    tags: ['手腳冰冷', '手腳冰冷'],
    title: '鈣心定植物鈣',
    subtitle: '藻鈣+D3雙效配方',
    desc: '骨質疏鬆症找上門？補鈣不能只靠牛奶？同時也要補維生素D！幫助吸收鈣質也幫助骨骼更...'
  });

  return (
    <div className={styles.tabContent} id="favorites">
      <div className={styles.productList}>
        {products.map((product, index) => (
          <div className={styles.productCard} key={index}>
            <div className={styles.productImageWrapper}>
              <img src={product.image} alt={`產品${index + 1}`} className={styles.productImage} />
            </div>

            <div className={styles.productMeta}>
              <div className={styles.productTags}>
                {product.tags.map((tag, i) => (
                  <span className={styles.tag} key={i}>{tag}</span>
                ))}
              </div>
              <div className={styles.productIcon}>
                <button className={styles.cartBtn} aria-label="加入購物車"></button>
                <button className={styles.likeBtn} aria-label="加入收藏"></button>
              </div>
            </div>

            <div className={styles.productTitle}>
              {product.title}
              <span className={styles.productSubtitle}>{product.subtitle}</span>
            </div>

            <div className={styles.productDesc}>{product.desc}</div>

            <a href="#" className={styles.productLink}>
              <span className={styles.arrow}>gt;</span>
              <span className={styles.text}>看完整產品內容</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
