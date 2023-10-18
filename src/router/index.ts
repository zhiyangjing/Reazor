import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { getState } from '@/composable/api/getState'
import { ref } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/playground',
      name: 'playground',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Playground.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/read',
      name: 'read',
      component: () => import('../views/Read.vue')
    },
    {
      path: '/404',
      name: '404',
      component: ()=> import('../views/NotFound.vue')
    },
    {
     path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

const havelogin = ref(false)
async function test(){
  const res = await getState()
  console.log("已有账号登录")
  console.log(res)
}
try {
  test()
  havelogin.value = true
}catch(e){
  
}
// router.beforeEach(async (to, from) => {
//   if (
//     // 检查用户是否已登录
//     !havelogin.value &&
//     // ❗️ 避免无限重定向
//     to.name == 'read'
//   ) {
//     // 将用户重定向到登录页面
//     return { name: 'login' }
//   }
// })

export default router
