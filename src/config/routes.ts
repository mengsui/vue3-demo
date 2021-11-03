// import { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'


const routers: any[] = [
  {
    title: '页面标题',
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true,
    }
  },
  {
    title: '页面标题about',
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
];

export default routers;
