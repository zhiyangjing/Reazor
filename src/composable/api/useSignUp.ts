import axios from "axios";
import request from "./useRequests";


export function getSignIn() {
  try{
    request.post('/user/registry',{
      "name":"Someone",
      "password":"1234"
    })
    console.log("成功注册")
  }catch(e){
    console.log("发生了错误")
    alert(e)
  }
}