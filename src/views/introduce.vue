<template>
    <background @click="handleClick">
        <article class="text">{{ textToShow }}</article>
        <el-button @click="()=> router.push('/')" type="primary" style="margin-top: 30vh;position: absolute;">返回主页</el-button>
    </background>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
import background from '../components/background.vue'

let textIndex = ref(0)
let isTyping = ref(false)
let textToShow = ref('主人你好，还请左键以唤醒我哟( •̀ ω •́ )')
const contentArray = [
    "",
    "主人你好，这里是Alyssa，还请继续左键我，让我为你进行下一步的介绍吧( •̀ ω •́ )",
    "fangqingsong，即放轻松，这是一个匿名社区，Alyssa希望在这里，主人可以放下身份的顾虑，自由地发表你的想法",
    "但是，切忌发表不当言论，Alyssa希望fangqingsong是一个轻松愉快的社区，而不是一个充满戾气的公共厕所＞﹏＜",
    "以下是fangqingsong社区成立的初衷：",
    "与我个人而言，这是一个练手项目；同时，我也希望fangqingsong能够作为计算机协会内部网站，提供一个知识交流，技术分享，资源共享的平台。",
    "当然了，这里也可以是二次元聚集地，留言墙，生活社区...这取决于你们，如果fangqingsong能够面向更多用户，我恐怕晚上睡觉都会笑醒吧(现在是，幻想时间！)",
    "不过，fangqingsong目前只有最简单的留言功能。也许未来，fangqingsong会成为功能更加完善的社区...",
    "如果你来过，请随意留下一条信息吧！什么都行，至少让我知道，fangqingsong不是个摆设( •̀ ω •́ )",
    "很感谢你能看到这里，真的(●'◡'●)"
]

let handleClick = () => {
    if (isTyping.value) {
        return;
    }

    if (textIndex.value < contentArray.length - 1) {
        let str = contentArray[++textIndex.value]
        let i = 0
        let timer = null
                
        isTyping.value = true
        textToShow.value = ""

        timer = setInterval(() => {
            textToShow.value += str[i]
            i++

            if (i === str.length) {
                clearInterval(timer);
                isTyping.value = false; 
            }
        }, 50)
    }
}
</script>

<style scoped>
.text {
    width: 70vw;
    text-align: center;
    z-index: 100;
    cursor: pointer;
    font-size: x-large;
}
</style>