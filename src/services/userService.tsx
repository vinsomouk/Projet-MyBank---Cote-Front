// src/services/userService.ts
import axios from '../axiosConfig.tsx';

export interface UserData {
    name: string;
    email: string;
    password: string;
}

export const registerUser  = async (userData: UserData) => {
    const response = await axios.post('/users/register', userData);
    return response.data;
};

export const loginUser  = async (credentials: { email: string; password: string }) => {
    const response = await axios.post('/users/login', credentials);
    return response.data;
};