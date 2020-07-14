import React from 'react';
//引入组件库 样式文件
import 'antd/dist/antd.css';
import './App.css'
// 集成路由项目
import {
  HashRouter
} from "react-router-dom";
import store from './store/index';
// import { Provider } from 'mobx-react';
import Box from './modules/layout/index'
function App() {
  return (
  <HashRouter>
    {/* <Provider store={store}> */}
      <div className='box'>
        <div className='box-top'>
        
        </div>
      <div className='box-main'>
        <Box></Box>
      </div>
      </div>
    {/* </Provider> */}
  </HashRouter>
  );
}

export default App;
