<script setup>
//定义props接收数据
import {computed } from 'vue';
const props = defineProps({
  nickname: String,
  date: String,
  number: Number,
  textarea: String,
  
});
//计算属性
const formatNumber = computed(() => {
  return props.number !== undefined ? props.number.toString().padStart(6, '0') : '';
});
</script>

<template>
    <div class="messagebox">
      <div class="header">
        <span class="nickname">{{ props.nickname }}</span>
        <span class="date">{{ props.date }}</span>
        <span class="number">No.{{ formatNumber }}</span>
      </div>
      <pre class="textarea">{{ props.textarea }}</pre>
    </div>
</template>
  
<style scoped>
.messagebox {
width: 84vw;
min-height: 5vh;
display: flex;
flex-direction: column; 
background-color: #ffffff;
margin: 10px;
padding: 5px;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.header {
  display: flex;
  margin-bottom: 10px;
}

.header span {
  font-size: 14px;
  font-weight: lighter;
}
.nickname {
  width: 33%;
  text-align: left;
}

.date {
  width: 33%;
  text-align: center;
}

.number {
  width: 33%;
  text-align: right;
}
.textarea{
  font-size: 16px;
  white-space: pre-line;
}

</style>
  
  
