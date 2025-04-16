<script setup>
import html2canvas from 'html2canvas'

const exportToImage = async () => {
  const newspaperElement = document.querySelector('.newspaper-container')

  if (!newspaperElement) {
    alert('找不到报纸容器元素')
    return
  }

  try {
    const canvas = await html2canvas(newspaperElement, {
      scale: 2, // 分辨率（质量）72dpi*scale
      logging: false,
      useCORS: true // 如果需要处理跨域图片
    })

    // 创建下载链接
    const link = document.createElement('a')
    link.download = 'zzz-newspaper.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  } catch (error) {
    console.error('导出失败:', error)
    alert('导出图片时出错，请重试')
  }
}

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
    default: () => ({
      leftTitle: 'HNNUer',
      leftSubtitle: '今天吃什么？',
      rightTitle: '食堂篇',
      rightSubtitle: 'Special Recommendation'
    })
  }
})

const updateValue = (key, value) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [key]: value
  })
}


const updateSection = (index, key, value) => {
  const updatedSections = [...props.modelValue.sections]
  updatedSections[index][key] = value
  emit('update:modelValue', {
    ...props.modelValue,
    sections: updatedSections
  })
}

// 添加图片处理逻辑
const handleImageUpload = (index, event) => {
  const file = event.target.files[0]
  if (file) {
    const imageUrl = URL.createObjectURL(file)
    updateSection(index, 'imageUrl', imageUrl)
  }
}
</script>

<template>
  <div class="input-container">

    <div class="head-input-group">
      <label>
        报头文字
        <input :value="modelValue.head" @input="updateValue('head', $event.target.value)" type="text">
      </label>
    </div>

    <div class="input-group">
      <label>
        左侧主标题
        <input :value="modelValue.leftTitle" @input="updateValue('leftTitle', $event.target.value)" type="text">
      </label>
    </div>

    <div class="input-group">
      <label>
        左侧副标题
        <input :value="modelValue.leftSubtitle" @input="updateValue('leftSubtitle', $event.target.value)" type="text">
      </label>
    </div>

    <div class="input-group">
      <label>
        右侧主标题
        <input :value="modelValue.rightTitle" @input="updateValue('rightTitle', $event.target.value)" type="text">
      </label>
    </div>

    <div class="input-group">
      <label>
        右侧副标题
        <input :value="modelValue.rightSubtitle" @input="updateValue('rightSubtitle', $event.target.value)" type="text">
      </label>
    </div>

    <!-- section -->
    <div class="section-inputs" v-for="(section, index) in modelValue.sections" :key="index">
      <p>第 {{ index + 1 }} 个板块</p>
      <div class="input-group">
        <label>
          标题
          <input :value="section.title" @input="updateSection(index, 'title', $event.target.value)" type="text">
        </label>
      </div>
      <div class="input-group">
        <label>
          内容
          <textarea :value="section.content" @input="updateSection(index, 'content', $event.target.value)"></textarea>
        </label>
      </div>

      <div class="input-group">
        <label>
          图片上传
          <input type="file" accept="image/*" @change="handleImageUpload(index, $event)">
        </label>
        <!-- 图片预览 -->
        <img v-if="section.imageUrl" :src="section.imageUrl" alt="预览图"
          style="max-width: 200px; max-height: 200px; margin-top: 10px;">
      </div>

    </div>

    <div class="export-button">
      <button @click="exportToImage">导出为图片</button>
    </div>

  </div>
</template>

<style scoped>
.input-container {
  background:
    /* 左右渐变 */
    linear-gradient(to right,
      rgba(231, 213, 198, 0.85),
      rgba(225, 207, 193, 0.85)),
    /* 纸张纹理 */
    var(--noise-filter-url);

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  padding: 1rem;
  width: 720px;
  padding: 10px 20px;
  margin: 0 auto;

}

.head-input-group {
  width: 760px;
  display: flex;
  justify-content: center;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-inputs {
  width: 720px;
}


label {
  color: #333;
}

input {
  padding: 0.5rem;
  border: 1px solid #282D29;
  border-radius: 4px;
  font-size: 1rem;
  min-width: 200px;
  font-family: inherit;
}

input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}

textarea {
  border: 1px solid #282D29;
  border-radius: 4px;
  font-size: 1.1rem;
  resize: none;
  /* 禁止调整大小 */
  min-height: 100px;
  /* 设置最小高度 */
  width: 100%;
  /* 宽度填满父容器 */
  font-family: inherit;
  /* 继承父元素字体 */
}

textarea:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}


.export-button {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.export-button button {
  padding: 10px 20px;
  background:
    /* 左右渐变 */
    linear-gradient(to right,
      rgba(40, 45, 41, 0.85),
      rgba(46, 46, 37, 0.85)),
    /* 纸张纹理 */
    var(--noise-filter-url);

  color: #E8D8C8;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease; /* 添加过渡效果 */
}

.export-button button:active {
  transform: scale(0.8); /* 点击时按钮轻微缩小 */
}
</style>