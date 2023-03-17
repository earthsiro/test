import { createRouter, createWebHistory } from 'vue-router'

import HelloWorldVue from '../components/HelloWorld.vue'
import { announcement } from '../router/announcement/index'
import { matchmaking } from './matchmaking'

const routes = [
    {
        path: '',
        component: HelloWorldVue,
       
    },
    ...announcement,
    ...matchmaking
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
    },
})

export default router
