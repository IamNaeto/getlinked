import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Contact from './pages/Contact.tsx';
import Register from './pages/Register.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}

    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>

  </React.StrictMode>,
)
