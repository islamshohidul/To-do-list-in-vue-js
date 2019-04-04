import Vue from 'vue'
import VueRouter from 'vue-router'
import Skills from './components/Skills.vue'
import About from './components/About.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [

        {
            path: '/',
            name: 'skills',
            component: Skills
        },
        {
            path: '/about/:name',
            name: 'about',
            component: About
        }
    ]
})

//const router = new VueRouter({ mode: 'history', routes: routes});
//const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');