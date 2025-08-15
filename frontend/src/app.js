// frontend/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import MoodOrb from "./components/MoodOrb";
import EmotionalArc from "./components/EmotionalArc";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [mood, setMood] = useState("neutral");
  const [emotionalArc, setEmotionalArc] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    try {
      const res = await axios.post("http://localhost:5001/api/message", {
        text: input,
      });

      const { reply, detectedMood } = res.data;

      // Add bot reply
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setMood(detectedMood);

      // Update emotional arc
      setEmotionalArc((prev) => [...prev, detectedMood]);
    } catch (err) {
      console.error("Error sending message:", err);
    }

    setInput("");
  };

  return (
    <div className="app">
      <div className="ui-header">
        <MoodOrb mood={mood} />
        <h1>Resonance Companion</h1>
      </div>

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

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Speak or type to your Companion..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <div className="arc-container">
        <EmotionalArc moods={emotionalArc} />
      </div>
    </div>
  );
}

export default App;