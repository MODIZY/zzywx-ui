<template>
  <div class="z-slider-box">
    <div class="slider">
      <div
        class="slider-runway"
        ref="runway"
        @mousedown="sliderDown"
        @touchstart="sliderDown"
      >
        <div class="slider-bar" :style="barStyle">
          <div class="slider-button"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "z-slider",
  props: {
    value: Number,
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
  },
  data() {
    return {
      isMove: false,
    };
  },
  computed: {
    ratio() {
      let r = (this.value - this.min) / (this.max - this.min);
      r = r < 0 ? 0 : r > 1 ? 1 : r;
      return r;
    },
    barStyle() {
      return {
        width: 100 * this.ratio + "%",
      };
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.sliderMove);
    document.addEventListener("mouseup", this.sliderUp);
    document.addEventListener("touchmove", this.sliderMove);
    document.addEventListener("touchend", this.sliderUp);
    this.$emit("input", this.min);
  },
  methods: {
    sliderDown(ev) {
      this.isMove = true;
      this.move(ev);
    },
    sliderUp() {
      this.isMove = false;
    },
    sliderMove(ev) {
      if (this.isMove) {
        this.move(ev);
      }
    },
    move(ev) {
      let distance = 0;
      if (ev.touches) {
        distance = ev.touches[0].clientX - this.$refs.runway.offsetLeft;
      } else {
        distance = ev.clientX - this.$refs.runway.offsetLeft;
      }
      distance =
        distance < 0
          ? 0
          : distance > this.$refs.runway.offsetWidth
          ? this.$refs.runway.offsetWidth
          : distance;
      let value = parseInt(
        (distance * (this.max - this.min)) / this.$refs.runway.offsetWidth +
          this.min
      );
      this.$emit("input", value);
    },
  },
};
</script>
