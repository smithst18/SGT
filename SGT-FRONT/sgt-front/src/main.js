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
//font awesome 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFileCirclePlus,faFileCircleExclamation,faFileCircleCheck  } from '@fortawesome/free-solid-svg-icons'
//cookies

library.add(faFileCirclePlus,faFileCircleExclamation,faFileCircleCheck);



const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());
app.use(VueChartkick);
app.use(VueSweetalert2);
app.use(router);

app.mount("#app");
