import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/Home'
import Mine from '@/pages/mine/Mine'
import Search from '@/pages/search/Search'
import Shop from '@/pages/shop/Shop'
import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            component: Home,
	        meta: {
            	showTabBar: true
	        }
        },
        {
            path: '/search',
            component: Search,
	        meta: {
		        showTabBar: true
	        }
        },
        {
            path: '/shop',
            component: Shop,
	        meta: {
		        showTabBar: true
	        }
        },
        {
            path: '/mine',
            component: Mine,
	        meta: {
		        showTabBar: true
	        }
        },
        {
            path: '/',
            redirect: '/home'
        },
	    {
		    path: '/login',
		    component: Login
	    }
    ]
})
