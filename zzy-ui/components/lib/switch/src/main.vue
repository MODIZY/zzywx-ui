<template>
  <div class="z-switch" :style="boxact" @click="$emit('input', !value)">
    <span :style="spanact"></span>
  </div>
</template>

<script>
export default {
  name: "z-switch",
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    width: {
      type: Number,
      default: 40,
    },
    activeColor: {
      type: String,
      default: "#409EFF",
    },
    inactiveColor: {
      type: String,
      default: "#C0CCDA",
    },
  },
  data() {
    return {};
  },
  computed: {
    boxact() {
      return {
        width: this.width + "px",
        height: this.width / 2 + "px",
        background: this.value ? this.activeColor : this.inactiveColor,
        borderWidth: this.width / 20 + "px",
        borderColor: this.value ? this.activeColor : this.inactiveColor,
        borderRadius: this.width / 2 + "px",
      };
    },
    spanact() {
      return {
        width: this.width / 2 + "px",
        height: this.width / 2 + "px",
        left: this.value ? "calc(100% - " + this.width / 2 + "px)" : "",
      };
    },
  },
};
</script>
