import React ,{useState}from "react";
import styles from'../../scss/pages/member/MemberCenter.module.scss'
import ProfileTab from "./ProfileTab";
import PointTab from "./PointTab"
import GuidesTab from "./GuidesTab";
import OrderTab from "./OrderTab";
import FavoritesTab from "./FavoritesTab";
//廢棄jsx，刪了
export default function MemberCenter() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (tab) => setActiveTab(tab);
    return (
        <>
            <div style={{ height: "80px" }} />
            <section className={styles.tabBar}>
                {["profile", "points", "guides", "orders", "favorites"].map((tab) => (
                    <button
                        key={tab}
                        className={`${styles.tabBtn} ${activeTab === tab ? styles.tabBtn +""+styles.active : ""}`}
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

            {activeTab === "profile" && <ProfileTab />}
            {activeTab === "points" && <PointTab />}
            {activeTab === "guides" && <GuidesTab />}
            {activeTab === "orders" && <OrderTab />}
            {activeTab === "favorites" && <FavoritesTab />}

        </>
    )
}
