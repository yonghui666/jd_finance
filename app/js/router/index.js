import Vue from "vue"
import Router from "vue-router"
import Home from "../home/Home.vue"
import NoWrite from '../components/NoWrite.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {path:'/nowrite',component:NoWrite}
    ],
})
