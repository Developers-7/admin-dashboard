/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 19 Jun 2025
 * Time: 3:10 PM
 * Email: zishan.softdev@gmail.com
 */

import React, {useEffect, useState} from 'react';
import {Avatar, message, Table} from "antd";
import APICall from "../../services/APICall.js";

const DashboardOrderTable = () => {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    const columns = [
        {
            title: 'Thumbnail',
            dataIndex: 'thumbnail',
            render: (link) => {
                return <Avatar src={link}/>
            }
        },
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (value) => {
                return `$ ${value}`;
            }
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            render: (value) => {
                return `$ ${value}`;
            }
        }
    ]

    const getProductOrder = async () => {
        try{
            setLoading(true);
            const res = await APICall.getProductOrder();
            console.log(res.data);
            message.success("Getting product order successfully!");
            setDataSource(res.data.products);
            setLoading(false);
        }catch(err){
            message.error(err.message);
        }
    }
    useEffect(() => {
        getProductOrder();
    }, [])

    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataSource}
                loading={loading}
                pagination={false}
            />
        </div>
    );
};

export default DashboardOrderTable;