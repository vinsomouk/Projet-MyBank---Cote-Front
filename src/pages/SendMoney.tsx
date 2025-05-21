import React, { useState } from 'react';
import '../styles/SendMoney.css';

const SendMoney: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [label, setLabel] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      amount: parseFloat(amount),
      recipient,
      label,
      category,
    };

    console.log('Sending money to API:', data);
    alert('Transaction sent (demo)');
  };

  return (
    <div className="send-money-container">
      <h2>Send Money</h2>
      <form onSubmit={handleSubmit} className="send-money-form">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Recipient Name"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category (optional)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMoney;
