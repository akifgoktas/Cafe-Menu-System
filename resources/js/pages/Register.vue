<script setup>
import { onMounted, ref } from 'vue';

onMounted(async () => {

});
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="login-box">
          <h4 class="mb-5">Menü Yönetim Sistemine Üye Olabilirsiniz</h4>
            <label for="">İsminiz ve Soyisminiz</label>
            <input type="text" placeholder="Adınız Soyadınız" required>
            <label for="">Kafe İsminiz</label>
            <input type="text" name="" placeholder="Kafe İsminiz" required>
            <label for="">Telefon Numaranız</label>
            <input type="text" name="" placeholder="Telefon Numaranız" required>
            <label for="">E-Posta adresinizi giriniz.</label>
            <input type="email" placeholder="E-Posta" required>
            <label for="">Şifrenizi giriniz.</label>
            <input type="password" placeholder="Şifre" required>
            <button class="btn btn-new">Giriş Yap</button>
            <router-link to="/admin/login" class="pass-link">Zaten üye misiniz</router-link>
        </div>
      </div>
    </div>
  </div>
</template>