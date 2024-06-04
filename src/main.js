import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'

UIkit.use(Icons)

const app = createApp(App)

app.use(router)

app.mount('#app')
