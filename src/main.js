import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import config from "./config/index.js";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

console.log("环境变量", import.meta.env)
console.log("config", config.apiUrl)
const app = createApp(App)

// 注册element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(router)
app.use(ElementPlus)
app.mount('#app')