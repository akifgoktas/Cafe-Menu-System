<script setup>
  import AreaRightTop from "@/components/arearighttop.vue";
  import eye from "@/img/eye.svg";
</script>

<template>
  <AreaRightTop />
  <div class="container-fluid setting-home">
    <div class="row">
      <div class="col-md-6">
        <div class="title-box">
          <label class="form-label">İsim Soyisim</label>
          <p class="setting-title">Neslihan İpek</p>        
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
        <button class="btn btn-edit">Düzenle</button>
      </div>
    </div>
  </div>
</template>