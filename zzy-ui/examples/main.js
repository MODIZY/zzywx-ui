import Vue from 'vue'
import App from './App.vue'

// import '../components/css/demo.scss';
// import '../components/css/card.scss';
// import Demo from '../components/lib/demo/index'
// import Card from '../components/lib/card/index'
import Zbtn from '../components/lib/button/index'
// Vue.use(Demo)
// Vue.use(Card)
Vue.use(Zbtn)

// import 'zzywx-ui/dist/css/index.css'
// import MUI from 'zzywx-ui'
// console.log(MUI);
// Vue.use(MUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
