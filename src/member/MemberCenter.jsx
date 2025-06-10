import React, { useState, useEffect } from "react";

import TabBar from "./AppTab.jsx";
import ProfileSection from "./ProfileTab.jsx";
import PointsSection from "./PointTab.jsx";
import GuidesSection from "./GuidesTab.jsx";
import OrdersSection from "./OrderTab.jsx";
import FavoritesSection from "./FavoritesTab.jsx";

export default function MemberCenter() {
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const nav = document.querySelector(".nav-hidden");
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100) {
        if (scrollTop < lastScrollTop) {
          nav.style.top = "20px";
          nav.style.opacity = "1";
        } else {
          nav.style.top = "-100px";
          nav.style.opacity = "0";
        }
      } else {
        nav.style.top = "-100px";
        nav.style.opacity = "0";
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div style={{ height: "80px" }} />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "profile" && <ProfileSection />}
      {activeTab === "points" && <PointsSection />}
      {activeTab === "guides" && <GuidesSection />}
      {activeTab === "orders" && <OrdersSection />}
      {activeTab === "favorites" && <FavoritesSection />}

    </>
  );
}