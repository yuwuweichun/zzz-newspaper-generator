<script setup>
import { ref } from 'vue'
import NewsInput from './components/NewsInput.vue'
import NewsHead from '@/components/NewsHead.vue';
import NewsTitle from '@/components/NewsTitle.vue';
const formData = ref({
  leftTitle: 'HNNUer',
  leftSubtitle: '今天吃什么？',
  rightTitle: '食堂篇',
  rightSubtitle: 'Special Recommendation',
  // 添加新的数据字段
  sections: [
    {
      title: '兰桂苑二楼-螺蛳粉',
      content: '粉可以让阿姨帮忙煮久一点，软软的更好吃哦！建议微辣，第一次吃点的中辣，鼻涕眼泪齐流(‾◡◝)\n单品推荐:图中为营养套餐(15.5￥)，牛腩螺蛳粉(14￥)也很不错。',
    },
    {
      title: '木兰食堂二楼-铁板炒饭',
      content: '出餐前阿姨会把把饭拌好，赞(`･∀･)b 铁板很烫，小心不要挨到了(‾◡◝)\n单品推荐:图中为铁板鱿鱼饭。',
    },
    {
      title: '江边食堂-烤盘饭',
      content: '称重计费9.9元/3两（150克）有很多菜品可以选，跟吃拆串的烧烤差不多。豪赤(╹ڡ╹ )\n单品推荐:土豆、鸡排、腊肠，韭菜。',
    }
  ]
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

    <div class="newspaper-section" v-for="(section, index) in formData.sections" :key="index">
      <img :src="[luosifen, tiebanyouyu, kaopanfan][index]" :alt="section.title" 
          :class="index % 2 === 0 ? 'section-img-left' : 'section-img-right'">

      <div class="section-text">
        <p style="font-size: 1.6rem;">{{ section.title }}</p>
        <p>{{ section.content }}</p>
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
  /* 根据奇偶性改变排列方向 */
  flex-direction: row;
}

.newspaper-section:nth-child(even) {
  flex-direction: row-reverse;
}

.section-img-left, .section-img-right {
  width: 40%;
}

.section-text {
  margin-left: 15px;
}
</style>
