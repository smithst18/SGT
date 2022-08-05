import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect:'/home' ,
    },
    {
      path: "/login",
      component: () => import(/* webpackChunkName: "Login view" */'../views/LoginView.vue'),
    },
    {
      path: "/home",
      component: () => import(/* webpackChunkName: "Home view" */'../views/HomeView.vue'),
      children:[
        // {
        //   path:"",
        //   ...rutas
        // },
        // {

        // }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect:{name:'dashboard'}
    },
  ],
});

export default router;
