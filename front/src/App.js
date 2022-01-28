import React, { useState, useEffect } from 'react';
import { Menu, Breadcrumb } from 'antd';
import { Route, Router, Switch } from 'react-router';
import { UnorderedListOutlined, PieChartOutlined } from '@ant-design/icons';
import { createHashHistory } from 'history';
import _ from 'lodash';
import MyFooter from './modules/footer';
import './App.css';
import 'antd/dist/antd.css';

import StockList from './modules/stock/list';
import StockAdd from './modules/stock/add';

const history = createHashHistory();

const menus = [
    {
        id: 'stock',
        name: 'Stock',
        icon: <UnorderedListOutlined />,
    },
    {
        id: 'echarts',
        name: 'Echarts',
        icon: <PieChartOutlined />,
    }
];

function App() {
    const [currentMenu, setMenu] = useState('stock');
    const [path, setPath] = useState([]);
    useEffect(() => {
        getPath();
    }, []);
    const getPath = () => {
        const hash = window.location.hash.split('/');
        setPath(hash.filter(val => val !== '#').map(val => _.startCase(val)));
    };

    return (
        <div className='app'>
            <div className='header'>
                <div className='title'>STOCK</div>
                <div className='diver'>|</div>
                <Menu activeKey={currentMenu} onClick={item => setMenu(item.key)} mode='horizontal' style={{ height: 50, alignItems: 'end', width: 800 }}>
                    {
                        menus.map(val => {
                            return <Menu.Item key={val.id} icon={val.icon}>{val.name}</Menu.Item>;
                        })
                    }
                </Menu>
            </div>
            <div className='content'>
                <Breadcrumb style={{ margin: '8px 0' }}>
                    {
                        path.map(val => (
                            <Breadcrumb.Item>{val}</Breadcrumb.Item>
                        ))
                    }
                </Breadcrumb>
                <div className='site-layout-content'>
                    <Router history={history}>
                        <Switch>
                            <Route exact path='/' component={StockList}/>
                            <Route exact path='/stock/list' component={StockList}/>
                            <Route exact path='/stock/add' component={StockAdd}/>
                        </Switch>
                    </Router>
                </div>
            </div>
            <div className='footer'>
                <MyFooter/>
            </div>
        </div>
    );
}

export default App;
