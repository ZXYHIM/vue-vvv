import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'

Vue.config.productionTip = false
import router from './router'; //导入路由实例
import store from './store/index'; //导入状态管理实例
import request from './request/request';
Vue.prototype.request=request;
Vue.prototype.$store=store;
Vue.prototype.$echarts=echarts;

//element-ui全局使用配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

router.beforeEach((to,from,next)=>{
  console.log(store.state,'store.state');
  let isLogin = store.state.userInfo;
  console.log(isLogin);
  if (isLogin) {
    next()
    console.log(isLogin,'www');
  } else {
    console.log('gaitiaoz');
    if(to.path === '/logon'){
      next();
      console.log('12122');
    }else {
      next('/logon');
    }
  }
})

new Vue({
  router,//挂载路由实例
  store,//挂载状态管理实例
  render: h => h(App),
}).$mount('#app')
