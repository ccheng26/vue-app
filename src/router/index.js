import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/films',
    name: 'Films',
    component: () => import('../views/Films.vue')
  },
  {
    path: '/planets',
    name: 'Planets',
    component: () => import('../views/Planets.vue')
  },
  {
    path: '/species',
    name: 'Species',
    component: () => import('../views/Species.vue')
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('../views/People.vue')
  },
  {
    path: '/starships',
    name: 'Starships',
    component: () => import('../views/Starships.vue')
  },
  {
    path: '/vehicles',
    name: 'Vehicles',
    component: () => import('../views/Vehicles.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
