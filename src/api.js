'use strict'
import axios from 'axios'

const BASE = 'http://192.168.140.40:3000/upload/'

function uploadImage(data){
    let url = `${BASE}add`
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



export default {
    uploadImage
}