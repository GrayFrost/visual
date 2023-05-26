<script setup>
// 步骤一，准备图片
// background-image 设置图片
</script>

<template>
  <div class="card pika"></div>
</template>

<style lang="less">
:root {
  --color1: rgb(0, 231, 255);
  --color2: rgb(255, 0, 231);
  --pika1: #54a29e;
  --pika2: #a79d66;
  --pikafront: url(https://assets.codepen.io/13471/pikachu-gx.webp);
}

.card {
  width: 71.5vw;
  height: 100vw;
  @media screen and (min-width: 600px) {
    // width: 61vh;
    // height: 85vh;
    // max-width: 500px;
    // max-height: 700px;
    width: clamp(12.9vw, 61vh, 18vw);
    height: clamp(18vw, 85vh, 25.2vw);
  }
  position: relative;
  overflow: hidden;
  margin: 20px;
  z-index: 10;
  border-radius: 5% / 3.5%;
  /* box-shadow */
  /* transition */
  /* will-change */

  background-color: #040712;
  background-image: var(--front);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  /* transform-origin: center; */
  
}

.card.pika {
  --color1: var(--pika1);
  --color2: var(--pika2);
  --front: var(--pikafront);
}
</style>