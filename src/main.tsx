import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Contact from './pages/Contact.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}

    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/movies/:id" element={<Movies />} /> */}
      </Routes>
    </Router>

  </React.StrictMode>,
)
