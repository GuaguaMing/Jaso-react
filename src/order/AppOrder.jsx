import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from '../../scss/pages/member/MemberCenter.module.scss'



export default function AppOrder() {
    return (

        
        <section className={styles.orderDetails}>
            <div className={styles.orderItems}>
                <div className={styles.orderHeader}>
                    <div>商品資料</div>
                    <div>優惠</div>
                    <div>單件價格</div>
                    <div>數量</div>
                    <div>小計</div>
                </div>

                {[{
                    img: 'jaso_Ca.png',
                    name: '鈣心定植物鈣',
                    subtitle: '藻鈣 + D3 雙效配方',
                    tags: ['手腳冰冷'],
                    price: 'NT$365',
                    original: 'NT$580'
                }, {
                    img: 'jaso_Omg.png',
                    name: 'OMEGA3 植物膠囊',
                    subtitle: '藻鈣 + D3 雙效配方',
                    tags: ['手腳冰冷'],
                    price: 'NT$365',
                    original: 'NT$580'
                }].map((item, index) => (
                    <div className={styles.orderRow} key={index}>
                        <div className={styles.productInfo}>
                            <img src={`${import.meta.env.BASE_URL}images/Pd/Ca-default.svg`} alt="商品圖" />
                            {/* <img src={`${import.meta.env.BASE_URL}images/Pd/Omg3-default.svg`} alt="商品圖" /> */}

                            <div>
                                <div className={styles.orderId}>訂單編號：0001223350</div>
                                <div className={styles.productName}>{item.name}</div>
                                <div className={styles.productSubtitle}>{item.subtitle}</div>
                                <div className={styles.productTags}>
                                    {item.tags.map((tag, idx) => (
                                        <span className={styles.tag} key={idx}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.badges} ${styles.cellAlign}`}>
                            <span className={styles.badgeGreen}>定期購 30% off</span>
                            <span className={styles.badgeOrange}>檔期活動 10% off</span>
                        </div>
                        <div className={styles.cellAlign}>
                            <div>{item.price}</div>
                            <div className={styles.originPrice}>{item.original}</div>
                        </div>
                        <div className={styles.cellAlign}>1</div>
                        <div className={styles.cellAlign}>{item.price}</div>
                    </div>
                ))}

                <div className={styles.totals}>
                    <div className={styles.totalsRow}>
                        <span className={styles.label}>小計:</span>
                        <span className={styles.value}>NT$730</span>
                    </div>
                    <div className={styles.totalsRow}>
                        <span className={styles.label}>運費:</span>
                        <span className={styles.value}>NT$50</span>
                    </div>
                    <div className={`${styles.totalsRow} ${styles.totalAmount}`}>
                        <span className={styles.label}>合計:</span>
                        <span className={styles.value}>NT$780</span>
                    </div>
                    <div className={`${styles.totalsRow} ${styles.pointsEarned}`}>
                        <span className={styles.label}>累計點數:</span>
                        <span className={styles.value}><span className={styles.pointsIcon}>J</span> +73</span>
                    </div>
                </div>
            </div>

            <div className={styles.infoGrid}>
                <div className={styles.infoBox1}>
                    <h3><img src="./images/icons/icon-list.svg" alt="訂單資訊" /> 訂單資訊</h3>
                    <p>訂單編號：0001223350</p>
                    <p>Email：jaso***@gmail.com</p>
                    <p>時間：2025-06-21 03:45PM</p>
                    <p>狀態：已完成</p>
                    <p>完成時間：2025-06-21 06:30PM</p>
                </div>
                <div className={styles.infoBox1}>
                    <h3><img src="./images/icons/j_member_normal.svg" alt="顧客資訊" /> 顧客資訊</h3>
                    <p>姓名：阿誠</p>
                    <p>電話：0900***456</p>
                </div>
                <div className={styles.infoBox}>
                    <h3><img src="./images/icons/icon-shipping.svg" alt="配送資訊" /> 配送資訊</h3>
                    <p>預計配達：2025.06.22–29</p>
                    <p>地址：國立臺北商業大學承德樓 6 樓 603 教室</p>
                    <p>聯絡電話：0912-345-678</p>
                    <p>運費：NT$60</p>
                </div>
                <div className={styles.infoBox}>
                    <h3><img src="./images/icons/icon-card.svg" alt="付款資訊" /> 付款資訊</h3>
                    <p>付款時間：2025.06.21 03:50PM</p>
                    <p>付款方式：信用卡後四碼 0815</p>
                    <p>付款狀態：已付款</p>
                </div>
            </div>
        </section>
    );
}
