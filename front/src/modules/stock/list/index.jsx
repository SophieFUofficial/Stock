import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Switch } from 'antd';
import Axios from '../../../utils/axios';
import DynamicAdd from '../../component/DynamicAdd';
import VirtualTable from '../../component/VirtualTable';
import './index.css';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Code',
        dataIndex: 'code',
        key: 'code',
    },
];

function StockList(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        Axios.axiosGet('/stock/list')
            .then(res => setData(res.data));
    };

    return (
        <div className='list'>
            <div className='operate'>
                <DynamicAdd onClick={() => props.history.push('/stock/add')} />
                <Switch
                    checkedChildren='Stock'
                    unCheckedChildren='Record'
                    defaultChecked
                />
            </div>
            <VirtualTable
                columns={columns}
                dataSource={data}
                // scroll={{
                //     y: height,
                // }}
                pagination={false}
                rowKey={row => row._id}
            />
        </div>
    )
}

export default withRouter(StockList);
