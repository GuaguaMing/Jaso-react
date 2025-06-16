import React, { useState, useEffect } from "react";
import styles from "../../scss/pages/article/article.module.scss";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import LikeButton from "../1components/LikeButton";

const articles = [
  {
    id: "article1",
    title: "挑選素食保健品前你必須知道的五件事",
    date: "June 20,2025",
    author: "營養師 素芸",
    route: "/article1",
    backgroundImage: "./images/logo.svg",
    tags: ["素食原則"]
  },
  {
    id: "article2",
    title: "新手素食者最常缺的營養素，你補對了嗎？",
    date: "June 13,2025",
    author: "營養師 王昱呈",
    route: "/article2",
    backgroundImage: "./images/logo.svg",
    tags: ["新手必看"]
  },
  {
    id: "article3",
    title: "你吃對了嗎？六大類素食者食物分類與功能",
    date: "June 6,2025",
    author: "營養師 素素兒",
    route: "/article3",
    backgroundImage: "./images/logo.svg",
    tags: ["營養攝取"]
  },
  {
    id: "article4",
    title: "植物奶百百種，挑出真正適合你的那一款！",
    date: "May 30,2025",
    author: "營養師 素玲",
    route: "/article4",
    backgroundImage: "./images/logo.svg",
    tags: ["蛋白質"]
  },
  {
    id: "article5",
    title: "上班族補對這些，精神體力不卡關！",
    date: "May 23,2025",
    author: "營養師 得來素",
    route: "/article5",
    backgroundImage: "./images/logo.svg",
    tags: ["飲食習慣"]
  },
  {
    id: "article6",
    title: "經痛、貧血、掉髮？女性必備五大營養素",
    date: "May 16,2025",
    author: "營養師 素勾以",
    route: "/article6",
    backgroundImage: "./images/logo.svg",
    tags: ["維生素B12"]
  },
  {
    id: "article4",
    title: "植物奶百百種，挑出真正適合你的那一款！",
    date: "May 30,2025",
    author: "營養師 素玲",
    route: "/article4",
    backgroundImage: "./images/logo.svg",
    tags: ["蛋白質"]
  },
  {
    id: "article5",
    title: "上班族補對這些，精神體力不卡關！",
    date: "May 23,2025",
    author: "營養師 得來素",
    route: "/article5",
    backgroundImage: "./images/logo.svg",
    tags: ["飲食習慣"]
  },
  {
    id: "article6",
    title: "經痛、貧血、掉髮？女性必備五大營養素",
    date: "May 16,2025",
    author: "營養師 素勾以",
    route: "/article6",
    backgroundImage: "./images/logo.svg",
    tags: ["維生素B12"]
  }
];

export default function AppArticle() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [hoverIndex, setHoverIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeTag, setActiveTag] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  
  const resetToInitialView = () => {
    setActiveTag(null);
    setSearchKeyword("");
    setVisibleCount(6);
    setSearchParams({}); // 新增這行
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTagClick = (tag) => {
    setSearchKeyword("");
    const newActiveTag = activeTag === tag ? null : tag;
    setActiveTag(newActiveTag);
    
    // 新增這部分
    if (newActiveTag) {
      setSearchParams({ tag: newActiveTag });
    } else {
      setSearchParams({});
    }
  };

  const handleTitleClick = (route) => {
    navigate(route);
    setActiveTag(null);
    setSearchKeyword("");
    setVisibleCount(6);
  };

  const handleShowMore = () => {
    if (activeTag || searchKeyword) {
      setActiveTag(null);
      setSearchKeyword("");
      setVisibleCount(6);
    } else {
      setVisibleCount((prev) => prev + 3);
    }
  };

  const handleShowLess = () => {
    setActiveTag(null);
    setSearchKeyword("");
    setVisibleCount(6);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const tagFromUrl = searchParams.get('tag');
    if (tagFromUrl) {
      setActiveTag(tagFromUrl);
      setSearchKeyword("");
      setVisibleCount(6);
    }
  }, [searchParams]);

  // 筆數與篩選邏輯
  let displayedArticles = articles;

  if (activeTag) {
    displayedArticles = articles.filter(article => article.tags.includes(activeTag)).slice(0, 1);
  } else if (searchKeyword.trim()) {
    const lowerKeyword = searchKeyword.toLowerCase();
    displayedArticles = articles.filter(article =>
      article.title.toLowerCase().includes(lowerKeyword)
    );
  } else {
    displayedArticles = articles.slice(0, visibleCount);
  }

  // 檢查是否有搜尋結果
  const hasSearchResults = displayedArticles.length > 0;
  const isSearching = searchKeyword.trim() !== "";
  
  return (
    <main className={styles.articlePage}>
      {/* Search Section */}
      <section className={styles.searchSection}>
        <h1>search</h1>
        <h3 onClick={resetToInitialView}>素食知識+</h3>
        <div className={styles.hashtag}>
          {["新手必看", "素食原則", "營養攝取", "蛋白質", "維生素B12", "飲食習慣"].map((tag, idx) => (
            <span
              key={idx}
              className={`${styles.tags} ${activeTag === tag ? styles.active : ""}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="請輸入關鍵字"
            value={searchKeyword}
            onChange={(e) => {
              setSearchKeyword(e.target.value);
              setActiveTag(null); // 搜尋會取消 Tag 篩選
              setSearchParams({}); 
            }}
          />
          <img src={`${import.meta.env.BASE_URL}images/icons/icon_search.svg`} alt="search" />
        </div>
      </section>

      {/* Card Section */}
      <section className={styles.cardSection}>
        {/* 搜尋無結果提示 */}
        {isSearching && !hasSearchResults && (
          <div className={styles.noResults}>
            <p>很抱歉，找不到符合「{searchKeyword}」的相關文章</p>
            <p>請嘗試其他關鍵字或瀏覽下方推薦文章</p>
          </div>
        )}

        {/* 文章卡片 */}
        {hasSearchResults && (
          <div className={styles.column}>
            {displayedArticles.map((article, index) => (
              <div className={styles.cardOutline} key={article.id}>
                <div
                  className={styles.card}
                  style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}${article.backgroundImage.replace("./", "")})`,
                    backgroundSize: hoverIndex === index ? "140px" : "120px",
                    backgroundPosition: "center",
                    transition: "background-size 0.3s ease",
                  }}
                >
                  <div className={styles.like}>
                    <LikeButton articleId={article.id} />
                  </div>
                </div>
                <p
                  onClick={() => handleTitleClick(article.route)}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{ cursor: "pointer" }}
                >
                  {article.title}
                </p>
                <div className={styles.aDetail}>
                  <span>{article.date}</span>
                  <span className={styles.author}>{article.author}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More - 始終顯示並置中 */}
        <div className={styles.loadMore}>
          <p>SEE MORE</p>
          {visibleCount < articles.length && !activeTag && !searchKeyword ? (
            <div className={styles.plus} onClick={handleShowMore}>
              <img src={`${import.meta.env.BASE_URL}images/plus.svg`} alt="plus" />
            </div>
          ) : (
            <div className={styles.less} onClick={handleShowLess}>
              <img src={`${import.meta.env.BASE_URL}images/plus.svg`} alt="minus" />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
