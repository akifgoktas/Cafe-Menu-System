<script setup>
  import AreaRightTop from "@/components/arearighttop.vue";
  import eye from "@/img/eye.svg";
  import { onMounted, ref } from 'vue';
  import { useUserStore } from '../stores/userStore.js';
  import { storeToRefs } from 'pinia';

  const authStore = useUserStore();
  const { user_id, user_detail } = storeToRefs(authStore);

  onMounted(async () => {
    await authStore.userDetail(user_id.value);

    const {full_name, cafe_name, phone_number, email, address, slug} = {...authStore.user_detail};

    console.log(user_id.value);
    console.log(user_detail.value)


  });
</script>

<template>
  <AreaRightTop />
  <div class="container-fluid setting-home">
    <div class="row">
      <div class="col-md-6">
        <div class="title-box">
          <label class="form-label">İsim Soyisim</label>
          <p class="setting-title">{{ fullName }}</p>        
        </div>
      </div>
      <div class="col-md-6">
        <div class="title-box">
          <label class="form-label">Telfon Numarası</label>
          <p class="setting-title">+90 555 555 55 55</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="title-box">
          <label class="form-label">E-Posta</label>
          <p class="setting-title">neslihan.ipek@mail.com</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="title-box">
          <label class="form-label">Şifreniz</label>
          <p class="setting-title">*****************</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="title-box">
          <label class="form-label">Kafe İsmi</label>
          <p class="setting-title">Cafe Neslihan</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="title-box">
          <label class="form-label">Adresiniz</label>
          <p class="setting-title">... mah. ... cd. ... sk. ilçe/il</p>
        </div>
      </div>
      <div class="col-md-12">
        <router-link to="/admin/userupdate" class="btn btn-edit">Düzenle</router-link>
      </div>
    </div>
  </div>
</template>