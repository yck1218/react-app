import React from 'react';
import routes from '../index'
import './style.min.css';
import { Layout, Menu, } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { NavLink, Route } from 'react-router-dom';
//二级引入需要再一级引入的后面
// const { SubMenu } = Menu;
const { Sider, Content } = Layout;

export default class Box extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        };
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    //获取左侧路由导航菜单
    getNavList(){
        return(
            routes.map(ele=>(
                    <Menu.Item key={ele.id} icon={<UserOutlined />}>
                            <NavLink exact  to={ele.path}>{ele.title}</NavLink>
                    </Menu.Item>
        ))
        )
    }
    // 获取中间主要的内容部分
    getContent(){
        return(
            routes.map(ele=>(
                <Route exact key={ele.id} path={ele.path} component={ele.component} /> 
            ))
        )
    }
    //生命周期函数
    componentDidMount(){
        console.log('我是路由数据',routes);
    }
    render() {
        return (
            <div>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <li className='icon'>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                        </li>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                           {this.getNavList()}
                        </Menu>
                    
                    </Sider>
                    <Layout className="site-layout">
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                        {this.getContent()}
                    </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}