import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Requests from '../views/Requests.vue'
import Institutions from '../views/Institutions.vue'
import Clerks from '../views/Clerks.vue'
import Docs from '../views/Docs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/requests',
    name: 'Requests',
    component: Requests
  },
  {
    path: '/institutions',
    name: 'Institutions',
    component: Institutions
  },
  {
    path: '/clerks',
    name: 'Clerks',
    component: Clerks
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
