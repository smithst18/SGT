export default {
    name:"tickets",
    component: () => import(/* webpackChunkName: "tickets view "*/"@/modules/ticket/layout/TicketLayout.vue"),
    redirect: { name:"techHome" },
    children:[
        {
            path:'techHome',
            name:'techHome',
            component:() => import(/* webpackChunkName: "tech principal view "*/"@/modules/ticket/pages/TechHome.vue"),
        },
        {
            path:'userHome',
            name:'userHome',
            component:() => import(/* webpackChunkName: "user principal view "*/"@/modules/ticket/pages/UserHome.vue"),
        },
        // colocar ruta para el cliente y el admin compartidas
        { 
            path: '/:pathMatch(.*)*', 
            redirect:{ name:"techHome" }
        },
    ]
}