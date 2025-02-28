<script setup>
import { onMounted, ref, watch } from 'vue';
import Swal from "sweetalert2";
import { useUserStore } from '../stores/userStore.js';
import { useRouter } from 'vue-router';
import AreaRightTop from "@/components/arearighttop.vue";

const authStore = useUserStore();
const router = useRouter();

onMounted(async () => {
  console.log(authStore.user_id)
});

const password_input = ref('');
const cafe_name_input = ref('');
const phone_input = ref('');
const name_input = ref('');
const address_input = ref('');


const updateForm = async () => {
  const password = password_input.value;
  const phone_number = phone_input.value;
  const cafe_name = cafe_name_input.value;
  const full_name = name_input.value;
  const address = address_input.value;

  const response = await auth.update(password, phone_number, cafe_name, full_name, address);
  if (response.status === false) {
    Swal.fire({
      icon: "error",
      title: "Tüm alanlar doğru şekilde doldurulmalıdır",
      text: response.message,
      confirmButtonText: "Tamam",
    });
  } else {
    await Swal.fire({
      title: "Bilgileriniz başarılı bir şekilde güncellenmiştir",
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
  <AreaRightTop />
  <div class="container-fluid setting-home">
    <div class="form-group">
      <form @submit.prevent="updateForm" novalidate>
        <div class="row">  
          <div class="col-md-6">
            <div class="title-box">
              <label class="form-label">Adınız Soyadınız</label>
              <input type="email" v-model="name_input" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="title-box">
              <label class="form-label">Telefon Numaranız</label>
              <input type="email" v-model="phone_input" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="title-box">
              <label class="form-label">Kafe İsminiz</label>
              <input type="email" v-model="cafe_name_input" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="title-box">
              <label class="form-label">Adresiniz</label>
              <input type="email" v-model="address_input" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="title-box">
              <label class="form-label">Şifreniz</label>
              <input type="password" v-model="password_input" class="form-control">
            </div>
          </div>
          <div class="col-md-12">
            <button class="btn btn-edit">Güncelle</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>