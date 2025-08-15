// frontend/src/components/MoodOrb.js
import React from "react";
import "./MoodOrb.css";

const moodColors = {
  happy: "#FFD93D",
  sad: "#6C63FF",
  neutral: "#A0AEC0",
  excited: "#FF6B6B",
  calm: "#4ECDC4",
  stressed: "#F06543",
};

function MoodOrb({ mood }) {
  return (
    <div className="mood-orb-container">
      <div
        className="mood-orb"
        style={{
          backgroundColor: moodColors[mood] || moodColors["neutral"],
        }}
      >
        <span className="mood-label">{mood}</span>
      </div>
    </div>
  );
}

export default MoodOrb;