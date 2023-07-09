import { rolGuard } from "@/router/guards.js";
export default {
    name:"survey",
    component: () => import(/* webpackChunkName: "tickets view "*/"@/modules/ticket/layout/TicketLayout.vue"),
    redirect: { name:"surveyHome" },
    children:[
        {
            path:'surveyHome',
            name:'surveyHome',
            meta:{ rolsAllow: ['admin'] },
            beforeEnter: [ rolGuard ],
            component:() => import(/* webpackChunkName: "tech principal view "*/"@/modules/survey/pages/SurveyHome.vue"),
        },
        // colocar ruta para el cliente y el admin compartidas
        { 
            path: '/:pathMatch(.*)*', 
            redirect:{ name:"techHome" }
        },
    ]
}