import React, { useState } from 'react';
import '../styles/AddMoney.css';

const AddMoney: React.FC = () => {
  const [method, setMethod] = useState<'paypal' | 'card'>('paypal');
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const paymentData = {
      method,
      amount,
      ...(method === 'card'
        ? { cardNumber, expirationDate, cvv }
        : { email, password }),
    };
    console.log('Sending payment data:', paymentData);
    alert('Payment submitted (demo only)');
  };

  return (
    <div className="add-money-container">
      <h2>Add Money</h2>
      <form onSubmit={handleSubmit} className="add-money-form">
        <label htmlFor="method">Select method</label>
        <select id="method" value={method} onChange={(e) => setMethod(e.target.value as 'paypal' | 'card')}>
          <option value="paypal">PayPal</option>
          <option value="card">Card</option>
        </select>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        {method === 'card' ? (
          <>
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Expiration Date (MM/YY)"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </>
        ) : (
          <>
            <input
              type="email"
              placeholder="PayPal Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="PayPal Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </>
        )}

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddMoney;
