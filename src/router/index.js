import Vue from 'vue'
import VueRouter from 'vue-router'

import NavRoutes from './nav'
import NavSearch from '@/components/Nav/NavSearch'
import Search from '@/components/Search/Search'


Vue.use(VueRouter)

const routes = [
    ...NavRoutes,
  {
    path: "/search",
    name: "Search",
    components: {
        default: Search,
        nav: NavSearch
    }
  }
]

const router = new VueRouter({
    routes
})

export default router
