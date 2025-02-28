<script setup>
import { ref } from 'vue';
import Swal from "sweetalert2";
import { useUserStore } from '../stores/userStore.js';
import { useRouter } from 'vue-router';

const auth = useUserStore();
const router = useRouter();

const mail_input = ref('');
const password_input = ref('');
const cafe_name_input = ref('');
const phone_input = ref('');
const name_input = ref('');
const address_input = ref('');

const registerForm = async () => {
  const email = mail_input.value;
  const password = password_input.value;
  const phone_number = phone_input.value;
  const cafe_name = cafe_name_input.value;
  const full_name = name_input.value;
  const address = address_input.value;

  if(email === "" || password === "" || full_name === "" || phone_number === "" || cafe_name === "" || address === ""){
    Swal.fire({
      icon: "error",
      title: "Boş alan bırakmayınız",
      text: "Tüm alanları girdiğinizden emin olun.",
      confirmButtonText: "Tamam",
    });
    return;
  }

  const response = await auth.register(email, password, phone_number, cafe_name, full_name, address);
  if (response.status === false) {
    Swal.fire({
      icon: "error",
      title: "Tüm alanlar doğru şekilde doldurulmalıdır",
      text: response.message,
      confirmButtonText: "Tamam",
    });
  } else {
    await Swal.fire({
      title: "Kaydınız başarılı bir şekilde yapılmıştır",
      icon: "success",
      draggable: true,
      showConfirmButton: false,
      timer: 1500
    });
    router.push({ name: 'Login' });
  }
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="login-box form-group">
          <h4 class="mb-5">Menü Yönetim Sistemine Üye Olabilirsiniz</h4>
          <form @submit.prevent="registerForm">
            <input type="text" v-model="name_input" placeholder="İsminiz ve Soyisminiz" required>
            <input type="text" v-model="cafe_name_input" placeholder="Kafe İsminiz" required>
            <input type="text" v-model="phone_input" placeholder="Telefon Numaranız" required>
            <input type="email" v-model="mail_input" placeholder="E-Posta" autocomplete="email" required>
            <input type="password" v-model="password_input" placeholder="Şifre" autocomplete="current-password" required>
            <input type="text" v-model="address_input" placeholder="Adres" required>
            <button type="submit" class="btn btn-new">Üye Ol</button>
          </form>
          <router-link :to="{ name: 'Login' }" class="pass-link">Zaten üye misiniz</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
