import  Vue  from  'vue';
import  Vuex  from  'vuex';//引入vuex
import state from './state'
import mutations from './mutations'
import createPersistedState from "vuex-persistedstate"
//注册vuex
Vue.use(Vuex);
//创建vuex实例
const store =new Vuex.Store({
  state,
  mutations,
  plugins:[createPersistedState({
    storage: window.sessionStorage,
    reducer(val){
      return{
        userInfo:val.userInfo
      }
    }
  }
  )]
    //  state:{
    //     //数据中心  类似 vue实例的data
    //     count:0
    //  },
    //  mutations:{
    //     //方法,推荐只使用mutations中的方法改变state的数据
    //  },
    //  getters:{
    //    //计算属性,类似vue实例中的computer
    //  },
    //  actions:{
    //    //异步处理 推荐获取的数据不直接改变state的值，通过mutations中的方法改变state
    //  }
})

export default store
 