import request from "./useRequests";

export function getRemark(id:number,comment:string){
  try{
    request.put('/comment',{
      "id":id,
      "comment":comment
    })
    console.log("修改成功")

  }catch(e){
    console.log("发生了错误")
    alert(e)
  }
}