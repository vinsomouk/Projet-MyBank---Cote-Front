// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api', // Remplacez par l'URL de votre API Symfony
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;