export default {
    name:"tickets",
    redirect: { name:"dashboard" },
    children:[
        {
            path:'dashboard',
            name:'dashboard',
            //meta:{ rolsAllow: ['admin', 'tech'] },
            //beforeEnter: [ rolGuard ],
            component:() => import(/* webpackChunkName: "tech principal view "*/"@/modules/ticket/views/DashboardView.vue"),
        },
        // {
        //     path:'pending',
        //     name:'ticket-list',
        //     meta:{ rolsAllow: ['admin', 'tech'] },
        //     beforeEnter: [ rolGuard ],
        //     component:() => import(/* webpackChunkName: "tech principal view "*/"@/modules/ticket/pages/PendingTickets.vue"),
        // },
        // {
        //     path:'request',
        //     name:'userHome',
        //     meta:{ rolsAllow: ['admin', 'user'] },
        //     beforeEnter: [ rolGuard ],
        //     component:() => import(/* webpackChunkName: "user principal view "*/"@/modules/ticket/pages/UserHome.vue"),
        // },
        // {
        //     path:'statistics',
        //     name:'adminHome',
        //     meta:{ rolsAllow: ['admin'] },
        //     beforeEnter: [ rolGuard ],
        //     component:() => import(/* webpackChunkName: "user principal view "*/"@/modules/ticket/pages/AdminHome.vue"),
        // },
        // colocar ruta para el cliente y el admin compartidas
        { 
            path: '/:pathMatch(.*)*', 
            redirect:{ name:"techHome" }
        },
    ]
}

