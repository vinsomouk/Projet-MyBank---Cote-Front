import axiosInstance from '../axiosConfig';

export interface UserData {
  name: string;
  email: string;
  password: string;
}

export const loginUser = async (credentials: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post('/login', credentials, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      transformRequest: [(data) => JSON.stringify(data)],
    });

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return response.data;
    }
    throw new Error('No token received');
  } catch (error: any) {
    console.error('Login error details:', {
      request: error.config?.data,
      response: error.response?.data
    });
    throw error.response?.data || { error: 'Login failed' };
  }
};