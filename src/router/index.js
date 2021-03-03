import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store';

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   },
//   {
//     path:"/login",
//     name:"Login",
//     component: () => import("../views/Login.vue")
//   }
// ],

const router = new VueRouter({
  routes:[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path:"/login",
      name:"Login",
      component: () => import("../views/Login.vue")
    }
  ]
});

//路由守卫不是必须的
var storeTemp = store;
router.beforeEach((to, from, next) => {
  // if (!storeTemp.state.token) {
  //   storeTemp.commit("saveToken", window.localStorage.Token);
  // }
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (storeTemp.state.token) {
      // 通过vuex state获取当前的token是否存在
      next();
    } else {
      //这里使用Id4授权认证，用Jwt，请删之，并把下边的跳转login 打开；
      // applicationUserManager.login();

      //这里使用Jwt登录，如果不用Id4授权认证，这里打开它；
      next({
        path: "/login",
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  } else {
    next();
  }
});

export default router
