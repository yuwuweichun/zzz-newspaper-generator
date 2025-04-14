<script setup>
defineProps({
  leftTitle: {
    type: String,
    default: 'HNNUer'
  },
  leftSubtitle: {
    type: String,
    default: '今天吃什么？'
  },
  rightTitle: {
    type: String,
    default: '食堂篇'
  },
  rightSubtitle: {
    type: String,
    default: 'Special Recommendation'
  }
})
</script>

<template>
    <div class="title-container">
      <div class="title-text-left">
        <p style="font-size: 3rem;">{{ leftTitle }}</p>
        <p style="font-size: 1.4rem;">{{ leftSubtitle }}</p>
      </div>
      
      <div class="title-text-right">
        <p style="font-size: 3rem;letter-spacing: 1rem;">{{ rightTitle }}</p>
        <p style="font-size: 1.4rem;">{{ rightSubtitle }}</p>
      </div>
    </div>
  </template>

<style scoped>
.title-container {
    width: 100%;
    height: 150px;
    background: 
    /* 左右渐变 */
    linear-gradient(
          to right,
          rgba(40, 45, 41, 0.85),
          rgba(46, 46, 37, 0.65)
    ),
    /* 纸张纹理 */
    var(--noise-filter-url);

    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.title-text-left {
    color: #E8D8C8;

}
.title-text-right {
    /* 左右渐变 */
    background: 
        linear-gradient(
          to right,
          rgba(231, 213, 198, 0.85),
          rgba(225, 207, 193, 0.65)
        );
    width: 50%;
    margin-left: 20px;
    text-align: center;
}
</style>