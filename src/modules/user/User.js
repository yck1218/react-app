import React from  'react';
import { connect } from 'react-redux';
import { changeMsg ,sendAjax} from '@/store/actions';
// 把state中的数据，变成当成组件的props
function mapStateToProps(state){
    return {
      msg:state.ceshi.msg,
      list:state.ceshi.list
    }
}
  // 把actions中方法，放在当前组件的props
  // dispatch，这个方法接收一个actions
    //   dispatch  派发
  function mapActionToProps(dispatch) {
    return {
      change: (payload)=>dispatch(changeMsg(payload)),
      cnode: (params)=>dispatch(sendAjax(params))
    }
  }
  

class User extends React.Component{

// constructor(props){
//     super(props)
    
// }
componentDidMount(){
    console.log(this.props.msg);

    console.log("状态管理",this.props);
}
// 点击改变状态管理的数据
click(){
    this.props.change('两只老虎跑得快');
}
//获取Cnode的数据 
getCnode(){
  this.props.cnode({page:1,tab:'',limit:5})
}

getList(){
  return  this.props.list.map(ele=>(
    <div key={ele.id}>{ele.title}</div>
  ))
}
render(){
    return(
        <div>
            <h1>
                我是用户管理页面
            </h1>
            <hr/>
            {this.props.msg}
            <br/>
            <button onClick={this.click.bind(this)}>改变状态管理数据</button>
            <br/>
              <hr/>
            <button onClick={this.getCnode.bind(this)}>获取Cnode的数据</button>
            <hr/>
            <br/>
            {this.getList()}
        </div>
    )
}
}
export default connect(mapStateToProps,mapActionToProps)(User)