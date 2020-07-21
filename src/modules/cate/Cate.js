import React, { Component } from 'react'
import { Select} from 'antd';
import {connect} from 'react-redux'
import { GetCate} from '@/store/actions';
const { Option } = Select;

function mapStateToProps(state){
    return {
      cateList:state.getCate.cateList
    }
}
  // 把actions中方法，放在当前组件的props
  // dispatch，这个方法接收一个actions
    //   dispatch  派发
  function mapActionToProps(dispatch) {
    return {
      getCate: (params)=>dispatch(GetCate(params))
    }
  }
  
 class Cate extends Component {
constructor(props){
    super(props)
    this.state={
        cate:[]
    }

}


    componentDidMount(){
        console.log('获取getcate',this.props);
        this.props.getCate()
    }

    getOption(){
        let option = []
        if(this.props.cateList){
            this.props.cateList.map(ele=>{
                option.push(
                <Option key={ele._id} value={ele.cate}>{ele.cate_zh}</Option>
                )
            })
            return option
        }
    }

    render() {

        return (
            <Select
                    showSearch
                    style={{ width: 100 }}
                    placeholder="默认"
                    allowClear
                >
                 {this.getOption()}
                </Select>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(Cate)