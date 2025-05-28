import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import AppHome from './1home/AppHome';

function App() {
    return (
        <>   <main>
                <Routes>
                    <Route path="/" element={<AppHome />}/>
                </Routes>
            </main></>
    )
}

export default App;