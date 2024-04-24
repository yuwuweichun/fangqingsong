<script setup>
import { useRouter } from 'vue-router';
import background from '@/components/background.vue';
const router = useRouter();
const nevigateTozhihu = ()=>{
    window.open("https://zhuanlan.zhihu.com/p/672525437");
}
const nevigateTocozeDoc = ()=>{
    window.open("https://www.coze.com/docs/zh_cn/welcome.html");
}
const nevigateTocoze = ()=>{
    window.open("https://www.coze.com/");
}
</script>

<template>
<background>
    
    <div class="main">
        <h2>coze简介</h2>
        <p>Coze 是字节跳动推出的新一代一站式 AI Bot 开发平台。</p>
        <p>无论你是否有编程基础，都可以在 Coze 平台上快速搭建基于 AI 模型的各类问答 Bot，从解决简单的问答到处理复杂逻辑的对话。并且，你可以将搭建的 Bot 发布到各类社交平台和通讯软件上，与这些平台/软件上的用户互动。</p>
        <ol>
            <li>AI模型：GPT-3.5（16k）GPT-4（8k）GPT-4Turbo（128k）</li>
            <li>插件扩展：Coze 集成了一套丰富的插件工具，扩展了 AI 机器人的潜力。</li>
            <li>工作流：Coze 的工作流功能可以用来处理逻辑复杂，且有较高稳定性要求的任务流。</li>
            <li>Persona & Prompt：不会写Prompt？coze提供了Optimize功能，可以自动优化你的Prompt</li>
        </ol>
        <div class="buttonArea">
            <el-button type="success" @click="nevigateTozhihu">coze知乎教程</el-button>
            <el-button type="success" @click="nevigateTocozeDoc">coze官方文档</el-button>
            <el-button type="primary" @click="nevigateTocoze">coze官网</el-button>
            
        </div>
        <el-button @click="()=> router.push('/')" type="primary" style="margin-top: 2vh;">返回主页</el-button>
    </div>
</background>
</template>

<style scoped>
.main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    color: black;
    width: 50vw;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    padding-bottom: 5vh;
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

</style>