// src/App.jsx
import React, { useState } from 'react';
import Quiz from './pages/Quiz';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Quiz />
    </>
  );
}

export default App;
