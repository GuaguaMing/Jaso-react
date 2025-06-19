import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

import AppHome from './1home/AppHome';
import AppGuide from './guide/AppGuide';
import AppArticle from './article/AppArticle';
import Article1 from './article/Article1';
import Article2 from './article/Article2';
import Article3 from './article/Article3';
import Article4 from './article/Article4';
import Article5 from './article/Article5';
import Article6 from './article/Article6';
import Quiz from './quiz/Quiz';
import Result from './quiz/Result';
import MemberCenter from "./member/MemberCenter";
import AppLogin from "./login/AppLogin";
import AppShop from "./shop/AppShop";
import ProductDetail from './shop/components/ProductDetail';
import AppAbout from "./about/AppAbout";
import AppCart from "./shop-cart/AppCart";
import OrderSuccess from './shop-cart/components/OrderSuccess';
import AppFaq from "./faq/AppFaq";
import Layout from './1components/Layout'; // 首頁＋footer
import AppSignup from './signup/AppSignup';

// 創建一個包裝組件來處理 URL 參數
function AppWrapper() {
  const [cartItems, setCartItems] = useState([]);
  const [cartAnimation, setCartAnimation] = useState(false);
  const [step, setStep] = useState(1);

  // 切換購物車商品
  const handleToggleCartItem = (product) => {
    console.log('Toggle cart item:', product); // 調試用
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.filter(item => item.id !== product.id);
      } else {
        return [...prevItems, { ...product, qty: 1 }];
      }
    });
  };

  // 購物車動畫控制
  useEffect(() => {
    if (cartItems.length === 0) return;
    setCartAnimation(true);
    const timer = setTimeout(() => setCartAnimation(false), 300);
    return () => clearTimeout(timer);
  }, [cartItems]);

  // 載入購物車資料
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      try {
        const parsedItems = JSON.parse(stored);
        setCartItems(parsedItems);
      } catch (error) {
        console.error('Error parsing cart items from localStorage:', error);
      }
    }
  }, []);

  // 每次更新都寫入 localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Routes>
      {/* 不套用 Layout 的頁面 */}
      <Route path="/quiz" element={<Quiz 
      cartItems={cartItems}
      onToggleCartItem={handleToggleCartItem}
    />} />

      {/* 套用 Layout 的頁面 */}
      <Route element={
        <Layout 
          cartItems={cartItems} 
          cartAnimation={cartAnimation}
          onToggleCartItem={handleToggleCartItem}
        />
      }>
        <Route path="/" element={<AppHome />} />
        <Route path="/guide" element={<AppGuide />} />
        <Route path="/about" element={<AppAbout />} />
        <Route path="/article" element={<AppArticle />} />

        <Route path="/article1" element={<Article1 />} />
        <Route path="/article2" element={<Article2 />} />
        <Route path="/article3" element={<Article3 />} />
        <Route path="/article4" element={<Article4 />} />
        <Route path="/article5" element={<Article5 />} />
        <Route path="/article6" element={<Article6 />} />

        <Route path="/memberCenter" element={<MemberCenter />} />
        <Route path="/login" element={<AppLogin />} />
        <Route path="/signup" element= {<AppSignup/>} />
        <Route 
          path="/shop" 
          element={
            <AppShop 
              cartItems={cartItems}
              onToggleCartItem={handleToggleCartItem}
            />
          } 
        />
        <Route 
          path="/shop/product/:id" 
          element={
            <ProductDetail 
              cartItems={cartItems}
              onToggleCartItem={handleToggleCartItem}
            />
          } 
        />
        
        {/* 重點：AppCart 路由需要傳遞購物車狀態 */}
        <Route 
          path="/cart" 
          element={
            <AppCart 
              cartItems={cartItems} 
              setCartItems={setCartItems}
              onToggleCartItem={handleToggleCartItem}
            />
          } 
        />
        
        <Route path="/result" element={<Result />} />
        <Route path="/cart/success" element={<OrderSuccess />} />
        <Route path="/faq" element={<AppFaq />} />
      </Route>
    </Routes>
  );
}

// 創建一個額外的組件來處理 URL 參數重置功能
function CartResetHandler({ children, cartItems, setCartItems, setStep }) {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('reset') === 'true') {
      console.log('Resetting cart'); // 調試用
      setCartItems([]);
      setStep(1);
    }
  }, [searchParams, setCartItems, setStep]);

  return children;
}

function App() {
  return <AppWrapper />;
}

export default App;