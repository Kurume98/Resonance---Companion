import React from 'react';
import './styles.css';

const EmotionalArc = ({ moods }) => {
  return (
    <div className="emotional-arc">
      {moods.map((m, idx) => (
        <div
          key={idx}
          className="arc-point"
          title={m}
          style={{
            backgroundColor:
              m === 'happy' ? '#fcd34d' :
              m === 'sad' ? '#60a5fa' :
              m === 'calm' ? '#34d399' :
              m === 'energetic' ? '#f472b6' :
              m === 'angry' ? '#f87171' : '#8884d8'
          }}
        ></div>
      ))}
    </div>
  );
};

export default EmotionalArc;