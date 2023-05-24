<script setup></script>

<template>
  <div class="time">
    <div class="upBox beforeTime"></div>
    <div class="downBox beforeTime"></div>
    <div class="upBox afterTime"></div>
    <div class="downBox afterTime"></div>
  </div>
</template>

<style scoped>
.time {
  position: relative;
  height: 300px;
}
/* .beforeTime {
  z-index: 10;
} */
.upBox {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 50%;
  background-color: red;
  border-bottom: solid 2px #000;
}
.downBox {
  position: absolute;
  width: 100%;
  top: 50%;
  bottom: 0;
  background-color: blue;
}
</style>