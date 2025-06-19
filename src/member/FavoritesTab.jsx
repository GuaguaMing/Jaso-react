import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../../scss/pages/shop/shop.module.scss'
import LikeButton from '../1components/LikeButton';

const allProducts = [
  {
      id: 1, tags: "維鈣+D3雙效配方", name: "鈣心定植物鈣",
      desc: "本產品特別為素食者設計，嚴選100%植物來源原料，選用海藻鈣與紅藻鈣，富含天然鈣質，並添加鎂、D3與K2，幫助鈣質有效吸收與利用，穩定打造強健骨本。溫和純淨的全素配方，適合長期食用，幫助維持體力、提升代謝、支持免疫系統與骨骼健康。",
      price: 365,
      image: {
          default: "/images/Pd/Ca-default.svg",
          hover: "/images/Pd/Ca-hover.svg"
      },
      productPoints: `
      ．「海藻鈣＋藻類D3」，高吸收率植物鈣配方
      ．支援骨骼、牙齒與肌肉正常功能
      ．添加「鎂與維生素K2」，骨骼更完整支持
      ．無乳製品、無動物性添加物`,
      productList: `
      適用對象：
      ✔ 素食/全素者
      ✔ 兒童發育期、年長者
      ✔ 欲強化骨骼與牙齒健康者`,
      detailImage: "/images/Pd/pd-ShopPage-ca.jpg",
      friendImage: {
          F1: "/images/friends/Ca-kale.svg",
          F2: "/images/friends/pf-md1.svg",
          F3: "/images/friends/Fe-blackS.svg"
      }
  },
  {
      id: 2, tags: "植萃綜合維他命配方", name: "素超群膠囊",
      desc: "本產品特別為素食者設計，嚴選100%植物來源原料，全面補充13種必需維生素與8種關鍵礦物質，讓您每日獲得均衡的營養支持。其溫和純淨的全素配方，無動物性成分，適合長期食用，並能有效幫助維持體力、提升新陳代謝，強化免疫系統，並支持骨骼健康。",
      price: 420,
      image: {
          default: "./images/Pd/N-default.svg",
          hover: "./images/Pd/N-hover.svg",
      },
      productPoints: `
      ． 全素膠囊，純淨無添加 
      ．強化維生素B群與鐵、鋅，提升代謝與造血功能
      ．添加藻類來源活性型維生素D3，幫助骨骼密度維持
      ．無麩質、無乳製品、無人工色素與防腐劑
      ．通過第三方重金屬與農藥殘留檢測`,
      productList: `
      適用對象：
      ✔ 全素/蛋奶素/彈性素者
      ✔ 飲食失衡、營養攝取不足者
      ✔ 常感疲勞、運動後恢復慢者
      ✔ 工作壓力大、免疫力需加強者`,
      detailImage: "/images/Pd/pd-ShopPage-mt.jpg",
      friendImage: {
          F1: "/images/friends/pf-md1.svg",
          F2: "/images/friends/pf-tofu.svg",
          F3: "/images/friends/pf-bd1.svg",
      }
  },
  {
      id: 3, tags: "幫植萃維生素D（藻類D3）膠囊", name: "素D速補D",
      desc: "本產品特別為素食者設計，選用高品質海藻來源維生素D，有效提高鈣質吸收與骨骼健康。長期缺乏維生素D會影響骨密度，增加骨折風險。這款維生素D補充劑，溫和純淨的全素配方適合日常使用，尤其對於長期待在室內或缺乏日照的素食者來說，能有效補充日常所需，維持整體健康與活力。",
      price: 380,
      image: {
          default: "./images/Pd/D-default.svg",
          hover: "./images/Pd/D-hover.svg"
      },
      productPoints: `
      ．使用「藻類來源維生素D3」，純植物萃取
      ．幫助「促進鈣吸收、強化骨骼密度」
      ．支援免疫系統正常運作
      ．無動物成分、無麩質、無乳製品`,
      productList: `
      適用對象：
      ✔ 少曬太陽者、室內工作者
      ✔ 骨密度不足者
      ✔ 素食族群、乳糖不耐者`,
      detailImage: "/images/Pd/pd-ShopPage-D.jpg",
      friendImage: {
          F1: "/images/friends/D-mushroom.svg",
          F2: "/images/friends/D-fungus.svg",
          F3: "/images/friends/D-sun.svg"
      }
  },
  {
      id: 4, tags: "純素海藻OMEG3", name: "油你真好植物膠囊",
      desc: "本產品特別為素食者設計，嚴選100%植物來源原料，選用高品質海藻油，富含DHA與EPA，幫助支持心血管、腦部與眼睛健康。溫和純淨的全素配方，適合長期食用，有助於提升專注力、維持正常的心臟功能，並支持大腦與視力健康。",
      price: 250,
      image: {
          default: "./images/Pd/Omg3-default.svg",
          hover: "./images/Pd/Omg3-hover.svg"
      },
      productPoints: `
      ．採用「海藻油來源DHA＋EPA」，環保純淨
      ．幫助維持「腦部機能與眼睛健康」
      ．支援「心血管健康與抗發炎反應」
      ．無腥味、無污染、純植物來源`,
      productList: `
      適用對象：
      ✔ 素食/全素者
      ✔ 長時間用腦、用眼者
      ✔ 欲保養心血管健康者`,
      detailImage: "/images/Pd/pd-ShopPage-omg3.jpg",
      friendImage: {
          F1: "/images/friends/omg3-Flaxseed.svg",
          F2: "/images/friends/omg3-chiaSeeds.svg",
          F3: "/images/friends/omg3-walnut.svg",
          F4: "/images/friends/omg3-yellowb.svg"
      }
  },
  {
      id: 5, tags: "嚴選100%植物來源維生素B12", name: "補B不累口含錠",
      desc: "本產品特別為素食者設計，嚴選100%植物來源維生素B12，幫助補充缺乏的營養，支持神經系統與造血功能，提升能量與集中力。溫和純淨的全素配方，適合長期食用，有助於維持正常的神經健康、增強體力，並支持免疫系統運作。",
      price: 520,
      image: {
          default: "./images/Pd/B12-default.svg",
          hover: "./images/Pd/B12-hover.svg"
      },
      productPoints: `
      ．含「活性型B12（甲基鈷胺素）」，吸收率佳
      ．幫助維持神經傳導、精神集中
      ．改善疲勞、促進紅血球形成
      ．微甜口含錠，方便吸收`,
      productList: `
      適用對象：
      ✔ 素食/全素者
      ✔ 精神不濟、需提升專注力者
      ✔ 長期疲倦、代謝低下者`,
      detailImage: "/images/Pd/pd-ShopPage-B12.jpg",
      friendImage: {
          F1: "/images/friends/B12-yeast.svg",
      }
  },
  {
      id: 6, tags: "嚴選100%植物來源 植萃鐵+B群補給", name: "鐵了心膠囊",
      desc: "本產品特別為素食者設計，嚴選100%植物來源鐵質，並添加維生素C，幫助提升鐵的吸收與利用，支持紅血球生成與能量代謝。溫和純淨的全素配方，適合長期食用，有助於維持正常的血紅素水平，改善體力，提升活力，並支持免疫系統健康。",
      price: 490,
      image: {
          default: "./images/Pd/Fe-default.svg",
          hover: "./images/Pd/Fe-hover.svg"
      },
      productPoints: `
      ．使用「甘胺酸亞鐵」，溫和吸收好不刺激
      ．添加「維生素C與B群」，提升鐵吸收率
      ．支援紅血球生成與體力恢復
      ．無腥味、無便秘困擾`,
      productList: `
      適用對象：
      ✔ 女性、經期後補鐵族群
      ✔ 臉色蒼白、體力差者
      ✔ 素食/全素者`,
      detailImage: "/images/Pd/pd-ShopPage-Fe.jpg",
      friendImage: {
          F1: "/images/friends/Fe-blackS.svg",
          F2: "/images/friends/Fe-bc.svg",
          F3: "/images/friends/Fe-redM.svg",
          F4: "/images/friends/Fe-BB.svg",
          F5: "/images/friends/Fe-pk.svg"
      }
  },
];

