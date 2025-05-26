<<<<<<< HEAD
=======
// src/App.jsx
import React from 'react';
>>>>>>> 73ec9058dc6dccc4de78c0fda59f9ca1a743a20a
import { Routes, Route } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;

>>>>>>> 73ec9058dc6dccc4de78c0fda59f9ca1a743a20a
