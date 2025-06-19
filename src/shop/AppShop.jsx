import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from '../../scss/pages/shop/shop.module.scss';
import ConveyorAni from './components/ConveyorAni';
import products from '../productData/products';
import ProductCardList from './components/ProductCardList';
/* import Test from './test.jsx'; */

export default function AppShop() {
    const [activeCategory, setActiveCategory] = useState('全部');
    const [cartItems, setCartItems] = useState([]);
    const [cartAnimation, setCartAnimation] = useState(false);
    const navigate = useNavigate();
    const productListRef = useRef(null);

    // 從 localStorage 載入購物車資料
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(stored);
    }, []);

    const isLoggedIn = !!localStorage.getItem('token');

    // 修正後的購物車切換函數
    const handleToggleCartItem = (product) => {
        setCartItems(prevItems => {
            const exists = prevItems.some(item => item.id === product.id);
            let updatedItems;

            if (exists) {
                // 如果商品已存在，移除它
                updatedItems = prevItems.filter(item => item.id !== product.id);
            } else {
                // 如果商品不存在，加入它
                updatedItems = [...prevItems, { ...product, qty: 1 }];
            }

            // 同步更新 localStorage
            localStorage.setItem('cart', JSON.stringify(updatedItems));

            // 發送全域事件通知其他組件
            window.dispatchEvent(new CustomEvent('cartUpdated', {
                detail: { cart: updatedItems }
            }));

            return updatedItems;
        });
    };

    const handleBannerClick = () => {
        if (isLoggedIn) {
            navigate('/membercenter');
        } else {
            navigate('/login');
        }
    };

    // 購物車動畫效果
    useEffect(() => {
        if (cartItems.length === 0) return;
        setCartAnimation(true);
        const timer = setTimeout(() => setCartAnimation(false), 300);
        return () => { clearTimeout(timer); };
    }, [cartItems]);

    // 備用的加入購物車函數（如果需要的話）
    const handleAddToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const exists = cart.find((item) => item.id === product.id);

        if (!exists) {
            const updatedCart = [...cart, { ...product, qty: 1 }];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            setCartItems(updatedCart); // 同步更新狀態
            
            // 發送事件通知
            window.dispatchEvent(new CustomEvent('cartUpdated', {
                detail: { cart: updatedCart }
            }));
        }
    };

    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollToProductList && productListRef.current) {
            productListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.state]);

    const scrollToProductList = () => {
        if (productListRef.current) {
            productListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // 監聽來自其他組件的購物車更新事件
    useEffect(() => {
        const handleCartUpdate = (event) => {
            setCartItems(event.detail.cart);
        };

        window.addEventListener('cartUpdated', handleCartUpdate);
        return () => window.removeEventListener('cartUpdated', handleCartUpdate);
    }, []);

    return (
        <>
            <section className={styles.shopBanner}>
                <div className={styles.shopBannerContent}>
                    <h1 className={styles.shopBannerTitle}>Vegan Care.</h1>
                    <h3 className={styles.shopBannerSubtitle}>素食者需要的，我們都精挑細選。</h3>
                    <button
                        className={`${styles.shopButton} ${styles.shopButtonPrimary}`}
                        onClick={scrollToProductList}>
                        馬上速購
                    </button>
                </div>
                <div className={styles.conveyorWrapper}>
                    <ConveyorAni />
                </div>
            </section>
            
            <div className={styles.shopCTA} onClick={handleBannerClick} style={{ cursor: 'pointer' }}>
                <img src={`${import.meta.env.BASE_URL}images/shop-banner.svg`} width="48" alt="" />
            </div>

            <div ref={productListRef}>
                <ProductCardList
                    products={products}
                    onToggleCartItem={handleToggleCartItem}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                />
            </div>
        </>
    );
}
// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// import styles from '../../scss/pages/shop/shop.module.scss';
// import ConveyorAni from './components/ConveyorAni';
// import products from '../productData/products';
// import ProductCardList from './components/ProductCardList';
// /* import Test from './test.jsx'; */

// export default function AppShop() {

//     const [activeCategory, setActiveCategory] = useState('全部');
//     const [cartItems, setCartItems] = useState([]);
//     const [cartAnimation, setCartAnimation] = useState(false);
//     const navigate = useNavigate();
//     const productListRef = useRef(null);

// useEffect(() => {
//   const stored = JSON.parse(localStorage.getItem('cart') || '[]');
//   setCartItems(stored);
// }, []);


//     const isLoggedIn = !!localStorage.getItem('token');

// const handleToggleCartItem = () => {
//   const hasValidSetCartItems = typeof setCartItems === 'function' && 
//     setCartItems.toString() !== '() => {}';

//   if (hasValidSetCartItems) {
//     setCartItems(prevItems => {
//       const exists = prevItems.some(item => item.id === product.id);
//       let updatedItems;

//       if (exists) {
//         updatedItems = prevItems.filter(item => item.id !== product.id);
//         setIsAdded(false);
//       } else {
//         updatedItems = [...prevItems, { ...product, qty: 1 }];
//         setIsAdded(true);
//       }

//       localStorage.setItem('cart', JSON.stringify(updatedItems));

//       // 傳送全域事件通知
//       window.dispatchEvent(new CustomEvent('cartUpdated', {
//         detail: { cart: updatedItems }
//       }));

//       return updatedItems;
//     });
//   }
// };

//     const handleBannerClick = () => {
//         if (isLoggedIn) {
//             navigate('/membercenter');
//         } else {
//             navigate('/login');
//         }
//     };
//     useEffect(() => {
//         if (cartItems.length === 0) return;
//         setCartAnimation(true);
//         const timer = setTimeout(() => setCartAnimation(false), 300);
//         return () => { clearTimeout(timer); };
//     }, [cartItems]);
//     const handleAddToCart = (product) => {
//         const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//         const exists = cart.find((item) => item.id === product.id);

//         if (!exists) {
//             const updatedCart = [...cart, { ...product, qty: 1 }];
//             localStorage.setItem('cart', JSON.stringify(updatedCart));
//         }
//     };
//     const location = useLocation();

//     useEffect(() => {
//         if (location.state?.scrollToProductList && productListRef.current) {
//             productListRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     }, [location.state]);

//     const scrollToProductList = () => {
//         if (productListRef.current) {
//             productListRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <>
//             <section className={styles.shopBanner}>
//                 <div className={styles.shopBannerContent}>
//                     <h1 className={styles.shopBannerTitle}>Vegan Care.</h1>
//                     <h3 className={styles.shopBannerSubtitle}>素食者需要的，我們都精挑細選。</h3>
//                     <button
//                         className={`${styles.shopButton} ${styles.shopButtonPrimary}`}
//                         onClick={scrollToProductList}>
//                         馬上速購</button>
//                 </div>
//                 <div className={styles.conveyorWrapper}>
//                     <ConveyorAni />
//                 </div>
//             </section>
//             <div className={styles.shopCTA} onClick={handleBannerClick} style={{ cursor: 'pointer' }}>
//                 <img src={`${import.meta.env.BASE_URL}images/shop-banner.svg`} width="48" alt="" />
//             </div>

//             <div ref={productListRef}>
//                 <ProductCardList
//                     products={products}
//                     onToggleCartItem={handleToggleCartItem} 
//   cartItems={cartItems} 
//   setCartItems={setCartItems} 
//                 />

//             </div>
//         </>


//     )
// }