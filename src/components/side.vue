<script setup>
import { reactive, ref } from 'vue'

import { useRouter } from 'vue-router';
const router = useRouter();
// 默认选中的菜单索引
// let selectedIndex = ref("3")
let selected = (index, indexPath) => {
    console.log("index", index, "indexPath", indexPath)
}
//默认打开
let defaultOpeneds = ref(["1","3"])

const nevigateToAbout = () => {
    window.location.href = "https://yuwuweichun.github.io/Winter-vacation-code-punch-in/about.html"
}

</script>


<template>
  <div class="side">
      <el-menu  :default-active="selectedIndex" @select="selected" :default-openeds="defaultOpeneds"
                background-color="#01847f" text-color="#f0f0f0" active-text-color="#003153" style="width: 12vw;height: 90vh;">
          <el-sub-menu index="1">
              <template #title>
                  <i class="el-icon-menu"></i>
                  <span><p>关于放青松</p></span>
              </template>
              <el-menu-item-group>
                  <el-menu-item index="1-1" @click="()=> router.push('/introduce')"><p>本站介绍</p></el-menu-item>
                  <el-menu-item index="1-2" @click="()=> router.push('/guide')"><p>使用手册</p></el-menu-item>
              </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item index="2" @click="()=> router.push('/toolbox')">
              <i class="el-icon-edit"></i>
              <span><p>计协工具箱</p></span>
          </el-menu-item>
          <el-sub-menu index="3">
              <template #title>
                  <i class="el-icon-menu"></i>
                  <span><p>白嫖指南</p></span>
              </template>
              <el-menu-item-group>
                  <el-menu-item index="3-1" @click="()=> router.push('/coze')"><p>字节AI  Coze</p></el-menu-item>
                  <el-menu-item index="3-2" @click="()=> router.push('/aliyun')"><p>阿里云服务器</p></el-menu-item>
              </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item index="4" @click="nevigateToAbout">
              <i class="el-icon-setting"></i>
              <span><p>关于我们</p></span>
          </el-menu-item>
      </el-menu>
  </div>
</template>

<style scoped>
p{
    font-size: 12px;
}
</style>