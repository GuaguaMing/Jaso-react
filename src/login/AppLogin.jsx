import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../1components/Navbar";
import styles from "../../scss/pages/login/appLogin.module.scss";
export default function AppLogin() {
    const navigate = useNavigate();
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const eyes = document.querySelectorAll(`.${styles.rotatingEye}`);
        const previousAngles = new Map();

        const handleMouseMove = (e) => {
            eyes.forEach((eye) => {
                const rect = eye.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const dx = e.clientX - centerX;
                const dy = e.clientY - centerY;

                let angle = Math.atan2(dy, dx) * (180 / Math.PI);
                let prev = previousAngles.get(eye) || 0;

                let delta = angle - prev;
                if (delta > 180) delta -= 360;
                if (delta < -180) delta += 360;

                const smoothAngle = prev + delta * 0.2;
                previousAngles.set(eye, smoothAngle);

                eye.style.transform = `rotate(${smoothAngle}deg)`;
            });
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();

        // 模擬登入（這裡你可以改成 fetch 發送 API）
        if (account && password) {
            localStorage.setItem("token", "fake-token");
            localStorage.setItem("userName", account);
            window.location.href = "/"; // 登入成功導回首頁
        } else {
            alert("請輸入帳號與密碼");
        }
    };

    return (
        <>
            {/* <Navbar /> */}
            <section className={styles.loginSection}>
                <div className={styles.loginHeader}>
                    <h1>Hello!</h1>
                    <div className={styles.faceWrapper}>
                        <img src="./images/icons/Greenfacelogo.svg" alt="Login Icon" className={styles.loginIcon} />
                        <div className={`${styles.eyeWrapper} ${styles.eyeLeft}`}>
                            <img src="./images/icons/eye.svg" className={styles.rotatingEye} />
                        </div>
                        <div className={`${styles.eyeWrapper} ${styles.eyeRight}`}>
                            <img src="./images/icons/eye.svg" className={styles.rotatingEye} />
                        </div>
                    </div>

                    <form className={styles.loginForm} onSubmit={handleSubmit}>
                        <div className={styles.inputRow}>
                            <label htmlFor="account" className={styles.inputLabel}>帳號登入</label>
                            <input
                                type="text"
                                id="account"
                                placeholder="email 或帳戶"
                                className={styles.roundedInput}
                                value={account}
                                onChange={(e) => setAccount(e.target.value)}
                            />
                        </div>
                        <div className={`${styles.inputRow} ${styles.passwordRow}`}>
                            <label htmlFor="password" className={styles.inputLabel}>密碼</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="半形英文+數字8碼"
                                className={styles.roundedInput}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p className={styles.forgotPassword}><a href="#">忘記密碼嗎？</a></p>
                        </div>

                        <div className={styles.loginActions}>
                            <button type="submit" className={`${styles.btnBrand} ${styles.primary}`} onClick={()=>navigate('/')}>登入</button>
                        </div>

                        <p className={styles.signupTip}>
                            你還不素會員？<button onClick={()=>navigate('/signup')} className={styles.signupLink}>馬上註冊！</button>
                        </p>
                    </form>
                </div>
            </section>
        </>
    )
}