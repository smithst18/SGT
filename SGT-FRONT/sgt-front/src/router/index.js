import { createRouter, createWebHistory } from "vue-router";
import ticketsRoutes from '@/modules/ticket/router';
import usersRoutes from '@/modules/user/router';

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
      path: "",
      name:"home",
      component: () => import(/* webpackChunkName: "Login view "*/"@/views/HomeView.vue"),
      redirect: { name:"users" },
      children:[
        { path: "tickets", ...ticketsRoutes },
        { path: "users", ...usersRoutes },
      ]
    },
    { 
      path: '/:pathMatch(.*)*', 
      redirect:{ name:"login" }
    },
  ]
});

export default router;
