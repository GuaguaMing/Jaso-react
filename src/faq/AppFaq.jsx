import React, { useState, useEffect, useRef } from "react";
import "../../css/style.min.css";
import "../main.css";
import "../../scss/pages/FAQ/Appfaq.css";

export default function AppFaq() {
  const [activeTab, setActiveTab] = useState("terms");
  const [isStickyStopped, setIsStickyStopped] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = sidebarRef.current;
      const footer = document.querySelector("footer");
      if (!sidebar || !footer) return;

      const sidebarBottom = sidebar.getBoundingClientRect().bottom;
      const footerTop = footer.getBoundingClientRect().top;

      if (sidebarBottom + 40 > footerTop) {
        setIsStickyStopped(true);
      } else {
        setIsStickyStopped(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="policy-container">
      {/* 側邊導覽 */}
      <aside
        className={`policy-sidebar ${isStickyStopped ? "stopped" : ""}`}
        ref={sidebarRef}
      >
        <ul>
          <li
            className={activeTab === "terms" ? "active" : ""}
            onClick={() => setActiveTab("terms")}
          >
            <a href="#terms">服務條款</a>
          </li>
          <li
            className={activeTab === "privacy" ? "active" : ""}
            onClick={() => setActiveTab("privacy")}
          >
            <a href="#privacy">隱私權政策</a>
          </li>
          <li
            className={activeTab === "faq" ? "active" : ""}
            onClick={() => setActiveTab("faq")}
          >
            <a href="#faq">常見問題</a>
          </li>
        </ul>
      </aside>


      {/* 主文區塊 */}
      <main className="policy-content">
        <section className="policy-section" id="terms">
          <h2>服務條款</h2>
          <h4>服務內容</h4>
          <p>本網站提供的服務包括但不限於商品的在線瀏覽、購買、付款、配送、售後服務等。</p>
          <h4>用戶管理</h4>
          <p>使用本網站服務的用戶必須具備完全的民事行為能力。若用戶為未成年人，需在其監護人指導下使用本網站。</p>
          <h4>用戶註冊</h4>
          <p>用戶在使用本網站某些功能時，可能需要註冊帳戶。註冊帳戶時，請提供準確、完整的個人資料，並保持這些資料的更新。用戶應妥善保管帳戶密碼，不得將帳戶、密碼轉讓或出借給他人使用。用戶對使用其帳戶和密碼進行的一切活動負全部責任。</p>
          <h4>隱私保護</h4>
          <p>本網站重視用戶的隱私保護，將按照隱私政策處理用戶的個人資料。</p>
          <h4>訂單與付款</h4>
          <p>用戶在本網站提交的訂單視為購買商品的要約。只有在本網站確認接受該訂單後，該訂單才生效。本網站提供多種支付方式，用戶可選擇適合自己的支付方式進行付款。</p>
          <h4>配送服務</h4>
          <p>本網站將根據用戶提供的配送地址進行商品配送。配送時間和費用將根據具體情況確定。</p>
          <h4>退換貨政策</h4>
          <p>用戶在收到商品後，如需退換貨，請參照本網站的退換貨政策。</p>
          <h4>知識產權</h4>
          <p>本網站及其所使用的所有內容（包括但不限於文字、圖像、音頻、視頻等）均受著作權、商標權及其他相關法律的保護。</p>
          <h4>責任限制</h4>
          <p>本網站對因不可抗力或其他非本網站過錯原因造成的服務中斷或損失不承擔責任。</p>
          <h4>條款修改</h4>
          <p>本網站有權根據需要修改本條款，修改後的條款將在本網站公佈。用戶繼續使用本網站即視為接受修改後的條款。</p>
          <h4>其他</h4>
          <p>本條款的解釋、效力及糾紛解決均適用中華民國之法律。<br />若本條款的任何條款被視為無效或不可執行，該條款應在必要的最低限度內被修改或刪除，且不影響其他條款的有效性和可執行性。</p>
          <hr />
        </section>

        <section className="policy-section" id="privacy">
          <h2>隱私權政策</h2>
          <h4>一、隱私權保護政策的適用範圍</h4>
          <p>隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。</p>
          <h4>二、個人資料的蒐集、處理及利用方式</h4>
          <p>當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。...（略）</p>
          <h4>三、資料之保護</h4>
          <p>本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施。...（略）</p>
          <h4>四、網站對外的相關連結</h4>
          <p>本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。</p>
          <h4>五、與第三人共用個人資料之政策</h4>
          <p>本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。...（略）</p>
          <h4>六、Cookie 之使用</h4>
          <p>為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的 Cookie。若您不願接受 Cookie 的寫入，您可在瀏覽器設定中拒絕，但可能會導致網站某些功能無法正常執行。</p>
          <h4>七、隱私權保護政策之修正</h4>
          <p>用於提升體驗與記錄偏好，不含敏感資訊。</p>
          <h4>八、聯繫管道</h4>
          <p>對於本站之隱私權政策有任何疑問，請至「聯絡我們」頁面提交表單。</p>
          <hr />
        </section>

        <section className="policy-section" id="faq">
          <h2>常見問題（FAQ）</h2>
          <h4>🌱 品牌理念</h4>
          <h4>Q1：什麼是 JaSo+素？</h4>
          <p>JaSo+素 是一個植基於「讓肉回歸動物身上」理念的保健食品品牌。...（略）</p>
          <h4>Q2：JaSo+素 是純素品牌嗎？</h4>
          <p>是的，我們堅持使用 100% 植物性成分。...（略）</p>
          <h4>🧪 產品資訊</h4>
          <h4>Q3：產品主要有哪幾種類型？</h4>
          <p>目前共有 6 款產品，補足生活所需的六大類營養素。</p>
          <h4>Q4：產品成分有經過檢驗嗎？</h4>
          <p>有的。所有產品皆通過台灣第三方實驗室檢驗。</p>
          <h4>💡 使用方式</h4>
          <h4>Q5：我要怎麼知道哪款產品適合我？</h4>
          <p>可依個人需求參考「產品分類標籤」或使用「營養推薦小測驗」。</p>
          <h4>Q6：產品要怎麼保存？</h4>
          <ul>
            <li>存放於陰涼乾燥處</li>
            <li>依建議期限食用完畢</li>
            <li>需冷藏品項會註明</li>
          </ul>
          <h4>🌍 環境與包裝</h4>
          <h4>Q7：玻璃瓶與塑膠瓶的用意是什麼？</h4>
          <p>玻璃瓶裝：適合長期補充；塑膠瓶裝：適合攜帶。皆為可回收材質。</p>
          <h4>❓ 找不到答案嗎？</h4>
          <p>如有其他問題，歡迎聯繫客服：</p>
          <p>📩 jaso_official@gmail.com</p>
          <p>📞 (02) 8765-4321</p>
          <p>📍 台北市中正區濟南路一段321號</p>
          <hr />
        </section>
      </main>
    </div>
  );
}
