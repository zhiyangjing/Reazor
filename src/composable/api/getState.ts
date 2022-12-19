
import axios from "axios";
import request from "./useRequests";


// export function getPasslist(type:string,page:number,limit:number){
//   return request({
//     method:"GET",
//     url:`/users?type=${type}&page=${page}$limit=${limit}/passagelist`
//   })
// }

export function getState() {
  try{
    console.log(request.get('/user/state'))
    console.log("成功获取信息")
  }catch(e){
    alert(e)
  }
}