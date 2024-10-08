import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import '@/styles/global.postcss';
import '@/styles/reset.postcss';
import '@/styles/fonts.postcss';

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
