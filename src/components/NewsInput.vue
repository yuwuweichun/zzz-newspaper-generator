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
</script>

<template>
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
    </div>
  </template>

<style scoped>
.input-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 200px;
}

label {
  color: #333;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}
</style>