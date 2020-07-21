import React from 'react';
//引入组件库 样式文件
import 'antd/dist/antd.css';
// import { Button,Row, Col } from 'antd';
import './App.css'
// 集成路由项目
import Box from './modules/layout/index';
import {
withRouter 
} from "react-router-dom";
import Login from '@/modules/login/Login'

import LayoutTop from './modules/layoutTop/index';
 class App extends  React.Component{
  constructor(props){
    super(props)
    this.state={
      token:localStorage.getItem('token')
    }
  }
  //  获取登录首页切换
  getLogin(){
      return(
        <div className='box'>
        <div className='box-top'>
          <LayoutTop  onLogin={()=>this.onLogin()} />
        </div>
      <div className='box-main'>
        <Box></Box>
      </div>
      </div>
      )
    
  }
  onLogin(){
    this.setState({
      token:localStorage.getItem('token')
    })
  }
  render(){
    let {token} =this.state
    return (
        <div className='all'>
            {token ? this.getLogin(): <Login onLogin={()=>this.onLogin()} />}
        </div>
         
       
    );
  }
}

export default withRouter(App)