import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
//把App顶级组件内容替换 所挂载的#idd上
const a=createApp(App).use(router)
a.mount('#app')

