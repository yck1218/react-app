import axios from './fetch';

export function GetCnode(params){
   return  axios({
        url:'/topics',
        method:'GET',
        params

    })
} 
export default{
    GetCnode
}