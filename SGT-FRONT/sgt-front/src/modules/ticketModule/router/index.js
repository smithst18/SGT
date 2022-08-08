export default  {

    name:'ticketsHome',
    
    component: () => import(/* webpackChunkName: "TicketsHome" */'@/modules/ticketModule/layouts/TicketsHome.vue'),
    children:[]
  }