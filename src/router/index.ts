import { createRouter, createWebHistory } from 'vue-router'

import HelloWorldVue from '../components/HelloWorld.vue'
import { homepage } from '../router/homepage/index'

const routes = [
    {
        path: '',
        component: HelloWorldVue,
       
    },
    ...homepage
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
