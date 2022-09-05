import { rolGuard } from "@/router/guards.js";
export default {
    name:"users",
    component: () => import(/* webpackChunkName: "user view "*/"@/modules/user/layout/UserLayout.vue"),
    redirect: { name:"userSignin" },
    children:[
        {
            path:'sign-in',
            name:'userSignin',
            meta:{ rolsAllow: ['admin'] },
            beforeEnter: [ rolGuard ],
            component:() => import(/* webpackChunkName: "user sign in view "*/"@/modules/user/pages/SignIn.vue"),
        },
        { 
            path: '/:pathMatch(.*)*', 
            redirect:{ name:"userSignin" }
        },
    ]
}