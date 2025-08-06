import axios from 'axios';
import { createContext } from 'react';

export const ResonanceContext = createContext();

export const ResonanceProvider = ({ children }) => {
  const activateScroll = async (phase) => {
    try {
      await axios.post('http://localhost:5000/api/activation/activate', {
        userId: '123456789', // Replace with dynamic user ID
        phase,
        timestamp: new Date(),
      });
      console.log('Scroll Activated:', phase);
    } catch (err) {
      console.error('Activation Failed:', err);
    }
  };

  return (
    <ResonanceContext.Provider value={{ activateScroll }}>
      {children}
    </ResonanceContext.Provider>
  );
};