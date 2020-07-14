import React from  'react';
import {GetCnode} from '@/utils/api.js';
  class Home extends React.Component{

constructor(props){
    super(props)
    
}
componentDidMount(){
 
}
//调用cnode的数据
cnode(){
    let params ={
        page:1,
        tab:'',
        limit:10
    }
    GetCnode(params).then(res=>{
        console.log('请求的数据',res);
    })
}
render(){
    return(
        <div>
            <h1>
                我是首页
            </h1>
            <hr/>
            <br/>
            <button onClick={this.cnode.bind(this)}>调取数据</button>
        </div>
    )
}
}
export default Home;