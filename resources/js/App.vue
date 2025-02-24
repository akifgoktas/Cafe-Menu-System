<script setup>
import { computed } from 'vue';
import { userStore } from './stores/userStore.js';
import Header from './components/header.vue';
import Submenu from "./components/submenu.vue";

const authStore = userStore();

const user = computed(() => authStore.user || { user_status: false });
</script>

<template>
  <Header />
  <div class="container-fluid area site-margin">
    <div class="row area-box">
      <div class="col-md-3" v-if="user.user_status">
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