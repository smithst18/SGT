import { rolGuard } from "@/router/guards.js";
export default {
    name:"chats",
    component: () => import(/* webpackChunkName: "chat view "*/"@/modules/chat/layout/ChatLayout.vue"),
    redirect: { name:"chatHome" },
    children:[
        {
            path:'chat',
            name:'chatHome',
            meta:{ rolsAllow: ['admin','user','tech'] },
            beforeEnter: [ rolGuard ],
            component:() => import(/* webpackChunkName: "chat home in view "*/"@/modules/chat/pages/ChatHome.vue"),
        },
        { 
            path: '/:pathMatch(.*)*', 
            redirect:{ name:"chatHome" }
        },
    ]
}