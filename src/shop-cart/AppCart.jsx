import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarHidden from "../1components/NavbarHidden";

import CheckoutProgress from './components/CheckoutProgress';
import CartToggle from './components/CartToggle';
import CartSummary from './components/CartSummary';
import RecentViewed from './components/RecentViewed';
import ShippingForm from './components/ShippingForm';
import PaymentForm from './components/PaymentForm';
import PaymentReview from './components/PaymentReview';
import OrderSuccess from './components/OrderSuccess';
<<<<<<< HEAD
import Navbar from '../1components/Navbar';
=======
import { useSearchParams } from 'react-router-dom';

>>>>>>> 9f57304805045a3491540cd0646daec63c67e5f9

function AppCart() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "鈣心定植物鈣", desc: "維鈣+D3雙效配方", price: 365, qty: 1 },
    { id: 2, name: "鈣心定植物鈣", desc: "維鈣+D3雙效配方", price: 365, qty: 1 },
  ]);

  // 商品
  const products = [
    { id: 1, name: "鈣心定植物鈣", desc: "維鈣+D3雙效配方", price: 365, image: "./images/Pd/Ca-default.png" },
    { id: 2, name: "素超群膠囊", desc: "植萃綜合維他命配方", price: 420, image: "./images/Pd/N-default.png" },
    { id: 3, name: "素D速補D", desc: "幫植萃維生素D（藻類D3）膠囊", price: 380, image: "./images/Pd/D-default.png" },
    { id: 4, name: "油你真好植物膠囊", desc: "純素海藻OMEG3。", price: 250, image: "./images/Pd/Omg3-default.png" },
    { id: 5, name: "補B不累口含錠", desc: "嚴選100%植物來源維生素B12", price: 520, image: "./images/Pd/B12-default.png" },
    { id: 6, name: "鐵了心膠囊", desc: "嚴選100%植物來源 植萃鐵+B群補給", price: 490, image: "./images/Pd/Fe-default.png" },
  ];
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
  const [cartAnimation, setCartAnimation] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) return;
    setCartAnimation(true);
    const timer = setTimeout(() => setCartAnimation(false), 300);
    return () => { clearTimeout(timer); };
  }, [cartItems]);

  // 清空購物車
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get('reset') === 'true') {
      setCartItems([]);
      setStep(1);
    }
  }, []);

  const [usedCredits, setUsedCredits] = useState(100);
  const [availableCredits, setAvailableCredits] = useState(300);
  const [orderNumber, setOrderNumber] = useState(null);

  const [formData, setFormData] = useState({
    name: '陳素食',
    email: 'jaso12345@gmail.com',
    phone: '+886 900 123 4567',
    recipient: '陳素食',
    recipientPhone: '+886 900 123 4567',
    address: '台北市大安區仁愛路四段',
    paymentMethod: 'credit_card',
    invoiceType: 'mobile',
    invoiceNumber: '',
    carrierNumber: '/',
    creditCardNumber: '',
    expiryDate: '',
    cardHolder: '',
    securityCode: '',
    shippingMethod: ''
  });


  // shippingform表單
  const [localForm, setLocalForm] = useState({
    name: '',
    email: '',
    phone: '',
    recipient: '',
    recipientPhone: '',
    address: '', // 你可以保留這個欄位當作「宅配地址」或未來擴充用
    shippingMethod: '',
    note: ''
  });


  const shippingRef = useRef(null);
  useEffect(() => {
    setIsCartOpen(step === 1);
  }, [step]);
  const handleSubmitOrder = () => {
    const generatedOrderNumber = 'JS' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    setOrderNumber(generatedOrderNumber);

    // ✅ 用 navigate 跳轉並傳資料
    navigate('/cart/success', { state: { orderNumber: generatedOrderNumber } });
  };


  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <div className="container py-4">
        <div className="navbar navbar-light bg-light mb-3">
          <div className='container-fluid'>
