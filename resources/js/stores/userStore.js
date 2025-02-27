import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('auth', {
  state: () => ({
    user_status: null,
    user_id: null,
    user_detail: {},
    error: null,
    passwordCode: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await axios.post('/api/users/login', { email, password });
        this.user_status = response.data.user_status;
        this.user_id = response.data.user_id;
        return response.data;
      } catch (err) {
        this.error = err.response?.data?.message || 'Giriş başarısız';
        throw err;
      }
    },

    async register(email, password, phone_number, cafe_name, full_name, address) {
      try {
        const response = await axios.post('/api/users/register', {
          email,
          password,
          phone_number,
          cafe_name,
          full_name,
          address,
        });
        return response.data;
      } catch (err) {
        this.error = err.response?.data?.message || 'Kayıt Başarısız';
        throw err;
      }
    },

    async update(password, phone_number, cafe_name, full_name, address) {
      try {
        const response = await axios.put(`/api/users/${this.user_id}`, {
          password,
          phone_number,
          cafe_name,
          full_name,
          address,
        });
        return response.data;
      } catch (err) {
        this.error = err.response?.data?.message || 'Güncelleme Başarısız';
        throw err;
      }
    },

    async logout() {
      try {
        await axios.post('/api/users/logout');
        this.user_status = null;
        this.user_id = null;
        this.user_detail = {};
      } catch (err) {
        this.error = err.response?.data?.message || 'Çıkış başarısız';
        throw err;
      }
    },

    async checkSession() {
      try {
        const response = await axios.get('/api/users/usercontrol');
        this.user_status = response.data.user_status;
        this.user_id = response.data.user_id;
        return this.user_status;
      } catch (err) {
        this.user_status = null;
        this.user_id = null;
        throw err;
      }
    },

    async resetPassword(mail) {
      try {
        const response = await axios.post(`/api/users/resetpassword/${mail}`);
        return response.data;
      } catch (err) {
        this.error = err.response?.data?.message || 'Şifre sıfırlama başarısız';
        throw err;
      }
    },

    async confirmationCode(code) {
      try {
        const response = await axios.post(`/api/users/resetpasswordcontrol/${code}`);
        this.passwordCode = response.data;
        return response.data;
      } catch (err) {
        this.error = err.response?.data?.message || 'Doğrulama kodu geçersiz';
        throw err;
      }
    },

    async userDetail(user_id) {
      try {
        const response = await axios.post(`/api/users/userdetail/${user_id}`);
        this.user_detail = response.data.user_detail;
      } catch (err) {
        this.error = err.response?.data?.message || 'Kullanıcı detayı alınamadı';
        throw err;
      }
    },
  },
});