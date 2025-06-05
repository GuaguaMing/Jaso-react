import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHome from './1home/AppHome';
import AppGuide from './guide/AppGuide';
import AppArticle from './article/AppArticle';
import Quiz from './quiz/Quiz';
import Result from './quiz/Result';
import MemberCenter from "./member/MemberCenter";
import AppLogin from "./login/AppLogin";
import AppShop from "./shop/AppShop";
import AppCart from "./shop-cart/AppCart";
import OrderSuccess from "./shop-cart/components/OrderSuccess";

function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<AppHome />} />
                <Route path="/guide" element={<AppGuide />} />
                <Route path="/article" element={<AppArticle />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/result" element={<Result />} />
                <Route path="/memberCenter" element={<MemberCenter/>}/>
                <Route path="/login" element={<AppLogin/>}/>
                <Route path="/shop" element={<AppShop/>}/>
                <Route path="/cart" element={<AppCart/>}/>
                <Route path="/cart/success" element={<OrderSuccess />} />
            </Routes>
        </main>
    )
}

export default App;