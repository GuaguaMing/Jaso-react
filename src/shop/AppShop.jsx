import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../../scss/pages/shop/shop.module.scss';
import ConveyorAni from './components/ConveyorAni';
import products from '../productData/products';
import ProductCardList from './components/ProductCardList';
/* import RecentViewed from '../shop-cart/components/RecentViewed'; */
/* import Test from './test.jsx'; */

export default function AppShop() {

    const [activeCategory, setActiveCategory] = useState('全部');
    const [cartItems, setCartItems] = useState([]);
    const [cartAnimation, setCartAnimation] = useState(false);
  const navigate = useNavigate();
  // 這裡假設你用 localStorage 判斷登入
  const isLoggedIn = !!localStorage.getItem('token'); // 依你專案實際情況調整

  const handleBannerClick = () => {
    if (isLoggedIn) {
      navigate('/membercenter');
    } else {
      navigate('/login');
    }
  };
    useEffect(() => {
        if (cartItems.length === 0) return;
        setCartAnimation(true);
        const timer = setTimeout(() => setCartAnimation(false), 300);
        return () => { clearTimeout(timer); };
    }, [cartItems]);
    const handleAddToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, qty: 1 }];
            }
        });
    };

    return (
        <>
            <section className={styles.shopBanner}>
                <div className={styles.shopBannerContent}>
                    <h1 className={styles.shopBannerTitle}>Vegan Care.</h1>
                    <h3 className={styles.shopBannerSubtitle}>素食者需要的，我們都精挑細選。</h3>
                    <button className={`${styles.shopButton} ${styles.shopButtonPrimary}`}>馬上速購</button>
                </div>
                <div className={styles.conveyorWrapper}>
                    <ConveyorAni />
                </div>
            </section>
            <div className={styles.shopCTA} onClick={handleBannerClick} style={{ cursor: 'pointer' }}>
                <img src={`${import.meta.env.BASE_URL}images/shop-banner.svg`} width="48" alt="" />
            </div>

            <ProductCardList products={products} onAddToCart={handleAddToCart} />
           {/*  <RecentViewed products={products} cartItems={cartItems} onAddToCart={handleAddToCart} /> */}
        </>

    )
}