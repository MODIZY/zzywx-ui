<template>
  <button
    :class="{
      'zzy-btn': true,
      'zzy-btn-medium': size == 'medium',
      'zzy-btn-small': size == 'small',
      'zzy-btn-mini': size == 'mini',
      'zzy-btn-primary':type=='primary',
      'zzy-btn-success':type=='success',
      'zzy-btn-info':type=='info',
      'zzy-btn-warning':type=='warning',
      'zzy-btn-danger':type=='danger',
      'is-plain':plain,
      'is-round':round
    }"
  >
    <slot></slot>
    <div></div>
  </button>
</template>
<script>
export default {
  name: "z-btn",
  props: {
    size: {
      // button样式
      type: String,
      default: "",
    },
    type:{
      type:String,
      default:""
    },
    plain:{
        type:Boolean,
      default:false
    },
    round:{
        type:Boolean,
      default:false
    }
  },
  created(){
    console.log(this.plain);
  }
};
</script>