// 收藏產品卡片組件
function FavoriteProductCard({ product, onToggleCartItem }) {
  const [isHover, setIsHover] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleToggleCartItem = (e) => {
    e.stopPropagation();
    setIsAdded(!isAdded);
    if (onToggleCartItem) {
      onToggleCartItem(product);
    }
  };

  return (
    <div
      className={styles.productCard}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link
        to={`/shop/product/${product.id}`}
        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      >
        <div className={styles.productImageWrapper}>
          <img
            src={`${import.meta.env.BASE_URL}${isHover ? product.image.hover : product.image.default}`}
            alt={`產品-${product.name}`}
            className={styles.productImage}
          />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productTags}>{product.tags}</div>
          <div className={styles.productTitle}>{product.name}</div>
          <div className={styles.productDesc}>{product.desc}</div>
        </div>
      </Link>
      <div className={styles.productBtnGroup}>
        <button
          className={`${styles.addToCartBtn} ${isAdded ? styles.disabled : ''}`}
          onClick={handleToggleCartItem}  
        >
          {isAdded ? '取消加入' : '加入素購車'}
        </button>
        <div className={styles.likeBtn}>
          <LikeButton articleId={product.id} />
        </div>
      </div>
    </div>
  );
}

export default function FavoritesTab({ onToggleCartItem }) {
  const navigate = useNavigate();
  const [likedProducts, setLikedProducts] = useState([]);
  const [isHover, setIsHover] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const loadLikedProducts = () => {
    const likedIds = JSON.parse(localStorage.getItem("likedProducts") || "[]");
    const liked = allProducts.filter(product => likedIds.includes(product.id));
    setLikedProducts(liked);
  };

  const handleToggleCartItem = (e) => {
    e.stopPropagation();
    setIsAdded(!isAdded);
    if (onToggleCartItem) {
      onToggleCartItem(product);
    }
  };

  useEffect(() => {
    loadLikedProducts();
    
    // 監聽收藏狀態變化
    const handleFavoritesUpdate = () => {
      loadLikedProducts();
    };
    
    window.addEventListener('favoritesUpdated', handleFavoritesUpdate);
    
    return () => {
      window.removeEventListener('favoritesUpdated', handleFavoritesUpdate);
    };
  }, []);

  return (
    <main className={styles.ppPage}>
      <section className={styles.cnppSection}>
        {likedProducts.length === 0 ? (
          <div className={styles.noResults}>
            <p>你還沒有收藏任何商品唷！</p>
          </div>
        ) : (
          <div className={styles.productList}>
            {likedProducts.map((product) => (
                  <div
                    className={styles.productCard}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    key={product.id}
                  >
                    <Link
                      to={`/shop/product/${product.id}`}
                      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                    >
                      <div className={styles.productImageWrapper}>
                        <img
                          src={`${import.meta.env.BASE_URL}${isHover ? product.image.hover : product.image.default}`}
                          alt={`產品-${product.name}`}
                          className={styles.productImage}
                        />
                      </div>
                      <div className={styles.productInfo}>
                        <div className={styles.productTags}>{product.tags}</div>
                        <div className={styles.productTitle}>{product.name}</div>
                        <div className={styles.productDesc}>{product.desc}</div>
                      </div>
                    </Link>
                    <div className={styles.productBtnGroup}>
                      <button
                        className={`${styles.addToCartBtn} ${isAdded ? styles.disabled : ''}`}
                        onClick={handleToggleCartItem}  
                      >
                        {isAdded ? '取消加入' : '加入素購車'}
                      </button>
                      <div className={styles.likeBtn}>
                        <LikeButton productId={product.id} 
                        style={{ width: 30, height: 30 }}/>
                      </div>
                    </div>
                  </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
