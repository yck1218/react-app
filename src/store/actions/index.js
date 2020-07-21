import {CESHI,AJAX,CATE} from '../actionTypes';
import { GetCnode,GetAllCates } from '@/utils/api'
export  function  changeMsg(payload){
    return {
        type:CESHI,
        payload
    }
}
export  function  sendAjax(params){
    return function(dispatch){
        GetCnode(params).then(res=>{
            console.log('res',res);
            dispatch({
                type:AJAX,
                payload:res.data.data
            })
        }).catch(err=>{
            console.log('错误',err);
        })
    }
}

export  function  GetCate(params){
    return function(dispatch){
        GetAllCates(params).then(res=>{
            console.log('res',res.data.data);
            dispatch({
                type:CATE,
                payload:res.data.data
            })
        }).catch(err=>{
            console.log('错误',err);
        })

    }

}