import React from 'react';
import '../styles/Profile.css';

const Profile: React.FC = () => {
  return (
    <div className="profile-container">
      <h1>Profil</h1>

      <div className="profile-section">
        <h2>Personal Informations</h2>
        <p>Email : utilisateur@example.com</p>
        <p>Name : John Doe</p>
      </div>

      <div className="profile-section">
        <h2>Paramètres</h2>
        <ul>
          <li>🔒 Secutity Options</li>
          <li>🌍 Language / Country</li>
          <li>📧 Contact</li>
          <li className="danger">❌ Close Account</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
