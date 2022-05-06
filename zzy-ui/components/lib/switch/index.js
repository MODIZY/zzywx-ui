import switchs from './src/main.vue';

switchs.install=function(Vue){
    Vue.component(switchs.name,switchs)
}
export default switchs