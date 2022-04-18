import {createRouter} from 'vue-router'
import {createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
//使用这个插件

//路由映射配置
const routes=[{
    path:'/home',
    component:Home
},{
    path:'/about',
    component:About
}]
//创建实例
const router=createRouter({
    history: createWebHistory(),
    routes

})
//导出实例
export default router