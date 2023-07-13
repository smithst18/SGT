import { rolGuard } from "@/router/guards.js";
export default {
    name:"users",
    component: () => import(/* webpackChunkName: "user view "*/"@/modules/user/layout/UserLayout.vue"),
    redirect: { name:"userSignin" },
    children:[
        {
            path:'sign-in',
            name:'userSignin',
            meta:{ rolsAllow: ['admin','boss'] },
            beforeEnter: [ rolGuard ],
            component:() => import(/* webpackChunkName: "user sign in view "*/"@/modules/user/pages/SignIn.vue"),
        },
        {
            path:'update',
            name:'userUpdate',
            meta:{ rolsAllow: ['admin','user','tech','boss'] },
            beforeEnter: [ rolGuard ],
            component:() => import(/* webpackChunkName: "user sign in view "*/"@/modules/user/pages/UpdateUser.vue"),
        },
        { 
            path: '/:pathMatch(.*)*', 
            redirect:{ name:"userSignin" }
        },
    ]
}