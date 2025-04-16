<script setup>
import { ref } from 'vue'
import NewsInput from './components/NewsInput.vue'
import NewsHead from '@/components/NewsHead.vue';
import NewsTitle from '@/components/NewsTitle.vue';
const formData = ref({
  // Newspaper Head
  head: '城市快报',
  // Newspaper Title
  leftTitle: '1.7版本',
  leftSubtitle: '将于4月23日上线',
  rightTitle: '调频&复刻',
  rightSubtitle: '「薇薇安」&「简」，',
  // Newspaper Sections
  sections: [
    {
      title: '生日快乐格莉丝|最优先事项',
      content: '「逻辑核心检修完毕，接下来是...阿全?还有小不点。」\n「再怎么忙也不能把自己的生日忘记了啊.....」\n「老姐，生日快乐!」',
    },
    {
      title: '数据悬赏-实战模拟',
      content: '「活动时间」:\n2025/04/16 04:00:00~2025/04/21 03:59:59\n每日可增益5张怪物卡，增益效果将在每日4:00重置',
    },
    {
      title: '第二季先导PV|锁秽遮目障万重',
      content: '锁渊照影，沉墨萤图。\n所谓的隐秘，\n恰是灾厄之始。\n\n法厄同\n这次由「你」，\n将邪孽，碾碎于尘。',
    }
  ]
})

import image1 from '@/assets/images/image1.png'
import image2 from '@/assets/images/image2.png'
import image3 from '@/assets/images/image3.avif'

</script>

<template>

  <div class="generator-container">
    <NewsInput v-model="formData" />
  </div>

  <hr>

  <div class="newspaper-container">
  
    <div class="newspaper-head">
      <NewsHead :head-text="formData.head" />
    </div>

    <div class="newspaper-title">
      <NewsTitle :left-title="formData.leftTitle" :left-subtitle="formData.leftSubtitle"
        :right-title="formData.rightTitle" :right-subtitle="formData.rightSubtitle" />
    </div>

    <div class="newspaper-section" v-for="(section, index) in formData.sections" :key="index">
      <img :src="section.imageUrl || [image1, image2, image3][index]" :alt="section.title"
        :class="index % 2 === 0 ? 'section-img-left' : 'section-img-right'">

      <div class="section-text">
        <p style="font-size: 1.6rem;">{{ section.title }}</p>
        <!-- white-space: pre-line 保留文本中的换行符 -->
        <p style="white-space: pre-line;">{{ section.content }}</p>
      </div>
    </div>

  </div>




</template>

<style scoped>
.newspaper-container {
  background:
    /* 左右渐变 */
    linear-gradient(to right,
      rgba(231, 213, 198, 0.85),
      rgba(225, 207, 193, 0.85)),
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

.section-img-left,
.section-img-right {
  width: 40%;
}

.section-text {
  margin-left: 15px;
  flex: 1;
}

hr {
  width: 760px;
  height: 2px;
  border: none;
  background: linear-gradient(to right, 
    rgba(40, 45, 41, 0.3), 
    rgba(40, 45, 41, 0.8), 
    rgba(40, 45, 41, 0.3));
  margin: 5px auto;
  border-radius: 2px;
}
</style>
