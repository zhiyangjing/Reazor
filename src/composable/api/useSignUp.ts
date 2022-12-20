import axios from "axios";
import request from "./useRequests";


export function getSignUp(name:string,password:string) {
  try{
    request.post('/user/registry',{
      "name":name,
      "password":password
    })
    console.log("成功注册")
  }catch(e){
    console.log("发生了错误")
    alert(e)
  }
}