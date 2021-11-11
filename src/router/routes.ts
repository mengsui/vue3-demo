
const routers: any[] = [
  {
    title: '',
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      keepAlive: true,
    }
  },
  {
    title: '',
    path: '/details',
    name: 'Details',
    component: () => import(/* webpackChunkName: "about" */ '@/views/details/index.vue')
  },
  {
    title: '',
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '@/views/search/index.vue')
  }
];

export default routers;
