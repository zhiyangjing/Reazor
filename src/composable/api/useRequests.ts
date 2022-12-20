import axios from "axios";




const request = axios.create({
  baseURL:"/api",
  timeout:10000,
//   timeourequestgetp// Passlist// // // 
})

request.interceptors.response.use(
  res => {
    if(res && res.data){
      if(res.data.success){
        return res.data.data
      }else {
        console.log(1)
        return Promise.reject(res.data.error)
      }
    }else {
      console.log(2)
      return Promise.reject("Error response")
    }
  },err => {
    console.log(3)
    return Promise.reject(err.message)
  }
)

export default request