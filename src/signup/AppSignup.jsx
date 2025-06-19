import React from "react";
import styles from "../../scss/pages/member/memberCenter.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AppSignup() {

    return (
        <>
            <section className={styles.signupSection}>
                <div className={styles.signupTitleWrapper}>
                    <img
                        src={`${import.meta.env.BASE_URL}icons/img/icon-face.svg`}
                        alt="icon left"
                        className={styles.iconLeft}
                    />
                    <h1>Join us!</h1>
                    <img
                        src={`${import.meta.env.BASE_URL}icons/img/plus_icon.svg`}
                        alt="icon right"
                        className={styles.iconRight}
                    />
                </div>

                <p className={styles.signupSubtitle}>加素歡迎你！加入會員領取新人購物金 $100</p>

                <form className={styles.signupForm}>
                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel} htmlFor="username">用戶名</label>
                        <input id="username" type="text" placeholder="用戶名" className={styles.roundedInput} />
                    </div>

                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel} htmlFor="email">Email 註冊</label>
                        <input id="email" type="email" placeholder="example@gmail.com" className={styles.roundedInput} />
                    </div>

                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel} htmlFor="password">密碼</label>
                        <input id="password" type="text" placeholder="password" className={styles.roundedInput} />
                    </div>

                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel} htmlFor="date">出生年月日</label>
                        <input id="date" type="date" placeholder="西元年/月/日" className={styles.roundedInput} />
                    </div>

                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel} htmlFor="phoneNumber">手機號碼</label>
                        <input id="phoneNumber" type="number" placeholder="ex.0987654321" className={styles.roundedInput} />
                    </div>

                    <div className={styles.inputRow}>
                        <label className={styles.inputLabel} htmlFor="address">聯絡地址</label>
                        <input id="address" type="text" placeholder="address" className={styles.roundedInput} />
                    </div>

                    <div className={styles.signupLoginTip}>
                        你素會員？
                        <Link to="/login">
                            <button className={styles.loginLink}>登入</button>
                        </Link>
                    </div>

                    <button type="submit" className={styles.signupButton}>立即加入</button>
                </form>
            </section>
        </>
    )
}