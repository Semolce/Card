import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementPlus from '../node_modules/element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)

app.use(elementPlus)
app.use(store)
app.use(router)
app.mount('#app')
