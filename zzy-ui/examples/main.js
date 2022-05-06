import Vue from 'vue'
import App from './App.vue'

import '../dist/css/index.css';
import MUI from '../dist/index.umd.js'
Vue.use(MUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
