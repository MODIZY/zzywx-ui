import Vue from 'vue'
import App from './App.vue'

import '../dist/css/index.css';
import Zbtn from '../components/lib/button/index'
Vue.use(Zbtn)

// import 'zzywx-ui/dist/css/index.css'
// import MUI from 'zzywx-ui'
// console.log(MUI);
// Vue.use(MUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