=======
    // <NavbarHidden />
    <div className="container py-4">
      <div className="navbar navbar-light bg-light mb-3">
        <div className='container-fluid'>
          <span className='navbar-brand'>結帳流程</span>
        </div>
      </div>

      {/* ✅ 右下角購物袋浮動按鈕 */}
      <div
        className="position-fixed"
        style={{
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          cursor: "pointer",
        }}
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <div className="position-relative">
          <img src="./icons/icon-cart.svg" width="48" alt="cart" />
          <span className={`cart-count-badge ${cartAnimation ? "bump" : ""}`}>
            {cartItems.reduce((sum, item) => sum + item.qty, 0)}
          </span>
        </div>
      </div>

      <CheckoutProgress step={step} />

      {/* Step 1: 購物車 */}
      {step === 1 && (
        <>
          <CartToggle cartItems={cartItems} setCartItems={setCartItems} isOpen={isCartOpen} setIsOpen={setIsCartOpen} cartAnimation={cartAnimation} />
          <CartSummary cartItems={cartItems} onNextStep={() => {
            setStep(2);
            setTimeout(() => {
              shippingRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 0);
          }} />
          <RecentViewed products={products} cartItems={cartItems} onAddToCart={handleAddToCart} />
        </>
      )}

      {/* Step 2: 配送資訊 */}
      {step === 2 && (
        <>
          <CartToggle cartItems={cartItems} setCartItems={setCartItems} isOpen={isCartOpen} setIsOpen={setIsCartOpen} cartAnimation={cartAnimation} />
          <CartSummary cartItems={cartItems} />
          <div ref={shippingRef}>
            <ShippingForm formData={formData} setFormData={setFormData} onNextStep={() => setStep(3)} />
>>>>>>> 9f57304805045a3491540cd0646daec63c67e5f9
          </div>
        </div>

        {/* ✅ 右下角購物袋浮動按鈕 */}
        <div
          className="position-fixed"
          style={{
            bottom: "24px",
            right: "24px",
            zIndex: 9999,
            cursor: "pointer",
          }}
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <div className="position-relative">
            <img src="./icons/icon-cart.svg" width="48" alt="cart" />
            <span className={`cart-count-badge ${cartAnimation ? "bump" : ""}`}>
              {cartItems.reduce((sum, item) => sum + item.qty, 0)}
            </span>
          </div>
        </div>

        <CheckoutProgress step={step} />

        {/* Step 1: 購物車 */}
        {step === 1 && (
          <>
            <CartToggle cartItems={cartItems} setCartItems={setCartItems} isOpen={isCartOpen} setIsOpen={setIsCartOpen} cartAnimation={cartAnimation} />
            <CartSummary cartItems={cartItems} onNextStep={() => {
              setStep(2);
              setTimeout(() => {
                shippingRef.current?.scrollIntoView({ behavior: 'smooth' });
              }, 0);
            }} />
            <RecentViewed products={products} cartItems={cartItems} onAddToCart={handleAddToCart} />
          </>
        )}

        {/* Step 2: 配送資訊 */}
        {step === 2 && (
          <>
            <CartToggle cartItems={cartItems} setCartItems={setCartItems} isOpen={isCartOpen} setIsOpen={setIsCartOpen} cartAnimation={cartAnimation} />
            <CartSummary cartItems={cartItems} />
            <div ref={shippingRef}>
              <ShippingForm formData={formData} setFormData={setFormData} onNextStep={() => setStep(3)} />
            </div>
          </>
        )}

        {/* Step 3: 付款方式與發票 */}
        {step === 3 && (
          <>
            <CartToggle cartItems={cartItems} setCartItems={setCartItems} isOpen={isCartOpen} setIsOpen={setIsCartOpen} cartAnimation={cartAnimation} />
            <CartSummary cartItems={cartItems} />
            <PaymentForm formData={formData} setFormData={setFormData} />
            <div className="text-end mt-3">
              <button className="btn btn-onback-light me-2" onClick={() => setStep(2)}>上一步：填寫寄送資訊</button>
              <button className="btn btn-brand" onClick={() => setStep(4)}>下一步：確認訂單</button>
            </div>
          </>
        )}

        {/* Step 4: 付款確認 */}
        {step === 4 && (
          <>
            <CartToggle cartItems={cartItems} setCartItems={setCartItems} isOpen={isCartOpen} setIsOpen={setIsCartOpen} cartAnimation={cartAnimation} />
            <CartSummary cartItems={cartItems} />
            <PaymentReview
              formData={formData}
              cartItems={cartItems}
              usedCredits={usedCredits}
              availableCredits={availableCredits}
              onBack={() => setStep(3)}
              onSubmit={handleSubmitOrder}
            />
          </>
        )}

        {/* Step 5: 訂單成功 */}
        {step === 5 && (
          <OrderSuccess orderNumber={orderNumber} />
        )}
      </div>
    </>
  );
}

export default AppCart;



