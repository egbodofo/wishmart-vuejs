import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/verify',
    name: 'verify',
    component: () => import('../views/Verify.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/show',
    name: 'show',
    component: () => import('../views/Show.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Products.vue'),
  },
  {
    path: '/new',
    name: 'createProd',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Create.vue'),
    beforeEnter(to: any, from: any, next: any) {
      if (store.state.idToken) {
        next();
      } else {
        next('/products');
      }
    },
  },
  {
    path: '/product/:id',
    name: 'products',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Show.vue'),
  },
  {
    path: '/edit/:id',
    name: 'EditCamp',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Edit.vue'),
    beforeEnter(to: any, from: any, next: any) {
      if (store.state.idToken) {
        next();
      } else {
        next('/products');
      }
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Cart.vue'),
  },
  {
    path: '/pay',
    name: 'Pay',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pay.vue'),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Checkout.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
