// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import goods from './components/goods/goods.vue';
import header from './components/header/header.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

// vue-router 2.0配置

const routes = [
{ path: '/', component: goods },
{ path: '/goods', component: goods },
{ path: '/header', component: header },
{ path: '/ratings', component: ratings },
{ path: '/seller', component: seller },
]

const router = new VueRouter({
  routes,
  linkActiveClass:'active'     // router配置选项当class为active是改变样式
});

const app = new Vue({
   router,
   el: '#app',
   template: '<App/>',
   components: { App }
});

// router.go('/goods');