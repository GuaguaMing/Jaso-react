import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './pages/quiz';
import About from './pages/about';  // 如果已經有這個頁面

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quiz" element={<Quiz />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* 可以繼續加更多頁面 */}
      </Routes>
    </Router>
  );
}

export default App;
