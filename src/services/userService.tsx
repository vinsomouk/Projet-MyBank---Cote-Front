import axios from '../axiosConfig';

// ✅ Interface pour l'inscription
export interface UserData {
  name: string;
  email: string;
  password: string;
}

// ✅ Inscription d'un utilisateur
export const registerUser = async (userData: UserData) => {
  const response = await axios.post('/users/register', userData);
  return response.data;
};

// ✅ Connexion d'un utilisateur
export const loginUser = async (credentials: { email: string; password: string }) => {
  const response = await axios.post('/users/login', credentials);
  const { token } = response.data;
  localStorage.setItem('token', token);
  return token;
};
