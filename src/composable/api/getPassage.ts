import axios from "axios";
import request from "./useRequests";


// export function getPassage(){
//   request({
//     method:"GET",
//     url:`/passage/:id`
//     params:
    
//   }).then((res)=>{
//     console.log(res)
//   })
// }

export function getPassage() {
  request({
    url:'/passage/:id',
    method:'get',
    params:{
      id:3
    }
  })
  .then((res)=>{
    console.log(res)
  })
}

// export function getPassage() {
//   request.get('/passage/:id',{
//     params:{
//       "id":"1",
//     }
//   }).then((res)=>{
//     console.log(res)
//   })
// }