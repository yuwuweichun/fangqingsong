<script setup>
import { useRouter } from 'vue-router';
import background from '../components/background.vue'
const router = useRouter()
const nevigateToGitHub = () => {
  window.open("https://github.com/yuwuweichun/fangqingsong")
}
</script>

<template>

    
        <background>
            <div class="main">
            <h1>宇宙级免责声明</h1>
            <p style="font-size: 10px; width: 40vw;">用户在我们的网络社区发布的所有内容，完全代表他们自己的观点和立场。我们并不对用户发布的任何内容负责。用户需要保证他们发布的内容符合法律法规，并且对自己发布的内容负全责。我们保留在任何时间，由于任何理由移除或者拒绝显示用户发布的内容的权利。</p>
            <p style="font-size: 10px; width: 40vw;">我们不对任何用户发布的内容以及这些内容可能导致的结果负责。在任何情况下，如果用户发布的内容导致了对他人的侵犯，或者引发了任何法律诉讼或纠纷，用户应独立承担全部责任，我们以及我们的网络社区不会承担任何由用户行为引发的责任。</p>
            <h1>使用手册</h1>
            <p>如何留言：点击主页右上角蓝色编辑按钮即可弹出对话框开始留言</p>
            <p>关于页面：手机端主页侧边栏将隐藏，桌面全屏食用更佳，双击即可进入或退出全屏</p>
            <p>如果可以的话，还请别忘记给我一个小小的star哦(●ˇ∀ˇ●)</p>
            <div style="display: flex;">
                <el-button type="warning" @click="nevigateToGitHub"><el-icon size="large"><Star /></el-icon></el-button>
                <el-button @click="()=> router.push('/')" type="primary">返回主页</el-button>
            </div>
            
            
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
button{
    margin-top: 3vh;
    widows: 5vw;
}
</style>