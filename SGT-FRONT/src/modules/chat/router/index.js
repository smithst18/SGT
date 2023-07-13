import { rolGuard } from "@/router/guards.js";
export default {
    name:"chats",
    component: () => import(/* webpackChunkName: "chat view "*/"@/modules/chat/layout/ChatLayout.vue"),
    redirect: { name:"chatHome" },
    children:[
        {
            path:'conversations',
            name:'chatHome',
            meta:{ rolsAllow: ['admin','user','tech','boss'] },
            beforeEnter: [ rolGuard ],
            component:() => import(/* webpackChunkName: "chat home in view "*/"@/modules/chat/pages/ChatHome.vue"),
            //para q se muestre la ruta vacia con el empezar conversacion
            redirect:{ name:"activeChat", params: { name:'none' } },
            children:[
                {
                    path:':name',
                    name:'activeChat',
                    meta:{ rolsAllow: ['admin','user','tech','boss'] },
                    beforeEnter: [ rolGuard ],
                    component:() => import(/* webpackChunkName: "chat conversation "*/"@/modules/chat/components/ChatConversation.vue"),
                },
                { 
                    path: '/:pathMatch(.*)*', 
                    redirect:{ name:"activeChat" }
                },
            ]
        },
        { 
            path: '/:pathMatch(.*)*', 
            redirect:{ name:"chatHome" }
        },
    ]
}