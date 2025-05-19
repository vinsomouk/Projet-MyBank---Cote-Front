// src/components/AddTransaction.tsx
import React, { useState } from 'react';
import { addTransaction, TransactionData } from '../services/transactionService';

const AddTransaction: React.FC = () => {
    const [amount, setAmount] = useState<number | ''>('');
    const [date, setDate] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [label, setLabel] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [type, setType] = useState<'ajout' | 'envoi'>('ajout');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const transactionData: TransactionData = { amount: Number(amount), date, name, label, category, type };
        try {
            const response = await addTransaction(transactionData);
            console.log('Transaction added:', response);
        } catch (error) {
            console.error('Error adding transaction:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder=" Montant" onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : '')} />
            <input type="datetime-local" onChange={(e) => setDate(e.target.value)} />
            <input type="text" placeholder="Nom" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Libellé" onChange={(e) => setLabel(e.target.value)} />
            <input type="text" placeholder="Catégorie" onChange={(e) => setCategory(e.target.value)} />
            <select onChange={(e) => setType(e.target.value as 'ajout' | 'envoi')}>
                <option value="ajout">Add</option>
                <option value="envoi">Send</option>
            </select>
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default AddTransaction;