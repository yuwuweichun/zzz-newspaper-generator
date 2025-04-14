<script setup>
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
          <input
            :value="modelValue.head"
            @input="updateValue('head', $event.target.value)"
            type="text"
          >
        </label>
      </div>

      <div class="input-group">
        <label>
          左侧主标题
          <input
            :value="modelValue.leftTitle"
            @input="updateValue('leftTitle', $event.target.value)"
            type="text"
          >
        </label>
      </div>
      
      <div class="input-group">
        <label>
          左侧副标题
          <input
            :value="modelValue.leftSubtitle"
            @input="updateValue('leftSubtitle', $event.target.value)"
            type="text"
          >
        </label>
      </div>
      
      <div class="input-group">
        <label>
          右侧主标题
          <input
            :value="modelValue.rightTitle"
            @input="updateValue('rightTitle', $event.target.value)"
            type="text"
          >
        </label>
      </div>
      
      <div class="input-group">
        <label>
          右侧副标题
          <input
            :value="modelValue.rightSubtitle"
            @input="updateValue('rightSubtitle', $event.target.value)"
            type="text"
          >
        </label>
      </div>

      <!-- section -->
      <div class="section-inputs" v-for="(section, index) in modelValue.sections" :key="index">
        <p>第 {{ index + 1 }} 个板块</p>
        <div class="input-group">
          <label>
            标题
            <input
              :value="section.title"
              @input="updateSection(index, 'title', $event.target.value)"
              type="text"
            >
          </label>
        </div>
        <div class="input-group">
          <label>
            内容
            <textarea
              :value="section.content"
              @input="updateSection(index, 'content', $event.target.value)"
            ></textarea>
          </label>
        </div>

        <div class="input-group">
          <label>
            图片上传
            <input
              type="file"
              accept="image/*"
              @change="handleImageUpload(index, $event)"
            >
          </label>
          <!-- 图片预览 -->
          <img 
            v-if="section.imageUrl" 
            :src="section.imageUrl" 
            alt="预览图"
            style="max-width: 200px; max-height: 200px; margin-top: 10px;"
          >
        </div>
        
      </div>
    </div>
  </template>

<style scoped>
.input-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  padding: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

.head-input-group {
  width: 1000px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-inputs {
  width: 1000px;
}


label {
  color: #333;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
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
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.1rem;
  resize: none; /* 禁止调整大小 */
  min-height: 100px; /* 设置最小高度 */
  width: 100%; /* 宽度填满父容器 */
  font-family: inherit; /* 继承父元素字体 */
}

textarea:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}
</style>