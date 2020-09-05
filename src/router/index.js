import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router);

const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const logon = r => require.ensure([], () => r(require('@/page/data/logon.vue')), 'logon');
const index = r => require.ensure([], () => r(require('@/page/input/index.vue')), 'index');
const home = r => require.ensure([], () => r(require('@/page/data/home.vue')), 'home');
const userList = r => require.ensure([], () => r(require('@/page/data/userList.vue')), 'userList');
const userManage = r => require.ensure([], () => r(require('@/page/data/userManage.vue')), 'userManage');
const addShop = r => require.ensure([], () => r(require('@/page/data/addShop.vue')), 'addShop');

const routes=[
  {
    path:'/',
    component:logon
  },
  {
    path:'/logon',
    component:logon
  },
  {
    path: '/index',
    name: '',
    component: index,
    children:[
      {
        path:'',
        component:home
      },
      {
        path: '/userList',
        component: userList,
        meta:['数据管理','用户列表'],
      },
      {
        path: '/userManage',
        component: userManage,
        meta:['数据管理','用户管理'],
      },
      {
        path: '/addShop',
        component: addShop,
        meta:['数据管理','添加商铺'],
      }
    ]
  },
]

export default new Router({
    routes,
    strict: process.env.NODE_ENV !== 'production',
  })