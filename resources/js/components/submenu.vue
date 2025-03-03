<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const allRoutes = router.options.routes;

const submenuRoutes = allRoutes.filter(route => route.meta?.submenu);
</script>

<template>
  <div class="submenu">
    <ul>
      <li v-for="route in submenuRoutes" :key="route.name">
        <RouterLink :to="route.path" :class="{ active: $route.path === route.path }">
          {{ route.meta.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
