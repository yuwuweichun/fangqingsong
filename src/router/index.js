import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../views/home.vue"),
    },
    {
        path: "/introduce",
        component: () => import("../views/introduce.vue"),
    },
    {
        path: "/guide",
        component: () => import("../views/guide.vue"),
    },
    {
        path: "/toolbox",
        component: () => import("../views/toolbox.vue"),
    },
    {
        path: "/coze",
        component: () => import("../views/coze.vue"),
    },
    {
        path: "/aliyun",
        component: () => import("../views/aliyun.vue"),
    },


]

const router = createRouter({
    //有两种模式
    history: createWebHistory(),
    routes
})

export default router;