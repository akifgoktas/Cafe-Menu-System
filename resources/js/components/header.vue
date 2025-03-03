<script setup>
import logo from "@/img/logo2.png";
import { useUserStore } from '../stores/userStore.js';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useUserStore();
const router = useRouter();

const user_status = computed(() => authStore.user_status);

const logout = async () => {
  await authStore.logout();
  await router.push('/admin/login');
};

</script>

<template>
  <nav class="navbar nav-menu">
    <div class="container-fluid site-margin">
      <a class="navbar-brand">
        <img :src="logo" class="logo">
      </a>
      <ul class="nav header-menu">
        <li class="nav-item" v-if="user_status">
          <button @click="logout" class="btn btn-logout">Çıkış</button>
        </li>
        <li class="nav-item" v-if="$route.name !== 'Register' && !user_status">
          <RouterLink :to="{ name: 'Register' }" class="btn btn-logout">Kayıt Ol</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
