import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
    const productListRef = useRef(null);


    const isLoggedIn = !!localStorage.getItem('token');

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
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const exists = cart.find((item) => item.id === product.id);

        if (!exists) {
            const updatedCart = [...cart, { ...product, qty: 1 }];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
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

    return (
        <>
            <section className={styles.shopBanner}>
                <div className={styles.shopBannerContent}>
                    <h1 className={styles.shopBannerTitle}>Vegan Care.</h1>
                    <h3 className={styles.shopBannerSubtitle}>素食者需要的，我們都精挑細選。</h3>
                    <button
                        className={`${styles.shopButton} ${styles.shopButtonPrimary}`}
                        onClick={scrollToProductList}>
                        馬上速購</button>
                </div>
                <div className={styles.conveyorWrapper}>
                    <ConveyorAni />
                </div>
            </section>
            <div className={styles.shopCTA} onClick={handleBannerClick} style={{ cursor: 'pointer' }}>
                <img src={`${import.meta.env.BASE_URL}images/shop-banner.svg`} width="48" alt="" />
            </div>

            <div ref={productListRef}>
                <ProductCardList products={products} onAddToCart={handleAddToCart} />
            </div>
            {/*  <RecentViewed products={products} cartItems={cartItems} onAddToCart={handleAddToCart} /> */}
        </>


    )
}