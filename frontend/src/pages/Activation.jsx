// 📜 Activation.jsx — Scroll Activation + Resonance Companion Chat
import React, { useState, useContext } from "react";
import { ResonanceContext } from "../context/ResonanceContext";
import MoodOrb from "../components/MoodOrb";
import EmotionalArc from "../components/EmotionalArc";
import axios from "axios";

const moodColors = {
  neutral: "#e0e0e0",
  joyful: "#ffe066",
  calm: "#a3d8f4",
  intense: "#ff6b6b",
  reflective: "#c3aed6",
};

const Activation = () => {
  // Scroll phase input
  const [phase, setPhase] = useState("");
  const { activateScroll } = useContext(ResonanceContext);

  // Chat state
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [mood, setMood] = useState("neutral");
  const [emotionalArc, setEmotionalArc] = useState([]);

  // Handle scroll activation
  const handleActivation = () => {
    if (!phase) return;
    activateScroll(phase);
    setPhase("");
  };

  // Send message to backend
  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    try {
      const res = await axios.post("http://localhost:5001/api/message", {
        text: input,
      });

      const { reply, detectedMood } = res.data;

      // Add bot reply
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setMood(detectedMood || "neutral");
      setEmotionalArc((prev) => [...prev, detectedMood || "neutral"]);
    } catch (err) {
      console.error("Error sending message:", err);
    }

    setInput("");
  };

  return (
    <div
      className="activation-page"
      style={{
        backgroundColor: moodColors[mood] || moodColors.neutral,
        transition: "background-color 1s ease",
        minHeight: "100vh",
      }}
    >
      {/* Scroll Activation Panel */}
      <div className="activation-panel">
        <input
          type="text"
          placeholder="Enter Scroll Phase (e.g., planting)"
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
        />
        <button onClick={handleActivation}>Activate Scroll</button>
      </div>

      {/* MoodOrb + Title */}
      <div className="ui-header">
        <MoodOrb mood={mood} />
        <h2>Resonance Companion</h2>
      </div>

      {/* Chat Container */}
      <div className="chat-container">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-bubble ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Speak or type to your Companion..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      {/* Emotional Arc Tracker */}
      <div className="arc-container">
        <EmotionalArc moods={emotionalArc} />
      </div>
    </div>
  );
};

export default Activation;