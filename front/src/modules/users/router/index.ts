
export default {
    name:"user",
    redirect: { name:"signin" },
    children:[
        {
            path:'registro',
            name:'signin',
            //meta:{ rolsAllow: ['admin', 'tech'] },
            //beforeEnter: [ rolGuard ],
            component:() => import(/* webpackChunkName: "tech principal view "*/"@/modules/ticket/views/DashboardView.vue"),
        },
        {
            path:'Gestion',
            name:'management',
            //meta:{ rolsAllow: ['admin', 'tech'] },
            //beforeEnter: [ rolGuard ],
            component:() => import(/* webpackChunkName: "tech principal view "*/"@/modules/ticket/views/DashboardView.vue"),
        },
        { 
            path: '/:pathMatch(.*)*', 
            redirect:{ name:"management" }
        },
    ]
}

