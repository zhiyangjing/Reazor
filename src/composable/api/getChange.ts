
import axios from "axios";
import request from "./useRequests";


export function getChange(name:string,password:string) {
  try{
    request.put('/user',{
      "name":name,
      "password":password
    })
    console.log("成功修改")
  }catch(e){
    console.log("发生了错误")
    alert(e)
  }
}