import React from "react";
import '../../css/style.min.css';
import '../main.css';
export default function MemberCenter() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (tab) => setActiveTab(tab);
    return (
        <>
            <Navbar />
            <div style={{ height: "80px" }} />
            <section className={styles.tabBar}>
                {["profile", "points", "guides", "orders", "favorites"].map((tab) => (
                    <button
                        key={tab}
                        className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ""}`}
                        onClick={() => handleTabChange(tab)}
                    >
                        {{
                            profile: "個人資料",
                            points: "會員點數",
                            guides: "文章收藏",
                            orders: "訂單紀錄",
                            favorites: "素購收藏"
                        }[tab]}
                    </button>
                ))}
            </section>

            {activeTab === "profile" && <ProfileSection />}
            {activeTab === "points" && <PointsSection />}
            {activeTab === "guides" && <GuidesSection />}
            {activeTab === "orders" && <OrdersSection />}
            {activeTab === "favorites" && <FavoritesSection />}

            <Footer />
        </>
    )
}
