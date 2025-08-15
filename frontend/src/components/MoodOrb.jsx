import React from 'react';
import './styles.css';

const MoodOrb = ({ mood }) => {
  const moodColors = {
    neutral: '#8884d8',
    happy: '#fcd34d',
    sad: '#60a5fa',
    calm: '#34d399',
    energetic: '#f472b6',
    angry: '#f87171'
  };

  const orbStyle = {
    backgroundColor: moodColors[mood] || moodColors['neutral'],
    boxShadow: `0 0 20px ${moodColors[mood] || moodColors['neutral']}`
  };

  return (
    <div className="mood-orb" style={orbStyle}>
      <span className="mood-text">{mood}</span>
    </div>
  );
};

export default MoodOrb;