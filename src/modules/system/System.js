import React from  'react';
import { connect } from 'react-redux';
import { changeMsg } from '@/store/actions';

// 把state中的数据，变成当成组件的props
function mapStateToProps(state){
    return {
      msg:state.ceshi.msg
    }
}
  // 把actions中方法，放在当前组件的props
function mapActionToProps(dispatch) {
    return {
      change: (payload)=>dispatch(changeMsg(payload))  
    }
  }
 class System extends React.Component{

// constructor(props){
//     super(props)
    
// }
render(){
    return(
        <div>
            <h1>
                我是系统管理页面
                <br/>
                {this.props.msg}
            </h1>
        </div>
    )
}
}
 
export default  connect(mapStateToProps,mapActionToProps)(System)