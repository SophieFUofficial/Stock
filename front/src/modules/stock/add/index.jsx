import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Form, Input, Button, Select, InputNumber, message } from 'antd';
import { SwapOutlined, PlusOutlined, ColumnHeightOutlined } from '@ant-design/icons';
import Axios from '../../../utils/axios';
import './index.css';

const { Option } = Select;

const extraField = [
    {
        id: 'type',
        label: 'Type',
        component:
            <Select>
                <Option value='融'>融</Option>
                <Option value='次新'>次新</Option>
                <Option value='创'>创</Option>
                <Option value='US'>US</Option>
            </Select>,
    },
    {
        id: 'priority',
        label: 'Priority',
        component: <InputNumber />,
    },
];

function StockAdd(props) {
    const [form] = Form.useForm();
    const [addVisible, setAddVisible] = useState(false);

    const submit = data => {
        Axios.axiosPost('/stock/add', data)
            .then(res => {
                if (res.result === 'success') {
                    message.success('Add success');
                    props.history.push('/stock/list');
                }
            });
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div className='add'>
            <div className='operate'>
                <div
                    onClick={() => props.history.push('/stock/list')}
                    className='back'
                ><SwapOutlined className='icon' />&nbsp;&nbsp;Back</div>
            </div>
            <Form
                className='form'
                form={form}
                name='stock'
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                onFinish={values => submit(values)}
            >
                <Form.Item
                    label='Name'
                    name='name'
                    rules={[
                        {
                            required: true,
                            message: 'Please input stock name!',
                        },
                    ]}
                ><Input/></Form.Item>
                <Form.Item
                    label='Code'
                    name='code'
                    rules={[
                        {
                            required: true,
                            message: 'Stock code is required!',
                        },
                    ]}
                ><Input/></Form.Item>
                <Form.Item
                    label='Description'
                    name='description'
                ><Input/></Form.Item>
                {
                    addVisible ? extraField.map(val => (
                        <Form.Item
                            label={val.label}
                            name={val.id}
                        >{val.component}</Form.Item>
                    )) : null
                }
                <Form.Item
                    wrapperCol={{ offset: 8 }}
                >
                    {
                        addVisible ?
                            <Button
                                type="dashed"
                                onClick={() => setAddVisible(false)}
                                style={{ width: '50%' }}
                                icon={<ColumnHeightOutlined />}
                            >
                                Pack up
                            </Button> :
                            <Button
                                type="dashed"
                                onClick={() => setAddVisible(true)}
                                style={{ width: '50%' }}
                                icon={<PlusOutlined />}
                            >
                                Add more field
                            </Button>
                    }
                </Form.Item>
                <Form.Item
                    wrapperCol={{ offset: 10 }}
                >
                    <Button onClick={onReset} style={{ marginRight: 10 }}>Reset</Button>
                    <Button type='primary' htmlType='submit'>Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default withRouter(StockAdd);
