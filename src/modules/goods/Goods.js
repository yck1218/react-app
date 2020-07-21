import React from  'react';
import loadable from '@loadable/component'; 
import { Form, Input, Button,Select ,Divider,InputNumber , Upload,Checkbox} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const Cate = loadable(()=>import('@/modules/cate/Cate'))
export default  class Goods extends React.Component{
constructor(props){
    super(props)
    this.state={
        msg:'我是商品管理页面的组件数据',
        hot:true
    }   
}
Change(e){
    let  {hot} =this.state
    if(hot){
        this.setState({
            hot:false
        })
    }else{
        this.setState({
            hot:true
        })
    }
}
 onChange(value) {
    console.log(`selected ${value}`);
  }
   onBlur() {
    console.log('blur');
  }
   onFocus() {
    console.log('focus');
  }
   onSearch(val) {
    console.log('search:', val);
  }
  hot(a){
      console.log('是否热销',a);
  }
  onFinish(a){
    console.log(a);
  }

render(){
    let {hot} =this.state 
    const layout = {
        labelCol: {
          span: 2,
        },
        wrapperCol: {
          span: 8,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };
    //  图片上传信息
    const fileList = [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-2',
          name: 'yyy.png',
          status: 'error',
        },
      ];
    const props2 = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        listType: 'picture',
        defaultFileList: [...fileList],
        className: 'upload-list-inline',
      };
    return(

        <div>
            <Divider orientation="left">添加商品</Divider>
            <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={this.onFinish.bind(this)}
            >
                 {/* {这是下拉菜单} */}
                 <Form.Item  label="商品品类" name="cate"
                    rules={[
                        {
                            required: true,
                            message: '该商品是属于哪一类',
                        },
                        ]}>
                    {/* 获取商品品类的组件 */}
                    <Cate></Cate>
                </Form.Item>
                {/* {这是商品名称} */}
                <Form.Item
                    label="商品名称"
                    name="name"
                    rules={[
                    {
                        required: true,
                        message: '该商品的名字是？？？',
                    },
                    ]}
                >
                    <Input allowClear />
                </Form.Item> 
                {/* {这是商品描述} */}
                <Form.Item
                    label="商品描述"
                    name="desc"
                    rules={[
                    {
                        required: true,
                        message: '请描述一下你需要上架的商品！！！',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                {/* {商品价格} */}
                <Form.Item 
                name='price' 
                label='商品价格'
                rules={[
                    {
                        required: true,
                        message: '该商品的价格？？？',
                    },
                    ]}
                >
                    <InputNumber
                    min={0}
                    step={10}
                     formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                     parser={value => value.replace(/\$\s?|(,*)/g, '')} />
                </Form.Item>
                {/* {这是开关 是否为热销} */}
                <Form.Item label='是否热销' name='hot' valuePropName="checked">
                    <Checkbox onChange={(e)=>this.Change(e)}  checked={hot}></Checkbox>
                </Form.Item>
                {/* {商品图片上传} */}
                <Form.Item name='upLoad'>
                <Upload {...props2}>
                    <Button>
                        <UploadOutlined /> Upload
                    </Button>
                </Upload>
                </Form.Item>
                {/* {这是提交按钮} */}
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
}

