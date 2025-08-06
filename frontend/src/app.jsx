// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Activation from './pages/Activation';
import Profile from './pages/Profile';

import './styles.css';

function App() {
  return (
    <Router>
      <div className="scroll-shell">
        <Header />

        <main className="scroll-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activate" element={<Activation />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;