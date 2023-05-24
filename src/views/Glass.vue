<script setup></script>

<template>
  <div class="bg">
    <div>Normal</div>
    <div class="g-filter">filter</div>
    <div class="g-backdrop-filter">backdrop-filter</div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url(../assets/test.jpeg);
  background-repeat: no-repeat;
  background-size: contain;
}
.bg > div {
  width: 300px;
  height: 200px;
  background: rgba(255, 255, 255, 0.7);
}
.g-filter {
  filter: blur(6px);
}
.g-backdrop-filter {
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}
</style>
