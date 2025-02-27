<script setup>
import { ref } from 'vue';
import Swal from "sweetalert2";
import { useUserStore } from '../stores/userStore.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const auth = useUserStore();

const mail_input = ref('');
const password_input = ref('');

const loginForm = async () => {
  const email = mail_input.value;
  const password = password_input.value;

  if (email === "" || password === "") {
    Swal.fire({
      icon: "error",
      title: "Boş alan bırakmayınız",
      text: "Tüm alanları girdiğinizden emin olun.",
      confirmButtonText: "Tamam",
    });
    return;
  }
  
  const response = await auth.login(email, password);
  if (response.status === false) {
    Swal.fire({
      icon: "error",
      title: "Hatalı Giriş",
      text: "Mail veya şifreniz yanlış.",
      confirmButtonText: "Tamam",
      footer: '<a href="/admin/register">Üye değilseniz kayıt olabilirsiniz.</a>',
    });
  } else {
    await Swal.fire({
      title: "Giriş Başarılı Yönlendiriliyorsunuz.",
      icon: "success",
      draggable: true,
      showConfirmButton: false,
      timer: 1500
    });
    router.push({ name: 'Home' });
  }
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="login-box form-group">
          <h4 class="mb-5">Menü Yönetim Sistemine Giriş Yapabilirsiniz</h4>
          <form @submit.prevent="loginForm" novalidate>
            <div class="form-group">
              <label for="email">E-Posta adresinizi giriniz.</label>
              <input id="email" type="email" v-model="mail_input" placeholder="E-Posta" required class="form-control">
            </div>
            <div class="form-group">
              <label for="password">Şifrenizi giriniz.</label>
              <input id="password" type="password" v-model="password_input" placeholder="Şifre" required class="form-control">
            </div>
            <button type="submit" class="btn btn-new">Giriş Yap</button>
          </form>
          <router-link to="/admin/resetpassword" class="pass-link">Şifremi Unuttum</router-link>
        </div>
      </div>
    </div>
  </div>
</template>