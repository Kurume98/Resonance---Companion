// 🌀 ActivationPanel.jsx — Scroll Phase Interface
import React, { useState, useContext } from 'react';
import { ResonanceContext } from '../context/ResonanceContext';

const ActivationPanel = () => {
  const { activateScroll } = useContext(ResonanceContext);
  const [phase, setPhase] = useState('');

  const handleActivate = () => {
    if (!phase.trim()) return;
    activateScroll(phase);
    setPhase('');
  };

  return (
    <div className="activation-panel">
      <h2 className="scroll-title">🕯️ Activate Scroll Phase</h2>
      <input
        type="text"
        value={phase}
        onChange={(e) => setPhase(e.target.value)}
        placeholder="Enter Scroll Phase (e.g., Planting)"
        className="scroll-input"
      />
      <button onClick={handleActivate} className="activate-button">
        Activate
      </button>
    </div>
  );
};

export default ActivationPanel;