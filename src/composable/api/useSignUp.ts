import axios from "axios";
import request from "./useRequests";


export function getSignUp(name:string,password:string) {
  try{
    return request.post('/user/registry',{
      "name":name,
      "password":password
    })
  }catch(e){
    console.log("发生了错误")
    alert(e)
  }
}