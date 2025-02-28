<script setup>
  import AreaRightTop from "@/components/arearighttop.vue";
  import eye from "@/img/eye.svg";
  import { onMounted, ref } from 'vue';
  import { useUserStore } from '../stores/userStore.js';
  import { storeToRefs } from 'pinia';

  const authStore = useUserStore();
  const { user_id, user_detail } = storeToRefs(authStore);

  const fullName = ref('');
  const cafeName = ref('');
  const phoneNumber = ref();
  const eMail = ref();
  const Address = ref();
  const Slug = ref();

  onMounted(async () => {
    await authStore.userDetail(user_id.value);

    const {full_name, cafe_name, phone_number, email, address, slug} = {...user_detail.value};

    fullName.value = full_name;
    cafeName.value = cafe_name;
    phoneNumber.value = phone_number;
    eMail.value = email;
    Address.value = address;
    Slug.value = slug;

    // console.log(user_id.value);
    // console.log({...user_detail.value})
    // console.log(full_name)
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
          <p class="setting-title">{{phoneNumber}}</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="title-box">
          <label class="form-label">E-Posta</label>
          <p class="setting-title">{{eMail}}</p>
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
          <p class="setting-title">{{cafeName}}</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="title-box">
          <label class="form-label">Adresiniz</label>
          <p class="setting-title">{{Address}}</p>
        </div>
      </div>
      <div class="col-md-12">
        <router-link to="/admin/userupdate" class="btn btn-edit">Düzenle</router-link>
      </div>
    </div>
  </div>
</template>