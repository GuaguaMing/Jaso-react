import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';

import App from './App';
import Quiz from './pages/Quiz';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/result" element={<Quiz />} />
    </Routes>
  </BrowserRouter>
);
