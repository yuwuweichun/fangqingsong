<script setup>
import {ref,onMounted} from 'vue';
import sidecomponent from '../components/side.vue'
import headercomponent from '../components/header.vue'
import messagecomponent from '../components/message.vue'
// 存放messagecomponent的数组
const messages = ref([]);
// 接收从headercomponent组件传来的新消息并添加到messages数组
const onNewMessage = (newMessage) => {
  messages.value.push(newMessage);
};
// mounted(页面装载阶段) 这部分应该在home.vue中，而不是header.vue
onMounted(async () => {
  const res = await fetch(`${import.meta.env.VITE_VUE_APP_API_URL}/getMessages`);//options method默认值为GET
  if (res.ok) {
    const responseData = await res.json();
    messages.value = responseData;
    console.log(messages.value);
  } else {
    window.alert('获取数据失败喏');
  }
});

let year = new Date().getFullYear();        // 一般都是最新的一年
let author = '';					// 作者名
let record = '湘ICP备2024060314号';			// 备案号
</script>


<template>

    <div class="app">
        <div class="header">
          <headercomponent @add="onNewMessage"></headercomponent>
        </div>
        <div class="main">
            <div class="side">
              <sidecomponent></sidecomponent>
            </div>
            <div class="messageList">
              <messagecomponent v-for="(message,index) in [...messages].reverse()" :key="index" v-bind="message"/>
                <div class="end-spacer"></div>         
            </div>
        </div>
    </div>


    <div class="icp">{{`© ${year} ${author} ` }}<a href="http://beian.miit.gov.cn/" target="_blank">{{ record }}</a></div>

</template>


<style>

@media only screen and (max-width: 600px) {
  .side{
    display: none;
  }
}  
  .icp {
    position: relative;
    bottom: 0;
    right: 0;
    margin: 10px 0;
    width: 100%;
    height: 1vh;
    white-space: pre;
    text-align: center;
    color: gray;
}
.app{
    max-height: 98vh;
    overflow: hidden;
    background-color: #f4f6f9;
}
.main{
    display: flex;
    padding-left: 10px;
}

.messageList{
    max-height: 90vh;
    overflow-y: scroll;
}
.end-spacer{
    height: 10vh;
}
.icp {
	position: absolute;
	bottom: 0;
	right: 0;
	margin: 10px 0;
	width: 100%;
	height: 1vh;
	white-space: pre;
	text-align: center;
	color: gray;
  font-size: small;
	z-index: 1000;
}
.icp > a {
    color: gray;
    text-decoration: none;
}
.icp > a:hover {
    color:lightblue;
    text-decoration: none;
}
</style>
