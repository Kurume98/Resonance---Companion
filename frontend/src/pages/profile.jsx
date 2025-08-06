// 🧬 Profile.jsx — Scroll Bearer Identity View

import React, { useContext } from 'react';
import { ResonanceContext } from '../context/ResonanceContext';

const Profile = () => {
  const { user } = useContext(ResonanceContext);

  if (!user) {
    return <p>🕊️ No Scroll Bearer Active</p>;
  }

  return (
    <div className="profile-container">
      <h2>👤 Scroll Bearer Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bearer ID:</strong> {user.id}</p>
    </div>
  );
};

export default Profile;