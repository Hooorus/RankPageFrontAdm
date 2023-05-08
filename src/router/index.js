import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from "@/views/Default.vue";
import Backend from "@/views/Backend.vue";
import Front from "@/views/Front.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'default',
        component: Default
    },
    {
        path: '/backend',
        name: 'backend',
        component: Backend
    },
    {
        path: '/front',
        name: 'front',
        component: Front
    },
]
const router = new VueRouter({
    routes
})
export default router
