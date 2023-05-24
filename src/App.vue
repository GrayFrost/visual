<script setup>
import Clock from './views/Clock.vue';
import Clock2 from './views/Clock2.vue';
import Glass from './views/Glass.vue';
import Logo from './assets/vue.svg';
</script>

<template>
  <img :src="Logo" />
  <Glass />
</template>

<style scoped>
img {
  position: absolute;
  top: 450px;
}
</style>
