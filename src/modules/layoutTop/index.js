import React from  'react';
import { Button,Row, Col } from 'antd';
import {withRouter } from "react-router-dom";
//利用插件 来让上下文有路由跳转链接
  class layoutTop extends React.Component{
// constructor(props){
//     super(props)
// }
componentDidMount(){
   this.props.history.replace('/home')

}
// 退出登入
logout(){
  // 删除token
  localStorage.removeItem('token')
  // 调取父类传递过来的方法 改变token的存储状态
   this.props.onLogin()
}
render(){
    return(
        <Row>
        <Col span={4}>
          <a className='logo'>
            电商后台管理系统
          </a>
        </Col>
        <Col span={18}></Col>
        <Col span={2}>
          <Button   onClick={this.logout.bind(this)} className='loginBtn' type="primary">退出</Button>
        </Col>
      </Row>
    )
}
}
export default  withRouter(layoutTop)