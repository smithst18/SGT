import { createRouter, createWebHistory } from "vue-router";
import ticketsRoutes from '@/modules/ticket/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect:{ name:'login' },
    },
    {
      path: "/login",
      name:"login",
      component: () => import(/* webpackChunkName: "Login view "*/"@/views/LoginView.vue"),
    },
    {
      path: "/home",
      name:"home",
      component: () => import(/* webpackChunkName: "Login view "*/"@/views/HomeView.vue"),
      children:[
        {
          path: "",
          ...ticketsRoutes,
        },
      ]
    },
    { 
      path: '/:pathMatch(.*)*', 
      redirect:{ name:"login" }
    },
  ]
});

export default router;
