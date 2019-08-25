import Vue from "vue"
import Router from "vue-router"
import Home from "../home/Home.vue"
import NoWrite from '../components/NoWrite.vue'
import ZhuanQian from '../money/ZhuanQian.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {path:'/',redirect:'/home'},
        {
            path: "/home",
            name: "home",
            component: Home,
        },
        {path:'/nowrite',component:NoWrite},
        {path:'/zhuanqian',component:ZhuanQian},
        
    ],
})
