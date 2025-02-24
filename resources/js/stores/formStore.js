import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const formStore = defineStore('form', () => {
  const csrf = ref(null);

  const csrfToken = async () => {
    const response = await axios.get('/csrf-token');
    csrf.value = response.data.csrf_token;
    //console.log(csrf.value)
  } 

  return { csrf, csrfToken };
});