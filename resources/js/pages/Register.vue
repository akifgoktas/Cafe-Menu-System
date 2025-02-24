<script setup>
import { onMounted, ref } from 'vue';
import Swal from "sweetalert2";
import { userStore } from '../stores/userStore.js';

const auth = userStore();

onMounted(async () => {

});

const mail_input = ref('');
const password_input = ref();
const cafe_name_input = ref('');
const phone_input = ref();
const name_input = ref('');
const address_input = ref('');

const registerForm = async () => {
  const email = mail_input.value;
  const password = password_input.value;
  const phone_number = phone_input.value;
  const cafe_name = cafe_name_input.value;
  const full_name = name_input.value;
  const address = address_input.value;

  if(email == "" || password == "" || full_name == "" || phone_number == "" || cafe_name == "" || address == ""){
    Swal.fire({
      icon: "error",
      title: "Boş alan bırakmayınız",
      text: "Tüm alanları girdiğinizden emin olun.",
      confirmButtonText: "Tamam",
    });
  } else {
      const response = await auth.register(email, password, phone_number, cafe_name, full_name, address);
      console.log(response)
      if (response.status === false) {
        Swal.fire({
          icon: "error",
          title: "Tüm alanlar doğru şekilde doldurulmalıdır",
          text: response.message,
          confirmButtonText: "Tamam",
        });
      } else {
        Swal.fire({
          title: "Kaydınız başarılı bir şekilde yapılmıştır",
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
          <h4 class="mb-5">Menü Yönetim Sistemine Üye Olabilirsiniz</h4>
            <label for="">İsminiz ve Soyisminiz</label>
            <input type="text" v-model="name_input" placeholder="Adınız Soyadınız">
            <label for="">Kafe İsminiz</label>
            <input type="text" v-model="cafe_name_input" placeholder="Kafe İsminiz">
            <label for="">Telefon Numaranız</label>
            <input type="text" v-model="phone_input" placeholder="Telefon Numaranız">
            <label for="">E-Posta adresinizi giriniz.</label>
            <input type="email" v-model="mail_input" placeholder="E-Posta">
            <label for="">Şifrenizi giriniz.</label>
            <input type="password" v-model="password_input" placeholder="Şifre">
            <label for="">Adresinizi giriniz.</label>
            <input type="text" v-model="address_input" placeholder="Adres">
            <button @click="registerForm" class="btn btn-new">Giriş Yap</button>
            <router-link to="/admin/login" class="pass-link">Zaten üye misiniz</router-link>
        </div>
      </div>
    </div>
  </div>
</template>