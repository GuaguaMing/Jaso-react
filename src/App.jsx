import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHome from './1home/AppHome';
import AppGuide from './guide/AppGuide';
import AppArticle from './article/AppArticle';
import Quiz from './quiz/Quiz';
import MemberCenter from "./member/MemberCenter";
import AppShop from "./shop/AppShop";

function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<AppHome />} />
                <Route path="/guide" element={<AppGuide />} />
                <Route path="/article" element={<AppArticle />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/memberCenter" element={<MemberCenter/>}/>
                <Route path="/shop" element={<AppShop/>}/>
            </Routes>
        </main>
    )
}

export default App;