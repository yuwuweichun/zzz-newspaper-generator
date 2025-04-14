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

// 添加新的更新方法
const updateSection = (index, key, value) => {
  const updatedSections = [...props.modelValue.sections]
  updatedSections[index][key] = value
  emit('update:modelValue', {
    ...props.modelValue,
    sections: updatedSections
  })
}
</script>

<template>
    <!-- title -->
    <div class="input-container">
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