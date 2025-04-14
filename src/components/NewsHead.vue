<script setup>
</script>

<template>
    <div class="head-container">
        <div class="head-ellipse">
          <p class="head-text">计协快报</p>
        </div>
    
        <div class="head-lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>

        
</template>

<style scoped>
.head-container {
    display: flex;
    /* 竖直居中 */
    align-items: center;
}

.head-ellipse {
  width: 20%;
  height: 25px;
  border-radius: 15px;
  background: 
      /* 左右渐变 */
      linear-gradient(
          to right,
          rgba(40, 45, 41, 0.85),
          rgba(46, 46, 37, 0.85)
      ),
      /* 纸张纹理 */
      var(--noise-filter-url);
}
.head-text {
  text-align: center;
  color: #E8D8C8;
  font-size: 1.2rem;
  letter-spacing: 0.3rem;
}

.head-lines {
    display: flex;
    width: 80%;
    flex-direction: column;
    gap: 7px;
}

.line {
    height: 2px;
    background: #2E2E25;
    width: 100%;
    /* 添加模糊效果 */
    filter: blur(1px);
    /* 让模糊效果更柔和 */
}
</style>