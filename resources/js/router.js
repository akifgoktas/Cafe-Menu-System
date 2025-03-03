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
import MenuDetail from './pages/MenuDetail.vue';
import MenuAdd from './pages/MenuAdd.vue';
import ProductAdd from './pages/ProductAdd.vue';
import ProductUpdate from './pages/ProductUpdate.vue';

const routes = [
  { path: '/admin', name: 'Home', component: Home, meta: { title: 'Profil Bilgileri', submenu: true, order: 1 } },
  { path: '/admin/kategoriler', name: 'Categories', component: Categories, meta: { title: 'Kategoriler', submenu: true, order: 3 } },
  { path: '/admin/urunler', name: 'Products', component: Products, meta: { title: 'Ürünler', submenu: true, order: 4 } },
  { path: '/admin/urun-ekle', name: 'ProductUpdate', component: ProductUpdate, meta: { title: 'Ürün Ekleme', submenu: false, order: 4 } },
  { path: '/admin/urun/:id', name: 'ProductAdd', component: ProductAdd, meta: { title: 'Ürün Güncelleme', submenu: false, order: 0 } },
  { path: '/admin/giris', name: 'Login', component: Login, meta: { title: 'Giriş', submenu: false, order: 0 } },
  { path: '/admin/kayit', name: 'Register', component: Register, meta: { title: 'Kayıt', submenu: false, order: 0 } },
  { path: '/admin/sifre-sifirlama', name: 'ResetPassword', component: Resetpassword, meta: { title: 'Şifre Sıfırlama', submenu: false, order: 0 } },
  { path: '/admin/kullanici-guncelleme', name: 'UserUpdate', component: UserUpdate, meta: { title: 'Profil Bilgileri Güncelleme', submenu: false, order: 0 } },
  { path: '/admin/kategori-ekle', name: 'CategoryAdd', component: CategoryAdd, meta: { title: 'Kategori Ekleme', submenu: false, order: 0 } },
  { path: '/admin/menuler', name: 'Menus', component: Menus, meta: { title: 'Menüler', submenu: true, order: 2 } },
  { path: '/admin/menu/:id', name: 'MenuDetail', component: MenuDetail, meta: { title: 'Menü', submenu: false, order: 0 } },
  { path: '/admin/menu-ekle', name: 'MenuAdd', component: MenuAdd, meta: { title: 'Menü Ekle', submenu: false, order: 0 } },
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