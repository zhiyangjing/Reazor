import axios from "axios";
import request from "./useRequests";


export function getPasslist(){
  request({
    method:"GET",
    url:`/passagelist?type=ch&page=1&limit=2`
  }).then((res)=>{
    console.log(res)
  })
}

// export function getPasslist() {
//   try{
//     console.log(request.get('/passagelist',{
//       "page":2,
//       "limit":4,
//     }))
//     console.log("成功获取文章列表")
//   }catch(e){
//     alert(e)
//   }
// }

// export function login() {
//   try{
//     console.log(request.post('/user',{
//       "name":"someone",
//       "password":"1234",
//     }))
//     console.log("成功登录")
//   }catch(e){
//     alert(e)
//   }
// }