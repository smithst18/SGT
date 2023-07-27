import { rolGuard } from "@/router/guards.js";
import { RouteRecordRaw } from 'vue-router';
// import TicketLayout from "@/modules/ticket/layout/TicketLayout.vue";
// import TechHome from "@/modules/ticket/pages/TechHome.vue";
// import PendingTickets from "@/modules/ticket/pages/PendingTickets.vue";
// import UserHome from "@/modules/ticket/pages/UserHome.vue";
// import AdminHome from "@/modules/ticket/pages/AdminHome.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: TicketLayout,
    children: [
      {
        path:'my-tickets',
        name:'techHome',
        meta:{ rolsAllow: ['admin', 'tech'] },
        beforeEnter: [ rolGuard ],
        component: TechHome,
      },
    //   {
    //     path:'pending',
    //     name:'ticket-list',
    //     meta:{ rolsAllow: ['admin', 'tech'] },
    //     beforeEnter: [ rolGuard ],
    //     component: PendingTickets,
    //   },
    //   {
    //     path:'request',
    //     name:'userHome',
    //     meta:{ rolsAllow: ['admin', 'user'] },
    //     beforeEnter: [ rolGuard ],
    //     component: UserHome,
    //   },
    //   {
    //     path:'statistics',
    //     name:'adminHome',
    //     meta:{ rolsAllow: ['admin'] },
    //     beforeEnter: [ rolGuard ],
    //     component: AdminHome,
    //   },
      // colocar ruta para el cliente y el admin compartidas
      {
        path: '/:pathMatch(.*)*',
        redirect:{ name:"techHome" }
      }
    ]
  }
];

export default routes;
