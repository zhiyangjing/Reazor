import request from "./useRequests";

export function logout(){
  try{
    console.log("try to log out")
    return request.delete('/user',{
    
    })
  }catch(e){
    alert(e)
  }
}