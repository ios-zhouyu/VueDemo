import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/Home'
import Mine from '@/pages/mine/Mine'
import Search from '@/pages/search/Search'
import Shop from '@/pages/shop/Shop'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/shop',
            component: Shop
        },
        {
            path: '/mine',
            component: Mine
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})
