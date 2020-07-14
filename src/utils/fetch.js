import axios from 'axios';

// let baseURL='https://cnodejs.org/api/v1';  //cnode 数据接口地址
let baseURL='http://localhost:3000/api/v1';
const fetch = axios.create({
    baseURL:baseURL,
    timeout:7000,
    headers:{
        'Content-Type':'application/json;charset=UTF-8'
    }
});
// 封装请求拦截器
// fetch.interceptors.request.use((config) => {
//     // 在这里做一些检测或者包装等处理
//     // console.log('请求拦截', config)
//     // 鉴权 token添加
//     // config.headers.Authorization = localStorage.getItem('token') || ''
//     // return config
//   });

//   // 封装响应拦截器
// fetch.interceptors.response.use((response) => {
//     // 请求成功
//     // console.log('响应拦截', response)
//     // 数据过滤，根据后端标识字符来进行数据
//     // && response.status==200
//     if (response.data && response.status==200) {
//       return response.data;
//     } else {
//       console.log('网络异步，请稍后再试');
//     }
//   }, (error) => {
//     // 请求失败
//     return Promise.reject(error);
//   });
  
  export default fetch;
  