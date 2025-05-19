import React, { useState } from 'react';
import { loginUser } from '../services/userService';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser({ email, password });
      navigate('/dashboard');
    } catch (err) {
      alert('Wrong Credentials');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <input
          type="email"
          placeholder="Email or Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>

        {/* ✅ Lien vers la page d'inscription */}
        <p className="register-link">
          Pas encore de compte ? <Link to="/register">Créer un compte</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
