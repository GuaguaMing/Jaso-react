// src/App.jsx
import React, { useState } from 'react';
import Quiz from './pages/Quiz';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <Quiz />
    </>
  );
}

export default App;
