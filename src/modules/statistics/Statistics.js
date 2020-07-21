import React from  'react';
import { Table } from 'antd';  // 表格的数据
import { connect } from 'react-redux';
import {sendAjax} from '@/store/actions';
// import reducer from '@/store/reducers/ceshi';
// import store from '@/store/index';
// 把state中的数据，变成当成组件的props

function mapStateToProps(state){
    return {
      list:state.ceshi.list
    }
}
  // 把actions中方法，放在当前组件的props
  // dispatch，这个方法接收一个actions
    //   dispatch  派发
  function mapActionToProps(dispatch) {
    return {
      cnode: (params)=>dispatch(sendAjax(params))
    }
  }
class Statistics extends React.Component{

constructor(props){
    super(props)
    this.state={
        pageSize:{pageSize:5},
        page:1,
        limit:10,
        tab:'',
        cnode:[]
    }
}

// 选择一页显示几条数据和选择第几页   change 在选择框发生变化时触发
change(a){
   this.setState({
    pageSize:{pageSize:a.pageSize},
    page:a.current,
    limit:a.pageSize
   })
    
}
componentDidMount(){
 this.getCnode()
}
// 渲染页面
fun(){
  return this.props.list.map(ele=>(
    <div key={ele.id}>{ele.title}</div>
  ))
}
//调接口  获取Cnode的数据
getCnode(){
    (async ()=>{
        let {page,limit,tab}=this.state
        let params={page,limit,tab}
       await  this.props.cnode(params)
       console.log('--------------',this.props.list);
    let data =[]
    this.props.list.map(ele=>(
        data.push(
         {
             key: `${ele.id}`,
             name: `${ele.create_at}`,
             age: 18,
             address: `${ele.title}`,
           }
        )
     ))
     this.setState({
        cnode: data
    })
    })()

}
render(){
    const columns = [
        {
          title: '用户id',
          dataIndex: 'name',
          width: 150,
        },
        {
          title: '年龄',
          dataIndex: 'age',
          width: 150,
        },
        {
          title: '标题',
          dataIndex: 'address',
        },
      ];

    return(
      <div>
            <Table 
                columns={columns} 
                dataSource={this.state.cnode}
                pagination={this.state.pageSize}
                scroll={{ y: 450 }} 
                onChange={this.change.bind(this)}
                /> 
                {/* {this.fun()} */}
      </div>
    )
}
}

export default  connect(mapStateToProps,mapActionToProps)(Statistics)