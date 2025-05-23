// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Quiz from './pages/Quiz';


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Quiz />} />
//         <Route path="/result" element={<Result />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

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
