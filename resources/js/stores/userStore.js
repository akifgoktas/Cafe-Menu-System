/*import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useUserStore = defineStore('auth', () => {

  const user_status = ref(null);
  const user_id = ref(null);
  const user_detail = ref({});
  const error = ref(null);
  const passwordCode = ref(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/users/login', { email, password });
      user_status.value = response.data.user_status;
      user_id.value = response.data.user_id;
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || 'Giriş başarısız';
    }
  };

  const register = async (email, password, phone_number, cafe_name, full_name, address) => {
    try {
      const response = await axios.post('/api/users/register', { email, password, phone_number, cafe_name, full_name, address});
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || 'Kayıt Başarısız';
    }
  };

  const update = async (password, phone_number, cafe_name, full_name, address) => {
    try {
      const response = await axios.put(`/api/users/${user_id}`, {
        password,
        phone_number,
        cafe_name,
        full_name,
        address
      });
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || 'Güncelleme Başarısız';
    }
  };


  const logout = async () => {
    await axios.post('/api/users/logout');
    user_status.value = null;
  };

  const checkSession = async () => {
    try {
      const response = await axios.get('/api/users/usercontrol');
      user_status.value = response.data.user_status;
      user_id.value = response.data.user_id;
      return user_status.value;
    } catch (err) {
      user_status.value = null;
    }
  };

  const resetPassword = async (mail) => {
    try {
      const response = await axios.post(`/api/users/resetpassword/${mail}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  const confirmationCode = async (code) => {
    try {
      const response = await axios.post(`/api/users/resetpasswordcontrol/${code}`);
      passwordCode.value = response.data;
      return response.data;
    } catch (err) {
      throw err;
    }
  };

  const userDetail = async (user_id) => {
    try {
      const response = await axios.post(`/api/users/userdetail/${user_id}`);
      user_detail.value = response.data.user_detail;
    } catch (error) {
      throw error;
    }
  }

  return { user_status, user_id, error, passwordCode, user_detail, login, register, update, logout, checkSession, resetPassword, confirmationCode, userDetail};
});*/



import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('auth', {
  state: () => ({
    user_status: null, // State'leri bu şekilde tanımlayın
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