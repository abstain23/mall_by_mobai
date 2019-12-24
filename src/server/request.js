import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:'http://106.54.54.237:8000/api/w1',
    timeout:5000
  })

  instance.interceptors.request.use((config)=>{
    // console.log("requesetconfig",config)
    return config
  },(err)=>{
    console.log(err)
  })

  instance.interceptors.response.use(res=>{
    // console.log('res',res)
    return res.data
  },(err)=>{
    console.log(err)
  })

  return instance(config)
}