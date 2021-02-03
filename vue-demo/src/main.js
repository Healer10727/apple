import Vue from 'vue'
import App from './App'
import router from './router'
import  reset from './assets/css/reset.css'
import style from './assets/style/style.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
