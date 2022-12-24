import request from "./useRequests"

export function getDelete(id:number){
  return request({
    method:"DELETE",
    url:`/comment?id=${id}`
  })
}