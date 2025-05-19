import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, UserData } from '../services/userService';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData: UserData = { name, email, password };
    try {
      await registerUser(userData);
      setSuccess('Account create with success !');
      setError('');
      navigate('/login');
    } catch (error) {
      setError('Failes to create an account');
      setSuccess('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create an account</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Register;
