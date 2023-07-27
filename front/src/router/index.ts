import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: "/home",
      name:"home",
      //beforeEnter: [ isAuthGuard ],
      component: () => import(/* webpackChunkName: "Vista principal donde se cargan las rutas"*/"@/views/HomeView.vue"),
      redirect: { name:"tickets" },
      children:[
        { path: "tickets", ...ticketsRoutes },
        //{ path: "users", ...usersRoutes },
        //{ path: "chats", ...chatRoutes },
        //{ path: "mail", ...chatRoutes },
      ]
    },
    { 
      path: '/:pathMatch(.*)*', 
      redirect:{ name:"login" }
    },
  ]
})

export default router
