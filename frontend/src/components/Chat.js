// frontend/src/components/Chat.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chat.css";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [mood, setMood] = useState("neutral");
  const [arc, setArc] = useState(0);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });
      const botMessage = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);

      // Mood detection from backend
      if (res.data.mood) setMood(res.data.mood);

      // Arc growth
      setArc((prev) => Math.min(prev + 10, 100));
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chat-container">
      {/* Mood Orb */}
      <div className={`mood-orb ${mood}`} />

      {/* Emotional Arc */}
      <div className="emotional-arc">
        <div
          className="arc-fill"
          style={{ width: `${arc}%` }}
        ></div>
      </div>

      {/* Chat History */}
      <div className="chat-history">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Speak to your Companion..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}