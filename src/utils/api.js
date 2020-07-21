import axios from './fetch';

// 获取cnode的数据
export function GetCnode(params){
   return  axios({
        url:'/topics',
        method:'GET',
        params

    })
} 
//登入的接口
export function UserLogin(data){
    return  axios({
         url:'/user/login',
         method:'POST',
         data
 
     })
 } 
//  export function AddGoods(data){
//     return  axios({
//          url:'/user/login',
//          method:'POST',
//          data
 
//      })
//  } 
export function GetAllCates(params){
    return  axios({
         url:'/getAllCates',
         method:'GET',
         params
 
     })
 } 
export default{
    GetCnode,
    UserLogin,
    GetAllCates
}