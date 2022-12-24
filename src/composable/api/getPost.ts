import request from "./useRequests";

export function getPost(a:number,b:number,c:string,d:string){
  try {
    return request.post('/comment',{
      'passageId':a,
      'paragraph':b,
      'marked':c,
      'comment':d
    })
  }catch(e){
    console.log("发生了错误")
    alert(e)
  }
}