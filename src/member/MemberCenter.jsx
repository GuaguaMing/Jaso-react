import React, { useState } from "react";
import '../../css/style.min.css';
import '../main.css';
import NavHidden from "./navHidden.jsx";
import TabBar from "./AppTab.jsx";
import ProfileSection from "./porfileTab.jsx";
import PointsSection from "./pointTab.jsx";
import GuidesSection from "./guidesTab.jsx";
import OrdersSection from "./orderTab.jsx";
import FavoritesSection from "./FavoritesTab.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "../footer/AppFooter.jsx";
import styles from "./MemberCenter.module.css";

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
      <Navbar />
      <NavHidden />
      <div style={{ height: "80px" }} />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "profile" && <ProfileSection />}
      {activeTab === "points" && <PointsSection />}
      {activeTab === "guides" && <GuidesSection />}
      {activeTab === "orders" && <OrdersSection />}
      {activeTab === "favorites" && <FavoritesSection />}

      <Footer />
    </>
  );
}