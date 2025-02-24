import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/app.css';
import '../css/responsive.css';
import { createPinia } from 'pinia';

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app');
