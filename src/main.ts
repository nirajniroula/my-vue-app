import { createApp } from 'vue'
import App from './App.vue'
import { vuetify } from './plugins/vuetify'
import router from './router'
import i18n from './plugins/i18n'
import Particles from 'particles.vue3'
import { store, key } from './store/index'
import './styles/main.css'

createApp(App)
  .use(store, key)
  .use(router)
  .use(vuetify)
  .use(i18n)
  .use(Particles)
  .mount('#app')
