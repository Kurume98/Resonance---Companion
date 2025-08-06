// 🌌 useActivation.js — Companion Hook for Scroll Phase Activation
import { useState, useEffect } from 'react';
import axios from 'axios';

const useActivation = (userId) => {
  const [activations, setActivations] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔍 Fetch activations when userId is available
  useEffect(() => {
    if (!userId) return;

    const fetchActivations = async () => {
      try {
        const response = await axios.get(
          `/api/activation/user/${userId}`
        );
        setActivations(response.data.activations);
      } catch (error) {
        console.error('🔥 Error fetching scroll activations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivations();
  }, [userId]);

  return { activations, loading };
};

export default useActivation;