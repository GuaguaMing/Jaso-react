import React, { useState, useRef, useEffect } from 'react';

import styles from '../../scss/pages/shop/shop.module.scss';
import ConveyorAni from './components/ConveyorAni';
import RecentViewed from '../shop-cart/components/RecentViewed';
/* import Test from './test.jsx'; */

export default function AppShop() {

    const [activeCategory, setActiveCategory] = useState('全部');
    const [cartItems, setCartItems] = useState([]);
    const [cartAnimation, setCartAnimation] = useState(false);

    const products = [
        { id: 1, name: "鈣心定植物鈣", desc: "維鈣+D3雙效配方", price: 365, image: "./images/Pd/Ca-default.png" },
        { id: 2, name: "素超群膠囊", desc: "植萃綜合維他命配方", price: 420, image: "./images/Pd/N-default.png" },
        { id: 3, name: "素D速補D", desc: "幫植萃維生素D（藻類D3）膠囊", price: 380, image: "./images/Pd/D-default.png" },
        { id: 4, name: "油你真好植物膠囊", desc: "純素海藻OMEG3。", price: 250, image: "./images/Pd/Omg3-default.png" },
        { id: 5, name: "補B不累口含錠", desc: "嚴選100%植物來源維生素B12", price: 520, image: "./images/Pd/B12-default.png" },
        { id: 6, name: "鐵了心膠囊", desc: "嚴選100%植物來源 植萃鐵+B群補給", price: 490, image: "./images/Pd/Fe-default.png" },
    ];

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
            <div className={styles.shopCTA}>
                <img src={`${import.meta.env.BASE_URL}images/shop-banner.svg`} width="48" alt="" />
            </div>

            <RecentViewed products={products} cartItems={cartItems} onAddToCart={handleAddToCart} />
        </>

    )
}