import React from  'react';
import { DatePicker,Divider, Row, Col ,Button,Space ,List,Input} from 'antd';
// import moment from 'moment';
import { Breadcrumb } from 'antd';
import { HomeOutlined, AccountBookOutlined ,AudioOutlined } from '@ant-design/icons';
// const { RangePicker } = DatePicker;
const { Search } = Input;
export default  class Authority extends React.Component{

constructor(props){
    super(props)
    this.state={
        data: [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
          ]
    }
    
}
blur(e){
    console.log(e.target.value);

}
render(){
    const dateFormat = 'YYYY-MM-DD';
    let {data} =this.state
    
    return(
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                    <AccountBookOutlined />
                    <span> 权限管理 </span>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Divider >权限管理</Divider>
            <div>
                <Row>
                    <Space size={20}>
                        <Col span={3}><Button type="primary">添加</Button></Col>
                        <Col span={3}><Button type="primary">修改</Button></Col>
                        <Col span={3}><Button type="danger">删除</Button></Col>
                        <Col span={6}>
                            <Search
                            placeholder="搜索"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                            />
                        </Col>
                        <Col span={6}></Col>
                    </Space>
                </Row>
                <Divider dashed />
                {/* 内容列表部分 */}
                <List
                size="small"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>
        </div>
    )
}
}