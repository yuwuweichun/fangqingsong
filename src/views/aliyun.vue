<script setup>
import { useRouter } from 'vue-router';
import background from '@/components/background.vue';
const router = useRouter();

const nevigateToStudent = () => {
    window.open("https://developer.aliyun.com/plan/student?spm=a2c6h.12873639.article-detail.7.64232361Z6qqlg&source=5176.11533457&userCode=r3yteowb")
}
const nevigateToProcess = () => {
    window.open("https://developer.aliyun.com/article/1256821")
}
const nevigateToAliyun = () => {
    window.open("https://www.aliyun.com/")
}

</script>

<template>
<background>
    <div class="parent">
    <div class="main">
        <h2>如何白嫖七个月的阿里云服务器</h2>
        <p style="font-size: 14px;">前言：2023年10月31日上午，2023云栖大会在杭州云栖小镇开幕。阿里巴巴集团董事会主席蔡崇信在开幕式上致辞，他提出，阿里巴巴"要打造 AI 时代最开放的云"并宣布一项面向全国高校的重磅计划——“云工开物”计划，为中国4000多万高校学生每人送一台云服务器，希望帮助中国广大青年运用云和AI探索科技创新。</p>
        <p>Q：有一台云服务器，可以做些什么呢？</p>
        <ol>
            <li>搭建个人网站或博客</li>
            <li>学习和实践编程</li>
            <li>个人云存储</li>
            <li>建立在线游戏服务器</li>
            <li>...</li>
        </ol>
        <p>具体配置如下</p>
        <ol>
            <li>虚拟处理器数量：2核(vCPU)</li>
            <li>服务器内存：2 GiB</li>
            <li>磁盘存储空间：40GiB</li>
            <li>网络带宽：1 Mbps</li>
        </ol>
    
        <div class="buttonArea">
            <el-button type="success" @click="nevigateToStudent">ECS云服务器学生权益</el-button>
            <el-button type="success" @click="nevigateToProcess">申请流程</el-button>
            <el-button type="primary" @click="nevigateToAliyun">阿里云官网</el-button>
        </div>
        <p>ps：7个月实际上指的是1+6，完成学生身份认证后，可白嫖1个月，在ECS实例过期前通过实验与认证，可再白嫖6个月</p>
        <el-button @click="()=> router.push('/')" type="primary" style="margin-top: 2vh; width: 5vw;">返回主页</el-button>
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
    font-size: 18px;
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

</style>