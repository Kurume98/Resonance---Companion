// utils/api.js

const API_BASE_URL = 'http://localhost:5000/api'; // 🌍 Replace with production URL when deployed

// 🌀 Universal Scroll Fetcher
export const fetchFromAPI = async (endpoint, method = 'GET', body = null) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Unknown error occurred');
    }

    return data;
  } catch (error) {
    console.error(`🔥 API Error: ${error.message}`);
    throw error;
  }
};

// 🔐 Scroll Bearer — Register New User
export const registerUser = (userData) =>
  fetchFromAPI('/users/register', 'POST', userData);

// 🔐 Scroll Bearer — Login
export const loginUser = (credentials) =>
  fetchFromAPI('/users/login', 'POST', credentials);

// 📜 Get Profile
export const getUserProfile = (userId) =>
  fetchFromAPI(`/users/${userId}`, 'GET');

// 🌱 Activate Phase
export const createActivation = (activationData) =>
  fetchFromAPI('/activations', 'POST', activationData);

// 🧭 Get Activations for User
export const getActivationsByUser = (userId) =>
  fetchFromAPI(`/activations/user/${userId}`, 'GET');