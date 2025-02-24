<script setup>
import { onMounted, ref } from 'vue';
import Swal from "sweetalert2";
import { userStore } from '../stores/userStore.js';

const auth = userStore();

onMounted(async () => {

});

const mail_input = ref('');
const password_input = ref();

const loginForm = async () => {
  const mail = mail_input.value;
  const password = password_input.value;

  if(mail == "" || password == ""){
    Swal.fire({
      icon: "error",
      title: "Boş alan bırakmayınız",
      text: "Tüm alanları girdiğinizden emin olun.",
      confirmButtonText: "Tamam",
    });
  } else {
      const response = await auth.login(mail, password);
      console.log(response)
      if (response.status === false) {
        Swal.fire({
          icon: "error",
          title: "Hatalı Giriş",
          text: "Mail veya şifreniz yanlış.",
          confirmButtonText: "Tamam",
          footer: '<a href="/admin/register">Üye değilseniz kayıt olabilirsiniz.</a>',
        });
      } else {
        Swal.fire({
          title: "Giriş Başarılı Yönlendiriliyorsunuz.",
          icon: "success",
          draggable: true
        });
      }
  }
};

</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="login-box">
          <h4 class="mb-5">Menü Yönetim Sistemine Giriş Yapabilirsiniz</h4>
            <label for="">E-Posta adresinizi giriniz.</label>
            <input type="email" v-model="mail_input" placeholder="E-Posta">
            <label for="">Şifrenizi giriniz.</label>
            <input type="password" v-model="password_input" placeholder="Şifre">
            <button @click="loginForm" class="btn btn-new">Giriş Yap</button>
          <router-link to="/admin/resetpassword" class="pass-link">Şifremi Unuttum</router-link>
        </div>
      </div>
    </div>
  </div>
</template>