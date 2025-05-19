// src/pages/Dashboard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const transactions = [
    { id: 1, name: 'Apple', amount: -9.99, date: '01/01/2001' },
    { id: 2, name: 'Apple', amount: -9.99, date: '01/01/2001' },
    { id: 3, name: 'Jane Doe', amount: 9.99, date: '01/01/2001' },
  ];

  const balance = 320.51;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>MyBank</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="dashboard-balance">
        <h2>Solde : {balance.toFixed(2)} €</h2>
      </div>

      <div className="dashboard-card">
        <div className="card-content">
          <p className="card-number">XXXX - XXXX - XXXX - XXXX</p>
          <p className="card-label">Carte Bancaire</p>
        </div>
      </div>

      <div className="dashboard-actions">
        <button onClick={() => navigate('/add-money')}>Add money from a card</button>
        <button onClick={() => navigate('/send-money')}>Send Money</button>
      </div>

      <div className="dashboard-transactions">
        <h3>Last Operations</h3>
        <ul>
          {transactions.map((tx) => (
            <li key={tx.id} className={tx.amount < 0 ? 'tx-negative' : 'tx-positive'}>
              <span>{tx.name}</span>
              <span>{tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)} €</span>
              <span>{tx.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
