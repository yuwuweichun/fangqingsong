<script setup>
import { useRouter } from 'vue-router';
import background from '@/components/background.vue';
const router = useRouter();
 const nevigateTobilibili = () => {
     window.open("https://www.bilibili.com/video/BV1eg411M7TZ/?spm_id_from=333.999.0.0")
 }
 const nevigateToUtools = () => {
     window.open("https://u.tools/")
 }
 const nevigateToEverything = () => {
     window.open("https://www.voidtools.com/zh-cn/")
 }
 const nevigateToOCSguide = () => {
     window.open("https://docs.ocsjs.com/docs/quickly-start")
 }
 const nevigateToOCS = () => {
     window.open("https://docs.ocsjs.com/")
 }
 const nevigateToSpaceSniffer = () => {
     window.open("https://github.com/redtrillix/SpaceSniffer/releases")
 }
 const nevigateToGeek = () => {
     window.open("https://geekuninstaller.com/")
 }
 const nevigateTobilibiliRainmeter = () => {
     window.open("https://search.bilibili.com/all?vt=15863921&keyword=rainmeter")
 }
 const nevigateToRainmeter = () => {
     window.open("https://www.rainmeter.net/")
 }
 const nevigateToTB = () => {
     window.open("https://apps.microsoft.com/detail/9pf4kz2vn4w9?hl=en-us&gl=US")
 }
 </script>





<template>
    <background>
        <div class="parent">
         <div class="main">
             <h3>一、utools+everything</h3>
             <p>uTools，一款新一代的效率工具平台，轻量、简洁、优雅。</p>
             <p>Everything，一款出众的桌面搜索工具，能即时地按照名称查找文件和文件夹。小巧，简洁，高速，低资源</p>
             <div class="buttonArea">
                 <el-button type="success" @click="nevigateTobilibili">utoolsB站视频</el-button>
                 <el-button type="primary" @click="nevigateToUtools">utools官网</el-button>
                 <el-button type="primary" @click="nevigateToEverything">everything官网</el-button>
             </div>
             <p>ps：极力推荐</p>
             <h3>二、OCS网课助手</h3>
             <p>专注于帮助大学生从网课中释放出来，让自己的时间把握在自己的手中。</p>
             <div class="buttonArea">
                <el-button type="success" @click="nevigateToOCSguide">OCS使用教程</el-button>
                <el-button type="primary" @click="nevigateToOCS">OCS官网</el-button>
             </div>
             <p>ps：唯一真神</p>
             <h3>三、SpaceSniffer+Geek</h3>
             <p>SpaceSniffer，一款专业的磁盘空间分析工具，可以用来分析磁盘空间占用情况</p>
             <p>Geek，最好的卸载程序</p>
             <div class="buttonArea">
                <el-button type="primary" @click="nevigateToSpaceSniffer">SpaceSniffer-Github</el-button>
                <el-button type="primary" @click="nevigateToGeek">Geek官网</el-button>
             </div>
             <p>ps：也可在电脑义诊群文件（来自 刘吉泽）中下载</p>
             <h3>四、Rainmeter+translucentTB</h3>
             <p>两款桌面美化工具</p>
             <div class="buttonArea">
                <el-button type="success" @click="nevigateTobilibiliRainmeter">RainmeterB站教程</el-button>
                <el-button type="primary" @click="nevigateToRainmeter">Rainmeter官网</el-button>
                <el-button type="primary" @click="nevigateToTB">translucentTB官网</el-button>
             </div>
             <p>ps：喜欢的可以弄一弄，弄好还是蛮好看的</p>
             <el-button @click="()=> router.push('/')" type="primary" style="margin-top: 1vh; margin-bottom: 1vh;width: 5vw;">返回主页</el-button>
         </div>
    </div>
    </background>
 </template>
 
 
<style scoped>
.parent{
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    flex-direction: column; 
} 
.main{
    flex-direction: column; 
    color: black;
    text-align: left;
    width: 60vw;
    padding-left: 5vw;
    border: 1px solid rgba(201, 198, 198, 0.3);
    border-radius: 16px;
    background: rgba(201, 198, 198, 0.55);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11.1px);
    -webkit-backdrop-filter: blur(11.1px);
    border: 1px solid rgba(201, 198, 198, 0.3);
}
.buttonArea{
    display: flex; 
}
button{
    height: 3vh;
}

</style>