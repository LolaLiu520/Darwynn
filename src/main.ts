import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import i18n from './i18n'
const app = createApp(App).use(i18n)

// 注册element-plus/其他
app.use(globalRegister)
app.use(store)
setupStore()
// path: /user => user
app.use(router)
app.mount('#app')
