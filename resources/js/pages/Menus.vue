<script setup>
  import AreaRightTop from "@/components/arearighttop.vue";
  import menu from "../img/menu.png";
  import edit from "../img/edit.png";
  import dlt from "../img/delete.png";
</script>

<template>
    <AreaRightTop />
    <div class="table-top">
        <p class="m-0">Sistemdeki tüm menüleri görüntülüyorsunuz.</p>
        <RouterLink :to="{ name: 'MenuAdd'}" class="btn btn-new">Yeni Menü Ekle</RouterLink>
      </div>
    <div class="container-fluid menus">
      <div class="row">
        <div class="col-md-4">
          <div class="menu-box">
            <RouterLink :to="{ name: 'MenuDetail', params: { id: '5' }}" class="menu-button menu-button-edit"><img :src="edit" alt=""></RouterLink>
            <button class="menu-button menu-button-delete"><img :src="dlt" alt=""></button>
            <span>
              <img :src="menu" class="box-img" alt="">
              <p class="m-0">Yaz Menüsü</p>
            </span>
          </div>
        </div>
      </div>
    </div>
</template>