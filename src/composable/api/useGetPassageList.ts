import axios from "axios";
import request from "./useRequests";


export function getPasslist(type:string,page:number|undefined,limit:number|undefined){
  return request({
    method:"GET",
    url:`/passagelist?type=${type}&page=${page}&limit=${limit}`
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