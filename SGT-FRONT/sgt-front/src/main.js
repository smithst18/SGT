import { createApp } from "vue";
import { createPinia } from "pinia";
import "../src/css/index.css"
import App from "./App.vue";
import router from "./router";
//charts y graficas
import VueChartkick from 'vue-chartkick';
import 'chartkick/chart.js';
//alert sweet alert 2  https://github.com/avil13/vue-sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);
app.use(createPinia());
app.use(VueChartkick);
app.use(VueSweetalert2);
app.use(router);

app.mount("#app");
