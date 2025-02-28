import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useUserStore = defineStore('user', () => {

  const user_status = ref(null);
  const user_id = ref(null);
  const user_detail = ref({});
  const error = ref(null);
  const passwordCode = ref(null);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post('/api/users/login', { email, password });
      user_status.value = data.user_status;
      user_id.value = data.user_id;
      localStorage.setItem('user_id', JSON.stringify(user_id.value));
      return data;
    } catch (err) {
      error.value = err.response?.data?.message || 'Giriş başarısız';
      throw err;
    }
  };

  const register = async (email, password, phone_number, cafe_name, full_name, address) => {
    try {
      const { data } = await axios.post('/api/users/register', {
        email, password, phone_number, cafe_name, full_name, address
      });
      return data;
    } catch (err) {
      error.value = err.response?.data?.message || 'Kayıt başarısız';
      throw err;
    }
  };

  const userDetail = async (user_id) => {
    try {
      const { data } = await axios.post(`/api/users/userdetail/${user_id}`);
      localStorage.setItem('user_detail', JSON.stringify(user_detail.value));
      user_detail.value = data.user_detail;
    } catch (err) {
      error.value = err.response?.data?.message || 'Kullanıcı detayı alınamadı';
      throw err;
    }
  };

  const update = async (password, phone_number, cafe_name, full_name, address) => {
    try {
      const { data } = await axios.put(`/api/users/update/${user_id.value}`, {
        password, phone_number, cafe_name, full_name, address
      });
      return data;
    } catch (err) {
      error.value = err.response?.data?.message || 'Güncelleme başarısız';
      throw err;
    }
  };

  const checkSession = async () => {
    try {
      const { data } = await axios.get('/api/users/usercontrol');
      user_status.value = data.user_status;
      user_id.value = data.user_id;
      return user_status.value;
    } catch (err) {
      user_status.value = null;
      user_id.value = null;
      throw err;
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/users/logout');
      user_status.value = null;
      user_id.value = null;
      user_detail.value = {};
      localStorage.removeItem('user_id');
    } catch (err) {
      error.value = err.response?.data?.message || 'Çıkış başarısız';
      throw err;
    }
  };

  const resetPassword = async (mail) => {
    try {
      const { data } = await axios.post(`/api/users/resetpassword/${mail}`);
      return data;
    } catch (err) {
      error.value = err.response?.data?.message || 'Şifre sıfırlama başarısız';
      throw err;
    }
  };

  const confirmationCode = async (code) => {
    try {
      const { data } = await axios.post(`/api/users/resetpasswordcontrol/${code}`);
      passwordCode.value = data;
      return data;
    } catch (err) {
      error.value = err.response?.data?.message || 'Doğrulama kodu geçersiz';
      throw err;
    }
  };

  return {
    user_status,
    user_id,
    user_detail,
    error,
    passwordCode,
    login,
    register,
    userDetail,
    update,
    checkSession,
    logout,
    resetPassword,
    confirmationCode
  };
});
