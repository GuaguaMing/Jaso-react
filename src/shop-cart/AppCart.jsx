import { useState, useRef, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Appcart.css';

import CheckoutProgress from './components/CheckoutProgress';
import CartToggle from './components/CartToggle';
import CartSummary from './components/CartSummary';
import RecentViewed from './components/RecentViewed';
import ShippingForm from './components/ShippingForm';
import PaymentForm from './components/PaymentForm';
import PaymentReview from './components/PaymentReview';

function AppCart({ cartItems = [], setCartItems = () => {} }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [step, setStep] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(true);
  
  // 如果父組件沒有傳入 cartItems 和 setCartItems，則使用內部狀態
  const [internalCartItems, setInternalCartItems] = useState([]);
  const [cartAnimation, setCartAnimation] = useState(false);
  
  // 判斷是否使用內部狀態管理
  const isUsingInternalState = cartItems.length === 0 && typeof setCartItems === 'function' && setCartItems.toString() === '() => {}';
  const currentCartItems = isUsingInternalState ? internalCartItems : cartItems;
  const currentSetCartItems = isUsingInternalState ? setInternalCartItems : setCartItems;

  // 從 localStorage 載入購物車資料
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored && isUsingInternalState) {
      try {
        const parsedItems = JSON.parse(stored);
        setInternalCartItems(parsedItems);
      } catch (error) {
        console.error('Error parsing cart items from localStorage:', error);
      }
    }
  }, [isUsingInternalState]);

  // 儲存購物車資料到 localStorage
  useEffect(() => {
    if (currentCartItems.length >= 0) {
      localStorage.setItem("cart", JSON.stringify(currentCartItems));
    }
  }, [currentCartItems]);

  // 購物車動畫效果
  useEffect(() => {
    if (currentCartItems.length === 0) return;
    setCartAnimation(true);
    const timer = setTimeout(() => setCartAnimation(false), 300);
    return () => { clearTimeout(timer); };
  }, [currentCartItems]);

  // 支援 ?reset=true 清空購物車
  useEffect(() => {
    if (searchParams.get('reset') === 'true') {
      currentSetCartItems([]);
      setStep(1);
    }
  }, [searchParams, currentSetCartItems]);

  const products = [
    { id: 1, name: "鈣心定植物鈣", desc: "維鈣+D3雙效配方", price: 365, image: "./images/Pd/Ca-default.svg" },
    { id: 2, name: "素超群膠囊", desc: "植萃綜合維他命配方", price: 420, image: "./images/Pd/N-default.svg" },
    { id: 3, name: "素D速補D", desc: "幫植萃維生素D（藻類D3）膠囊", price: 380, image: "./images/Pd/D-default.svg" },
    { id: 4, name: "油你真好植物膠囊", desc: "純素海藻OMEG3。", price: 250, image: "./images/Pd/Omg3-default.svg" },
    { id: 5, name: "補B不累口含錠", desc: "嚴選100%植物來源維生素B12", price: 520, image: "./images/Pd/B12-default.svg" },
    { id: 6, name: "鐵了心膠囊", desc: "嚴選100%植物來源 植萃鐵+B群補給", price: 490, image: "./images/Pd/Fe-default.svg" },
  ];

  const handleToggleCartItem = (product) => {
    console.log('handleToggleCartItem called with:', product); // 調試用
    
    currentSetCartItems((prevItems) => {
      console.log('Previous items:', prevItems); // 調試用
      
      const existingItem = prevItems.find(item => item.id === product.id);
      let newItems;
      
      if (existingItem) {
        // 若已存在，取消加入（移除整個商品）
        newItems = prevItems.filter(item => item.id !== product.id);
        console.log('Removing item, new items:', newItems); // 調試用
      } else {
        // 若不存在，加入購物車
        newItems = [...prevItems, { ...product, qty: 1 }];
        console.log('Adding item, new items:', newItems); // 調試用
      }
      
      return newItems;
    });
  };

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

  // 購物金
  const [usedCredits, setUsedCredits] = useState(0);
  const [availableCredits, setAvailableCredits] = useState(100);

  // shippingform表單
  const [localForm, setLocalForm] = useState({
    name: '',
    email: '',
    phone: '',
    recipient: '',
    recipientPhone: '',
    address: '',
    shippingMethod: '',
    note: ''
  });

  const shippingRef = useRef(null);
  
  useEffect(() => {
    setIsCartOpen(step === 1);
  }, [step]);

  const handleSubmitOrder = () => {
    const generatedOrderNumber = 'JS' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    navigate('/cart/success', { state: { orderNumber: generatedOrderNumber } });
  };

  return (
    <>
      <div className="container py-4">
        <div className="mb-3" style={{ height: "1.5rem", visibility: "hidden" }}>
          <div className='container-fluid'>
            <span className='navbar-brand'>結帳流程</span>
          </div>
        </div>

        <CheckoutProgress step={step} />

        {/* Step 1: 購物車 */}
        {step === 1 && (
          <>
            <CartToggle 
              cartItems={currentCartItems} 
              setCartItems={currentSetCartItems} 
              isOpen={isCartOpen} 
              setIsOpen={setIsCartOpen} 
              cartAnimation={cartAnimation} 
            />
            <CartSummary 
              cartItems={currentCartItems} 
              onNextStep={() => {
                setStep(2);
                setTimeout(() => {
                  shippingRef.current?.scrollIntoView({ behavior: 'smooth' });
                }, 0);
              }} 
            />
            <RecentViewed
              products={products}
              cartItems={currentCartItems}
              onToggleCartItem={handleToggleCartItem}
            />
          </>
        )}

        {/* Step 2: 配送資訊 */}
        {step === 2 && (
          <>
            <CartToggle 
              cartItems={currentCartItems} 
              setCartItems={currentSetCartItems} 
              isOpen={isCartOpen} 
              setIsOpen={setIsCartOpen} 
              cartAnimation={cartAnimation} 
            />
            <CartSummary cartItems={currentCartItems} />
            <div ref={shippingRef}>
              <ShippingForm formData={formData} setFormData={setFormData} onNextStep={() => setStep(3)} />
            </div>
            <RecentViewed
              products={products}
              cartItems={currentCartItems}
              onToggleCartItem={handleToggleCartItem}
            />
          </>
        )}

        {/* Step 3: 付款方式與發票 */}
        {step === 3 && (
          <>
            <CartToggle 
              cartItems={currentCartItems} 
              setCartItems={currentSetCartItems} 
              isOpen={isCartOpen} 
              setIsOpen={setIsCartOpen} 
              cartAnimation={cartAnimation} 
            />
            <CartSummary cartItems={currentCartItems} />
            <PaymentForm formData={formData} setFormData={setFormData} />
            <div className="text-end mt-3">
              <button className="btn btn-onback-light me-2" onClick={() => setStep(2)}>上一步：填寫寄送資訊</button>
              <button className="btn btn-brand" onClick={() => setStep(4)}>下一步：確認訂單</button>
            </div>
            <RecentViewed
              products={products}
              cartItems={currentCartItems}
              onToggleCartItem={handleToggleCartItem}
            />
          </>
        )}

        {/* Step 4: 付款確認 */}
        {step === 4 && (
          <>
            <CartToggle 
              cartItems={currentCartItems} 
              setCartItems={currentSetCartItems} 
              isOpen={isCartOpen} 
              setIsOpen={setIsCartOpen} 
              cartAnimation={cartAnimation} 
            />
            <CartSummary cartItems={currentCartItems} />
            <PaymentReview
              formData={formData}
              cartItems={currentCartItems}
              usedCredits={usedCredits}
              availableCredits={availableCredits}
              onBack={() => setStep(3)}
              onSubmit={handleSubmitOrder}
            />
            <RecentViewed
              products={products}
              cartItems={currentCartItems}
              onToggleCartItem={handleToggleCartItem}
            />
          </>
        )}

      </div>
    </>
  );
}

export default AppCart;