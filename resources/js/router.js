import { createRouter, createWebHistory } from 'vue-router';
import { userStore } from './stores/userStore.js';
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
    const authStore = userStore();

    if (!authStore.user) {
      await authStore.checkSession();
    }
    if (to.name === 'Login' || to.name === 'Register' || to.name === 'Resetpassword') {
      if (authStore.user?.user_status === true) {
        next({ name: 'Home' });
      } else {
        next();
      }
    } else {
      if (authStore.user?.user_status === true) {
        next();
      } else {
        next({ name: 'Login' });
      }
    }
  });

export default router;