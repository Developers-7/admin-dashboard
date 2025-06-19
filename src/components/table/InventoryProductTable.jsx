/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 19 Jun 2025
 * Time: 12:36 PM
 * Email: zishan.softdev@gmail.com
 */

import React, {useEffect, useState} from 'react';
import {Avatar, message, Rate, Table, Typography} from "antd";
import APICall from "../../services/APICall.js";

const InventoryProductTable = () => {

    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    const columns = [
        {
            title: 'Thumbnail',
            dataIndex: 'thumbnail',
            render : (link) => {
                return <Avatar src={link} />;
            }
        },
        {
            title: 'Title',
            dataIndex: 'title'
        },
        {
            title: 'Category',
            dataIndex: 'category'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render : (value) => {
                return `$${value}`
            }
        },
        {
            title: 'Brand',
            dataIndex: 'brand'
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            render : (rating) => {
                return <Rate value={rating} disabled/>
            }
        },
        {
            title: 'Stock',
            dataIndex: 'stock'
        },
        {

            title: 'Description',
            dataIndex: 'description'
        }
    ]

    const getInventoryProducts = async () => {
        try{
            setLoading(true);
            const res = await APICall.getInventoryProducts();
            console.log("Inventory : ",res.data);
            message.success("Product successfully added!");
            setDataSource(res.data.products);
            setLoading(false);
        }catch(err){
            message.error(err.message);
        }
    }
    useEffect(() => {
        getInventoryProducts();
    }, [])
    return (
        <>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={{
                    pageSize: 5,
                }}
                loading={loading}
            />
        </>
    );
};

export default InventoryProductTable;