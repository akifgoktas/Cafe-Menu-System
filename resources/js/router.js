import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from './stores/userStore.js';
import Home from './pages/Home.vue';
import Categories from './pages/Categories.vue';
import Products from './pages/Products.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Resetpassword from './pages/ResetPassword.vue';
import CategoryAdd from "./pages/CategoryAdd.vue";
import UserUpdate from "./pages/UserUpdate.vue";
import Menus from './pages/Menus.vue';

const routes = [
    { path: '/admin', name: 'Home', component: Home, meta: { title: 'Profil Bilgileri', submenu: true } },
    { path: '/admin/kategoriler', name: 'Categories', component: Categories, meta: { title: 'Kategoriler', submenu: true } },
    { path: '/admin/urunler', name: 'Products', component: Products, meta: { title: 'Ürünler', submenu: true } },
    { path: '/admin/login', name: 'Login', component: Login, meta: { title: 'Giriş', submenu: false } },
    { path: '/admin/register', name: 'Register', component: Register, meta: { title: 'Kayıt', submenu: false } },
    { path: '/admin/resetpassword', name: 'ResetPassword', component: Resetpassword, meta: { title: 'Şifre Sıfırlama', submenu: false } },
    { path: '/admin/userupdate', name: 'UserUpdate', component: UserUpdate, meta: { title: 'Profil Bilgileri Güncelleme', submenu: false } },
    { path: '/admin/categoryadd', name: 'CategoryAdd', component: CategoryAdd, meta: { title: 'Kategori Ekleme', submenu: false } },
    { path: '/admin/menuler', name: 'Menus', component: Menus, meta: { title: 'Menüler', submenu: true } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useUserStore();
  if (authStore.user_status === null) {
    await authStore.userControl();
  }

  if (!authStore.user_status) {
    if (['Login', 'Register', 'ResetPassword'].includes(to.name)) {
      return next();
    }
    return next({ name: 'Login' });
  }

  if (authStore.user_status) {
    if (['Login', 'Register', 'ResetPassword'].includes(to.name)) {
      return next({ name: 'Home' });
    }
    return next();
  }

  next();
});

export default router;