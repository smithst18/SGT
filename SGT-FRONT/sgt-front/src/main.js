import { createApp } from "vue";
import { createPinia } from "pinia";
import "../src/css/index.css"
import App from "./App.vue";
import router from "./router";
//charts y graficas
import VueChartkick from 'vue-chartkick';
import 'chartkick/chart.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueChartkick);

app.mount("#app");
