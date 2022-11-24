import { createRouter, createWebHistory } from "vue-router";
import ticketsRoutes from '@/modules/ticket/router';
import usersRoutes from '@/modules/user/router';
import chatRoutes from '@/modules/chat/router';
//guards
import { isAuthGuard } from "./guards";

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
      beforeEnter: [ isAuthGuard ],
      component: () => import(/* webpackChunkName: "Login view "*/"@/views/LoginView.vue"),
    },
    {
      path: "/home",
      name:"home",
      beforeEnter: [ isAuthGuard ],
      component: () => import(/* webpackChunkName: "home view "*/"@/views/HomeView.vue"),
      redirect: { name:"users" },
      children:[
        { path: "tickets", ...ticketsRoutes },
        { path: "users", ...usersRoutes },
        { path: "chats", ...chatRoutes },
      ]
    },
    { 
      path: '/:pathMatch(.*)*', 
      redirect:{ name:"login" }
    },
  ]
});

export default router;
