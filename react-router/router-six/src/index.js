import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Home />} />
      <Route path="/learn" element={<Navigate replace to="/myapps" />} />
      {/* by using navigate we can redirect the psth one to another here we r redirecting from path from learn to myapps */}
    </Routes>
  </Router>
);

function Home() {
  return (
    <div>
      <h1>Home route</h1>
    </div>
  )
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All Courses are listed here</h4>
      <Link to></Link>
    </div>
  )
}
reportWebVitals();
