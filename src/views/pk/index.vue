<script setup>
// import Step1 from './step1.vue';
// import Step2 from './step2.vue'
import { ref } from "vue";
const box = ref(null);

const onMousemove = (e) => {
  return;
  const x = e.clientX;
  const y = e.clientY;
  const { width, height, left, top } = box.value.getBoundingClientRect();
  const box_x = left;
  const box_y = top;
  const w = width;
  const h = height;
  const rotationX = -(y - box_y - h / 2) / 10;
  const rotationY = (x - box_x - w / 2) / 10;
  box.value.style.setProperty("--rotationX", rotationX + "deg");
  box.value.style.setProperty("--rotationY", rotationY + "deg");
};
const onMouseout = (e) => {
  window.requestAnimationFrame(() => {
    box.value.style.setProperty("--rotationX", 0);
    box.value.style.setProperty("--rotationY", 0);
  });
};

const boxMousemove = (e) => {
  var l = e.offsetX;
  var t = e.offsetY;
  var w = e.target.clientWidth;
  var h = e.target.clientHeight;
  var px = Math.abs(Math.floor((100 / w) * l) - 100);
  var py = Math.abs(Math.floor((100 / h) * t) - 100);
  e.target.style.setProperty("--x", l + 'px');
  e.target.style.setProperty("--y", t + 'px');
};

const box2Mousemove = (e) => {
  var l = e.offsetX;
  var t = e.offsetY;
  var w = e.target.clientWidth;
  var h = e.target.clientHeight;
  var px = Math.abs(Math.floor(100 / w * l) - 100);
  var py = Math.abs(Math.floor(100 / h * t) - 100);

  var lp = (50 + (px - 50) / 1.5);
  var tp = (50 + (py - 50) / 1.5);

  var ty = ((tp - 50) / 2) * -1;
  var tx = ((lp - 50) / 1.5) * 1;
  console.log(`px: ${px}, py: ${py}, lp: ${lp}, tp: ${tp}, ty: ${ty}, tx: ${tx}`)

  e.target.style.setProperty('--rx', tx + 'deg');
  e.target.style.setProperty('--ry', ty + 'deg');
}
</script>

<template>
  <div id="wrapper" @mousemove="onMousemove" @mouseout="onMouseout">
    <!-- <section>
      <h2>步骤1， 添加图片</h2>
      <Step1 />
    </section> -->
    <!-- <section>
      <h2>步骤2，样式</h2>
      <Step2 />
    </section> -->

    <div id="box" class="box" ref="box" @mousemove="boxMousemove">
      <img src="../../assets/pikachu-gx.webp" />
    </div>

    <div id="box2" class="box" @mousemove="box2Mousemove"></div>
  </div>
</template>

<style scoped>
#wrapper {
  width: 100%;
  height: 100%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
.box {
  width: 175px;
  height: 250px;
  margin: 0 auto;
}
#box {
  
  /* background: gray; */
  transform-style: preserve-3d;
  transform: rotateX(var(--rotationX)) rotateY(var(--rotationY));
  position: relative;
  clip-path: inset(0 0 1px 0 round 20px);
}

#box2 {
  background: orange;
  transform-style: preserve-3d;
  transform: rotateX(var(--ry)) rotateY(var(--rx));
  position: relative;
}
img {
  width: 100%;
  height: 100%;
}
#box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  /* background: radial-gradient(
    farthest-corner circle at var(--x) var(--y),
    rgba(255, 255, 255, 0.8) 30%,
    transparent 90%
  );
  mix-blend-mode: soft-light; */
  background-position: 50% 50%;
    background-size: 300% 300%;
    background-image: linear-gradient(115deg, transparent 0%, var(--color1) 25%, transparent 47%, transparent 53%, var(--color2) 75%, transparent 100%);
    opacity: 0.5;
    filter: brightness(0.5) contrast(1);
    z-index: 1;
    mix-blend-mode: color-dodge;
}
#box::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: purple; */
  background-image: url(../../assets/sparkles.webp), url(../../assets/holo.webp), linear-gradient(125deg, #ff008450 15%, #fca40040 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%);
    background-position: 50% 50%;
    background-size: 160%;
    background-blend-mode: overlay;
    z-index: 2;
    filter: brightness(1) contrast(1);
    transition: all 0.33s ease;
    mix-blend-mode: color-dodge;
    opacity: 0.75;
}
</style>