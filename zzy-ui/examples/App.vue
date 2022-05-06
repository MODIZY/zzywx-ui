<template>
  <div id="app">
    <z-btn>默认按钮</z-btn>
    <z-btn type="primary">主要按钮</z-btn>
    <z-btn type="success">成功按钮</z-btn>
    <z-btn type="info">信息按钮</z-btn>
    <z-btn type="warning">警告按钮</z-btn>
    <z-btn type="danger">危险按钮</z-btn>

    <z-btn plain>朴素按钮</z-btn>
    <z-btn type="primary" plain>主要按钮</z-btn>
    <z-btn type="success" plain>成功按钮</z-btn>
    <z-btn type="info" plain>信息按钮</z-btn>
    <z-btn type="warning" plain>警告按钮</z-btn>
    <z-btn type="danger" plain>危险按钮</z-btn>
    <br />
    <z-btn round>圆角按钮</z-btn>
    <z-btn type="primary" round>主要按钮</z-btn>
    <z-btn type="success" round>成功按钮</z-btn>
    <z-btn type="info" round>信息按钮</z-btn>
    <z-btn type="warning" round>警告按钮</z-btn>
    <z-btn type="danger" round>危险按钮</z-btn>

    <div class="slider">
      <z-slider v-model="num" :min="10" :max="200"></z-slider>
      <z-switch
        v-model="show"
        :width="80"
        activeColor="#f00"
        inactiveColor="#00f"
      ></z-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      num: 0,
      show:false
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slider {
  width: 800px;
}
</style>
