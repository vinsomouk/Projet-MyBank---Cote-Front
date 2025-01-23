// src/services/transactionService.ts
import axios from '../axiosConfig';

export interface TransactionData {
    amount: number;
    date: string; // Utilisez 'string' pour le format ISO de la date
    name: string;
    label: string;
    category: string;
    type: 'ajout' | 'envoi'; // Limiter les valeurs possibles
}

export const addTransaction = async (transactionData: TransactionData) => {
    const response = await axios.post('/transactions', transactionData);
    return response.data;
};

export const getTransactions = async () => {
    const response = await axios.get('/transactions');
    return response.data;
};