import loadable from '@loadable/component';  //通过插件的来优化模块实现代码分隔  按需加载 优化性能
//按需加载需要的组件 优化性能
import {
    SafetyCertificateOutlined,
    CopyrightCircleOutlined,
    AccountBookOutlined,
    AlertOutlined,
    BugOutlined,
    CiOutlined,
    DashboardOutlined
}  from  '@ant-design/icons'
const Home = loadable(()=>import('./home/Home'));
const User = loadable(()=>import('./user/User'));
const Authority = loadable(()=>import('./authority/Authority'));
const System = loadable(()=>import('./system/System'));
const Account = loadable(()=>import('./account/Account'));
const Statistics = loadable(()=>import('./statistics/Statistics'));
const Goods = loadable(()=>import('./goods/Goods'));
const Login = loadable(()=>import('./login/Login'));


export default [
    {
        id:1,
        path:'/home',
        title:'后台首页',
        component:Home,
        icon:SafetyCertificateOutlined
    },
    {
        id:2,
        path:'/user',
        title:'用户管理',
        component:User,
        icon:CopyrightCircleOutlined
    },
    {
        id:3,
        path:'/authority',
        title:'权限管理',
        component:Authority,
        icon:AccountBookOutlined
    },
    {
        id:4,
        path:'/system',
        title:'系统管理',
        component:System,
        icon:AlertOutlined
    },
    {
        id:5,
        path:'/account',
        title:'账户管理',
        component:Account,
        icon:BugOutlined
    },
    {
        id:6,
        path:'/statistics',
        title:'统计分析',
        component:Statistics,
        icon:CiOutlined
    },
    {
        id:7,
        path:'/goods',
        title:'商品管理',
        component:Goods,
        icon:DashboardOutlined
    },
    {
        id:8,
        path:'/login',
        title:'登入后台',
        component:Login,
        option:true,
        icon:null
    },
]
