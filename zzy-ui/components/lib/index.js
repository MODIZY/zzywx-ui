import Demo from './demo'
import Card from './card'
import Button from './button'
import slider from './slider'
import switchs from './switch'

const components={
    Demo,
    Card,
    Button,
    slider,
    switchs
}

const install=function(Vue){
    if (install.installed) return;
    Object.keys(components).forEach(key=>{
        Vue.component(components[key].name,components[key]);
    })
}
const API={
    install,
}
export default API