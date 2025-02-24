<script setup>
import { onMounted, ref } from 'vue';
import { formStore } from '../stores/formStore.js';
import Swal from "sweetalert2";

const form = formStore();
const csrf = ref('');
const user = ref('');

onMounted(async () => {
  await form.csrfToken();
  csrf.value = form.csrf;
  console.log(form.csrf);
});

</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="login-box">
          <h4 class="mb-5">Menü Yönetim Sistemine Giriş Yapabilirsiniz</h4>
            <form action="/api/user/login" method="post">
            <input type="hidden" name="_token" :value="csrf">
            <label for="">E-Posta adresinizi giriniz.</label>
            <input type="email" placeholder="E-Posta" required>
            <label for="">Şifrenizi giriniz.</label>
            <input type="password" placeholder="Şifre" required>
            <button class="btn btn-new">Giriş Yap</button>
          </form>
          <router-link to="/admin/resetpassword" class="pass-link">Şifremi Unuttum</router-link>
        </div>
      </div>
    </div>
  </div>
</template>