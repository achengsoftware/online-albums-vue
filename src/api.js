'use strict'
import axios from 'axios'

const BASE = 'http://192.168.140.40:3000/'

function uploadImage(data){
    let url = `${BASE}upload/add`
    let {file,uploaderId} = data;
    // 创建form对象
    let param = new FormData() 
    // 通过append向form对象添加数据
    param.append('file',data.file)
    // 添加form表单中其他数据 
    param.append('uploaderId',uploaderId) 
    let config = {
          headers: {'Content-Type': 'multipart/form-data'}
    }
    // 添加请求头
    return axios.post(url, param, config)
}

 async function login(us,ps){
    let url = `${BASE}user`
    let res  = await axios.get(url)
    console.log(res.data)
    for (const act of res.data) {
        if(act.name === us && act.password === ps)
        {
            return new Promise(resolve =>{
                resolve(true)
            })
        }
    }
    return new Promise(resolve =>{
        resolve(false)
    })
}

export default {
    uploadImage,
    login
}