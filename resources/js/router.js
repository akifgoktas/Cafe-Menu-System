import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from './stores/userStore.js';
import Home from './pages/Home.vue';
import Categories from './pages/Categories.vue';
import Products from './pages/Products.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Resetpassword from './pages/ResetPassword.vue';

const routes = [
    { path: '/admin', name: 'Home', component: Home },
    { path: '/admin/kategoriler', name: 'Categories', component: Categories },
    { path: '/admin/urunler', name: 'Products', component: Products },
    { path: '/admin/login', name: 'Login', component: Login },
    { path: '/admin/register', name: 'Register', component: Register },
    { path: '/admin/resetpassword', name: 'Resetpassword', component: Resetpassword },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useUserStore();

  if (authStore.user_status === null) {
    await authStore.checkSession();
  }
  if (!authStore.user_status) {
    if (['Login', 'Register', 'ResetPassword'].includes(to.name)) {
      return next();
    } else {
      return next({ name: 'Login' });
    }
  }
  if (authStore.user_status) {
    if (['Login', 'Register', 'ResetPassword'].includes(to.name)) {
      return next({ name: 'Dashboard' });
    }
    return next();
  }

  next();
});

export default router;