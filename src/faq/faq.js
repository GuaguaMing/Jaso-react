import { useEffect, useRef, useState } from "react";

function AppFaq() {
  const sidebarRef = useRef(null);
  const footerRef = useRef(null);
  const [sidebarStyle, setSidebarStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = sidebarRef.current;
      const footer = footerRef.current;

      if (!sidebar || !footer) return;

      const sidebarHeight = sidebar.offsetHeight;
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerTop < sidebarHeight + 120) {
        setSidebarStyle({
          position: "absolute",
          top: `${footer.offsetTop - sidebarHeight - 40}px`, // 停在 footer 上方
        });
      } else {
        setSidebarStyle({
          position: "fixed",
          top: "120px",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="policy-container">
        <aside className="policy-sidebar" ref={sidebarRef} style={sidebarStyle}>
          {/* 你的導航內容 */}
        </aside>
        <main className="policy-content">
          {/* 你的主要內容 */}
        </main>
      </div>
      <footer ref={footerRef}>
        {/* Footer 區塊 */}
      </footer>
    </>
  );
}