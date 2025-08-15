// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Activation from './pages/Activation';
import Profile from './pages/Profile';
import MoodOrb from './components/MoodOrb';
import EmotionalArc from './components/EmotionalArc';

import './styles.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [mood, setMood] = useState('neutral');
  const [emotionalArc, setEmotionalArc] = useState([]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text }]);

    try {
      const res = await axios.post('http://localhost:5001/api/message', { text });
      const { reply, detectedMood } = res.data;

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
      setMood(detectedMood);
      setEmotionalArc((prev) => [...prev, detectedMood]);
    } catch (err) {
      console.error('Message send error:', err);
    }
  };

  return (
    <Router>
      <div className="scroll-shell">
        <Header />

        <main className="scroll-main">
          {/* Mood Orb and Arc always visible */}
          <div className="mood-arc-container">
            <MoodOrb mood={mood} />
            <EmotionalArc moods={emotionalArc} />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activate" element={<Activation onSend={sendMessage} messages={messages} />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;