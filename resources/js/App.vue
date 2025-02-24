<script setup>
import { onMounted, watch } from 'vue';
import { useUserStore } from './stores/userStore.js';
import Header from './components/header.vue';
import Submenu from "./components/submenu.vue";

const authStore = useUserStore();

onMounted(async () => {
  await authStore.checkSession(); 
});

watch(() => authStore.user_status, (newVal) => {
  console.log("user_status:", newVal);
});
</script>

<template>
  <Header />
  <div class="container-fluid area site-margin">
    <div class="row area-box">
      <div class="col-md-3" v-if="authStore.user_status">
        <div class="area-left">
          <Submenu />
        </div>
      </div>
      <div class="col-md-9">
        <div class="area-right-box">
          <div class="area-right">
            <router-view />
          </div>          
        </div>
      </div>
    </div>      
  </div>
</template>
