import loadable from '@loadable/component';  //通过插件的来优化模块实现代码分隔  按需加载 优化性能
//按需加载需要的组件 优化性能
const Home = loadable(()=>import('./home/Home'));
const User = loadable(()=>import('./user/User'));
const Authority = loadable(()=>import('./authority/Authority'));
const System = loadable(()=>import('./system/System'));
const Account = loadable(()=>import('./account/Account'));
const Statistics = loadable(()=>import('./statistics/Statistics'));
const Goods = loadable(()=>import('./goods/Goods'));

export default [
    {
        id:1,
        path:'/home',
        title:'后台首页',
        component:Home
    },
    {
        id:2,
        path:'/user',
        title:'用户管理',
        component:User
    },
    {
        id:3,
        path:'/authority',
        title:'权限管理',
        component:Authority
    },
    {
        id:4,
        path:'/system',
        title:'系统管理',
        component:System
    },
    {
        id:5,
        path:'/account',
        title:'账户管理',
        component:Account
    },
    {
        id:6,
        path:'/statistics',
        title:'统计分析',
        component:Statistics
    },
    {
        id:7,
        path:'/goods',
        title:'商品管理',
        component:Goods,
    },
]