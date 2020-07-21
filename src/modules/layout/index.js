import React from 'react';
import routes from '../index'
import './style.min.css';
import { Layout, Menu, } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';
import { NavLink, Route ,withRouter,Redirect } from 'react-router-dom';
//二级引入需要再一级引入的后面
// const { SubMenu } = Menu;
const { Sider, Content } = Layout;

 class Box extends React.Component {
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
    // 渲染左侧导航菜单
    gitList(){
        let list = [];
        routes.map(ele=>{
            if(!ele.option){
                list.push(
                    <Menu.Item key={ele.id} icon={ <ele.icon/>}>
                            <NavLink exact  to={ele.path}>{ele.title}</NavLink>
                    </Menu.Item>
                )
            }
        })
        return list
    }
    // 获取匹配视图*
    getMain(){
        let main = [];
        routes.map(ele=>{
            if(!ele.option){
                main.push( <Route exact key={ele.id} path={ele.path} component={ele.component} /> )
            }
        }) 
        return main;
    }
    //生命周期函数
    componentDidMount(){
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
                           {this.gitList()}
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
                        {/* {this.getContent()} */}
                        {this.getMain()}
                        <Redirect path='/*' to='/home'></Redirect>
                    </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default withRouter(Box)