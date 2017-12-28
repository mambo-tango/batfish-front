import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/login/Login'
import Err401 from '../views/error/Error401'
import Err404 from '../views/error/Error404'
import Dashboard from '../views/index/Dashboard'
import Layout from '../views/layout/Layout';

// /* login */
// const Login = () => import('../views/login/index');

// /* error page */
// const Err404 = () => import('../views/error/404.vue');
// const Err401 = () => import('../views/error/401.vue');


Vue.use(Router);

const constantRouterMap = [
  { path: '/', component: Login, hidden: true} ,
  { path: '/login', component: Login, hidden: true},
  { path: '/dashboard', 
    component: Layout, 
    redirect:'nordirect',
    name:'dashboard',
    children:[
     { path: 'permissionsManage', component: PermissionsManage, name: '权限管理' },
    ]
  },

  { path: '/404', component: Err404, hidden: true},  //假地址时重定向
  { path: '/401', component: Err401, hidden: true}, //无权限时重定向
    // { path: '/', redirect: '/excel', hidden: true },
  { path: '*', component: Err404, hidden: true}
  
]

export default new Router({
  // mode: 'history', //后端支持可开
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap


});
