<script setup>
//每个ref都包含了一个.value属性，该属性代表当前的值，当.value值发生改变时，任何依赖于这个ref的地方都会重现渲染
import { ref} from 'vue'
const emit = defineEmits(['add'])
const nevigateToGitHub = () => {
  window.open("https://github.com/yuwuweichun/fangqingsong")
}
const nevigateToAlyssa = () => {
  window.open("https://yuwuweichun.github.io/weatherApp/")
}
const data = ref({
  nickname: '',
  date:'',
  //number: 0,  由数据库负责 Auto Increment
  textarea: '',
  
})


//async关键字声明该函数为异步函数
const add = async () => {
  if(data.value.textarea.trim() == ''){
    window.alert('Alyssa提醒主人，你当前的留言内容为空哟(●ˇ∀ˇ●)');
    return;
  }
  if (data.value.nickname.trim() == ''){
    data.value.nickname = '某某';
  }
  data.value.date = formatTime(new Date());  
  //
  const res = await fetch(`${import.meta.env.VITE_VUE_APP_API_URL}/addMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      nickname: data.value.nickname,
      date: data.value.date,
      textarea: data.value.textarea
    }) // 注意排除了 number 字段
  });
  //res，response fetch返回一个promise，这个promise在成功时解析为response对象
  //fetch(url,options) 其中options是一个包含各种请求选项的对象，如方法(method)如GET,POST,PUT等,请求头(headers),请求体(body)等
  
  if (res.ok) {
    const responseData = await res.json();
    
    emit('add', data.value);
    console.log(responseData);
    window.alert('发布成功哩(●ˇ∀ˇ●)');
  } 
  dialog.value = false;
  reset();
  location.reload();
};


const reset = () => {
  data.value = {
    nickname: '',
    textarea: '',
  }
}
//默认dialog窗口是关闭的
const dialog = ref(false);

const dialogClose = () => {
  console.log("关闭")
}

//格式化时间
function formatTime(date) {
    var y = date.getFullYear();
    var m = ("0" + (date.getMonth() + 1)).slice(-2);
    var d = ("0" + date.getDate()).slice(-2);
    var h = ("0" + date.getHours()).slice(-2);
    var min = ("0" + date.getMinutes()).slice(-2);
    var s = ("0" + date.getSeconds()).slice(-2);
    return y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s;
}

</script>

<template>

  <div style="
        margin: 10px;
        display: flex;
        align-items: center;
        height: 10vh;
        background-color: #FFFFFF;
        box-shadow: 5px 5px 2px -2px rgb(0, 0, 0,0.2);
      ">
    <img src="./icons/fangqingsong.png" alt="放青松" width="80px" height="80px">

    <p style="
          font-size: 12px;
          margin-left: 2vw;
          width: 80vw;
          text-align: left;
        ">
      欢迎来到放青松，如你所见，这是一个社区...请随意留下一条信息吧！(●'◡'●)什么都行，留言请按右侧蓝色编辑按钮
    </p>
    <el-button type="primary" @click="dialog = true">
      <el-icon size="large">
        <Edit />
      </el-icon>
    </el-button>

    <el-button type="warning" @click="nevigateToGitHub"><el-icon size="large"><Star /></el-icon></el-button>
    <el-button type="success" @click="nevigateToAlyssa"><el-icon size="large"><Sunrise /></el-icon></el-button>
    
  </div>

  <!--发布内容 对话框-->
  <el-dialog v-model="dialog" width="30vw" title="发布内容" draggable @close="dialogClose">
    <el-form label-width="50">
      <el-form-item label="昵称:">
        <el-input v-model="data.nickname" placeholder="请输入昵称，如果为空，将自动填充‘某某’" />
      </el-form-item>


      <el-form-item label="内容:">
        <el-input type="textarea" v-model="data.textarea" rows="2" placeholder="请填写内容，不可以为空哟(●ˇ∀ˇ●)" />

      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">确认发布</el-button>
        <el-button @click="reset">清空</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

</template>

<style></style>