export default {
    name:"tickets",
    component: () => import(/* webpackChunkName: "tickets view "*/"@/modules/ticket/layout/TicketLayout.vue"),
    redirect: { name:"techHome" },
    children:[
        {
            path:'my-tickets',
            name:'techHome',
            component:() => import(/* webpackChunkName: "tech principal view "*/"@/modules/ticket/pages/TechHome.vue"),
        },
        {
            path:'pending',
            name:'ticket-list',
            component:() => import(/* webpackChunkName: "tech principal view "*/"@/modules/ticket/pages/PendingTickets.vue"),
        },
        {
            path:'request',
            name:'userHome',
            component:() => import(/* webpackChunkName: "user principal view "*/"@/modules/ticket/pages/UserHome.vue"),
        },
        {
            path:'statistics',
            name:'adminHome',
            component:() => import(/* webpackChunkName: "user principal view "*/"@/modules/ticket/pages/AdminHome.vue"),
        },
        // colocar ruta para el cliente y el admin compartidas
        { 
            path: '/:pathMatch(.*)*', 
            redirect:{ name:"techHome" }
        },
    ]
}