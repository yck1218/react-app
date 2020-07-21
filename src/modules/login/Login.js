import React from  'react';
import { Divider,Form, Input, Button ,Modal,message} from 'antd';
import  { withRouter } from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {UserLogin} from '@/utils/api'
  class Login extends React.Component{

constructor(props){
    super(props)
    this.state = { 
        visible: false ,
        name:'',
        password:'',
      
    };
    
}
componentDidMount(){
    console.log('aaaaaa',this.props);
    this.props.history.replace('/login')

}

onFinish(value){
    UserLogin(value).then(res=>{
            //  存储token
        localStorage.setItem('token',res.data.data.token)
        this.props.onLogin()
    }).catch(err=>{
        console.log(err);
        message.error('登录失败，账号或密码错误！！')
    })

}
blur(e){
    console.log(e.target.value); 
    if(!e.target.value){
        this.showModal()

    }
}

//触发弹框
showModal (){
    this.setState({
        visible: true,
      });
}
// 弹框确认 
handleOk(e){
    console.log(e);
    this.setState({
      visible: false,
    });
}
// 弹框取消
handleCancel(e){
    console.log(e);
    this.setState({
      visible: false,
    });
}
render(){
 
    return(
        <div className='login'>
           <div>
           <Divider >欢迎登入电商后台管理系统</Divider>
           <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={(value)=>this.onFinish(value)}
                >
                {/* {账号框} */}
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: '请输入账号！！！',
                    },
                    ]}
                >
                    <Input allowClear
                     prefix={<UserOutlined className="site-form-item-icon" />} 
                     placeholder="Username" 
                     onBlur={(value)=>this.blur(value)} 
                     />
                </Form.Item>
                {/* {密码框} */}
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: '请输入密码！！！',
                    },
                    ]}
                >
                    <Input
                    allowClear
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                {/* {提交} */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登入
                    </Button>
                </Form.Item>
            </Form>
           </div>
           <Modal
            title="提示"
            visible={this.state.visible}
            onOk={()=>this.handleOk()}
            onCancel={()=>this.handleCancel()}>
                请输入账号！！！
           </Modal>
        </div>
    )
}
}
 
export default withRouter(Login)