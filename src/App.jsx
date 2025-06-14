import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHome from './1home/AppHome';
import AppGuide from './guide/AppGuide';
import AppArticle from './article/AppArticle';
import Article3 from './article/Article3';
import Quiz from './quiz/Quiz';
import Result from './quiz/Result';
import MemberCenter from "./member/MemberCenter";
import AppLogin from "./login/AppLogin";
import AppShop from "./shop/AppShop";
import AppCart from "./shop-cart/AppCart";
import OrderSuccess from './shop-cart/components/OrderSuccess';

import Layout from './1components/Layout'; //首頁＋footer


function App() {
    return (
            <Routes>
                {/* 不套用 Layout 的頁面 */}
                <Route path="/quiz" element={<Quiz />} />

                {/* 套用 Layout 的頁面 */}
                <Route element={<Layout />}>

                    <Route path="/" element={<AppHome />} />
                    <Route path="/guide" element={<AppGuide />} />
                    <Route path="/article" element={<AppArticle />} />
                    <Route path="/article3" element={<Article3 />} />

                    <Route path="/memberCenter" element={<MemberCenter />} />
                    <Route path="/login" element={<AppLogin />} />
                    <Route path="/shop" element={<AppShop />} />
                    <Route path="/cart" element={<AppCart />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/cart/success" element={<OrderSuccess />} />
                </Route>
            </Routes>
    );
}
export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AppHome from './1home/AppHome';
// import AppGuide from './guide/AppGuide';
// import AppArticle from './article/AppArticle';
// import Quiz from './quiz/Quiz';
// import Result from './quiz/Result';
// import MemberCenter from "./member/MemberCenter";
// import AppLogin from "./login/AppLogin";
// import AppShop from "./shop/AppShop";
// import AppCart from "./shop-cart/AppCart";

// import Layout from './components/Layout'; //整合嘗試1

// function App() {
//     return (
//         <main>
//             <Routes>
//                 <Route path="/" element={<AppHome />} />
//                 <Route path="/guide" element={<AppGuide />} />
//                 <Route path="/article" element={<AppArticle />} />
//                 <Route path="/quiz" element={<Quiz />} />
//                 <Route path="/result" element={<Result />} />
//                 <Route path="/memberCenter" element={<MemberCenter/>}/>
//                 <Route path="/login" element={<AppLogin/>}/>
//                 <Route path="/shop" element={<AppShop/>}/>
//                 <Route path="/cart" element={<AppCart/>}/>
//             </Routes>
//         </main>
//     )
// }

// export default App;
