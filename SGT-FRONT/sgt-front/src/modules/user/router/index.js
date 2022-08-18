export default {
    name:"users",
    component: () => import(/* webpackChunkName: "user view "*/"@/modules/user/layout/UserLayout.vue"),
    redirect: { name:"userSignin" },
    children:[
        {
            path:'sign-in',
            name:'userSignin',
            component:() => import(/* webpackChunkName: "user sign in view "*/"@/modules/user/pages/SignIn.vue"),
        },
        { 
            path: '/:pathMatch(.*)*', 
            redirect:{ name:"userSignin" }
        },
    ]
}