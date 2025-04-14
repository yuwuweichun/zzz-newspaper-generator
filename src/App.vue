<script setup>
import { ref } from 'vue'
import NewsInput from './components/NewsInput.vue'
import NewsHead from '@/components/NewsHead.vue';
import NewsTitle from '@/components/NewsTitle.vue';
const formData = ref({
  leftTitle: 'HNNUer',
  leftSubtitle: '今天吃什么？',
  rightTitle: '食堂篇',
  rightSubtitle: 'Special Recommendation'
})



import luosifen from '@/assets/images/luosifen.jpg'
import tiebanyouyu from '@/assets/images/tiebanyouyu.jpg'
import kaopanfan from '@/assets/images/kaopanfan.jpg'
</script>

<template>
  <div class="generator-container">
    <NewsInput v-model="formData" />
  </div>

  <div class="newspaper-container">
    <div class="newspaper-head">
      <NewsHead />
    </div>
      
    <div class="newspaper-title">
      <NewsTitle 
        :left-title="formData.leftTitle"
        :left-subtitle="formData.leftSubtitle"
        :right-title="formData.rightTitle"
        :right-subtitle="formData.rightSubtitle"
      />
    </div>

    <div class="newspaper-section">
      <img :src="luosifen" alt="螺蛳粉" class="section-img-left">
      <div class="section-text">
        <p style="font-size: 1.6rem;">兰桂苑二楼-螺蛳粉</p>
        <p>粉可以让阿姨帮忙煮久一点，软软的更好吃哦！建议微辣，第一次吃点的中辣，鼻涕眼泪齐流(‾◡◝)<br>单品推荐：图中为营养套餐（15.5￥），牛腩螺蛳粉（14￥）也很不错。</p>
      </div>
    </div>

    <div class="newspaper-section">
      <div class="section-text">
        <p style="font-size: 1.6rem;">木兰食堂二楼-铁板炒饭</p>
        <p>出餐前阿姨会把把饭拌好，赞(`･∀･)b 铁板很烫，小心不要挨到了(‾◡◝)<br>单品推荐：图中为铁板鱿鱼饭。</p>
      </div>
      <img :src="tiebanyouyu" alt="" class="section-img-right">
    </div>

    <div class="newspaper-section">
      <img :src="kaopanfan" alt="" class="section-img-left">
      <div class="section-text">
        <p style="font-size: 1.6rem;">江边食堂-烤盘饭</p>
        <p>称重计费9.9元/3两（150克）有很多菜品可以选，跟吃拆串的烧烤差不多。豪赤(╹ڡ╹ )<br>单品推荐：土豆、鸡排、腊肠，韭菜。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.newspaper-container {
    background: 
      /* 左右渐变 */
      linear-gradient(
          to right,
          rgba(231, 213, 198, 0.85),
          rgba(225, 207, 193, 0.85)
      ),
      /* 纸张纹理 */
      var(--noise-filter-url);
    
    width: 720px;
    margin: auto;
    padding: 10px 20px;
}

.newspaper-section {
  margin-top: 8px;
  border: 2px solid #282D29;
  display: flex;
  /* 设置子元素之间的间距 */
  gap: 15px;
}
.section-img-left {
  width: 40%;
}
.section-img-right {
  width: 40%;
  /* 将图片放在父容器的右侧 */
  margin-left: auto;
}
</style>
