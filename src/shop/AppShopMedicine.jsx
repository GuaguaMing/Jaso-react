import React, { useState } from "react";
import styles from '../../scss/pages/shop/shopMedincine.module.scss';

export default function AppShopMedicine() {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value) || 1);
        setQuantity(value);
    };

    const handleLikeClick = () => {
        window.location.href = './login.html';
    };

    return (
        <section className={styles.shopMedicineContainer}>
            {/* 左邊：產品圖片 */}
            <div className={styles.productLeft}>
                <img
                    src={`${import.meta.env.BASE_URL}shop/img/jaso-mock-up_bg_Ca.svg`}
                    alt="產品1"
                    className={styles.productImage}
                />
            </div>

            {/* 產品資訊 */}
            <div className={styles.productLeft}>
                <span className={styles.tag}>手腳冰冷</span>
                <h2 className={styles.shopTitle}>素食維生素B12</h2>
                <ul className={styles.featureList}>
                    <li>全素補給，絕無動物肉肉</li>
                    <li>推薦給手腳冰冷、氣虛素食者</li>
                    <li>安心來源，無多餘添加</li>
                </ul>

                {/* 圓形標籤 */}
                <ul className={styles.shopMedicineTagList}>
                    <li className={styles.shopLi}>B12 <br />純素滴劑</li>
                    <li className={styles.shopLi}>海藻<br />萃取物</li>
                    <li className={styles.shopLi}>營養<br />酵母</li>
                    <li className={styles.shopLi}>維生素C</li>
                </ul>

                {/* 食材小圖示 */}
                <ul className={styles.ingredientIcons}>
                    <li><img src={`${import.meta.env.BASE_URL}assets/img/pumpkin.svg`} width="48" alt="pumpkin" /></li>
                    <li><img src={`${import.meta.env.BASE_URL}assets/img/redlimai.svg`} width="48" alt="onion" /></li>
                    <li><img src={`${import.meta.env.BASE_URL}assets/img/zima.svg`} width="48" alt="fig" /></li>
                </ul>

                {/* 素食庫連結 */}
                <a href="#" className={styles.productMedicineLink}>
                    <span className={styles.text}>查看更多素食成分</span>
                    <span className={styles.arrow}>gt;&gt;</span>
                </a>

                {/* 價格 */}
                <div className={styles.shopPrice}>
                    <h1>NT$406</h1>
                    <div className={styles.originalPrice}>
                        <h3>NT$580</h3>
                        <p>定期購 30% off</p>
                    </div>
                </div>

                {/* 數量與購物車 */}
                <div className={styles.shopQuantity}>
                    <p>數量</p>
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                    <button className={styles.addToCart}>加入購物車</button>
                </div>

                {/* 收藏 */}
                <button
                    className={styles.shopMedicineShopBtn}
                    onClick={handleLikeClick}
                >
                    <img
                        src={`${import.meta.env.BASE_URL}icons/img/like-btn-hover.svg`}
                        width="48"
                        alt="Like Icon"
                    />
                    登入會員收藏
                </button>
            </div>
        </section>
    );
}
