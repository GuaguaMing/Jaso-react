import React from "react";
import '../../css/style.min.css';
import '../main.css';
export default function AppLogin() {
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

    return (
        <>
            <section className={styles.loginSection}>
                <div className={styles.loginHeader}>
                    <h1>Hello!</h1>
                    <div className={styles.faceWrapper}>
                        <img src="/icons/img/Greenfacelogo.svg" alt="Login Icon" className={styles.loginIcon} />
                        <div className={`${styles.eyeWrapper} ${styles.eyeLeft}`}>
                            <img src="/icons/img/eye.svg" className={styles.rotatingEye} />
                        </div>
                        <div className={`${styles.eyeWrapper} ${styles.eyeRight}`}>
                            <img src="/icons/img/eye.svg" className={styles.rotatingEye} />
                        </div>
                    </div>

                    <form className={styles.loginForm}>
                        <div className={styles.inputRow}>
                            <label htmlFor="account" className={styles.inputLabel}>帳號登入</label>
                            <input type="text" id="account" placeholder="email 或帳戶" className={styles.roundedInput} />
                        </div>
                        <div className={`${styles.inputRow} ${styles.passwordRow}`}>
                            <label htmlFor="password" className={styles.inputLabel}>密碼</label>
                            <input type="password" id="password" placeholder="半形英文+數字8碼" className={styles.roundedInput} />
                            <p className={styles.forgotPassword}><a href="#">忘記密碼嗎？</a></p>
                        </div>

                        <div className={styles.loginActions}>
                            <button type="submit" className={styles.primary}><a href="member-profile.html">登入</a></button>
                        </div>

                        <p className={styles.signupTip}>
                            你還不素會員？<a href="signup.html" className={styles.signupLink}>馬上註冊！</a>
                        </p>
                    </form>
                </div>
            </section>
        </>
    )
}