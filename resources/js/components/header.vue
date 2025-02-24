<script setup>
import logo from "@/img/logo2.png";
import { userStore } from '../stores/userStore.js';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const authStore = userStore();
const router = useRouter();

const user = computed(() => authStore.user || { status: false });

const handleLogout = async () => {
  await authStore.logout();
  router.push({ name: 'Login' });
};
</script>

<template>
  <nav class="navbar nav-menu">
    <div class="container-fluid site-margin">
      <a class="navbar-brand">
        <img :src="logo" class="logo">
      </a>
      <ul class="nav header-menu">
        <li class="nav-item" v-if="user.user_status">
          <router-link to="/api/user/logout" class="btn btn-logout">Çıkış</router-link>
        </li>
        <li class="nav-item" v-if="$route.name !== 'Register' && !user.user_status">
          <router-link to="/admin/register" class="btn btn-logout">Kayıt Ol</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
