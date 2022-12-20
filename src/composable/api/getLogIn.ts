import axios from "axios";
import request from "./useRequests";


// export function login(){
//   request({
//     method:"POST",
//     url:"/user",
//     data:{
//       "name":"someone",
//       "password":"1234",
//     }
//   }).then((res)=>{
//     console.log(res)
//   })
// }
export function login(input1:string,input2:string) {
  try{
    console.log(request.post('/user',{
      "name":input1,
      "password":input2,
    }))
    console.log("成功登录")
  }catch(e){
    alert(e)
  }
}

// export function getSignIn() {
//   try{
//     request.post('/user',{
//       "name":"Someone",
//       "password":"1234"
//     })
//     console.log("成功注册")
//   }catch(e){
//     console.log("发生了错误")
//     alert(e)
//   }
// }