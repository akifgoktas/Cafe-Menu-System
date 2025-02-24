import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const userStore = defineStore('auth', () => {
  const user = ref(null);
  const error = ref(null);
  const passwordCode = ref(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/login', { email, password });
      user.value = response.data.user;
      error.value = null;
    } catch (err) {
      error.value = err.response?.data?.message || 'Login failed';
    }
  };

  const logout = async () => {
    await axios.post('/api/logout');
    user.value = null;
  };

  const checkSession = async () => {
    try {
      const response = await axios.get('/api/usercontrol');
      user.value = response.data;
    } catch (err) {
      user.value = null;
    }
  };

  const resetPassword = async (mail) => {
    try {
      const response = await axios.post(`/api/users/resetpassword/${mail}`);
      user.value = response.data;
      return response.data;
    } catch (err) {
      user.value = null;
      throw err;
    }
  };

  const confirmationCode = async (code) => {
    try {
      const response = await axios.post(`/api/users/resetpasswordcontrol/${code}`);
      user.value = response.data;
      return response.data;
    } catch (err) {
      user.value = null;
      throw err;
    }
  };

  return { user, error, passwordCode, login, logout, checkSession, resetPassword, confirmationCode};
});