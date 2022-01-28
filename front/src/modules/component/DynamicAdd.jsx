import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import './styles.css';

export default function DynamicAdd(props) {
    const { onClick } = props;

    return (
        <div
            className='dynamic-add'
            onClick={() => onClick && onClick()}
        >
            <PlusCircleOutlined className='dynamic-add-icon' style={{ color: '#1890ff', fontSize: 18 }} />
        </div>
    )
}
