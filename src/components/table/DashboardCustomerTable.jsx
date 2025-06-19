/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 19 Jun 2025
 * Time: 3:33 PM
 * Email: zishan.softdev@gmail.com
 */

import React, {useEffect, useState} from 'react';
import {Avatar, message, Table} from "antd";
import APICall from "../../services/APICall.js";

const DashboardCustomerTable = () => {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    const columns = [
        {
          title: 'Image',
          dataIndex: 'image',
          render: (link) => {
              return <Avatar src={link} />;
          }
        },
        {
            title: 'Name',
            dataIndex: 'firstName'
        },
        {
            title: 'Role',
            dataIndex: 'role'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'Age',
            dataIndex: 'age'
        },
        {
            title: 'Gender',
            dataIndex: 'gender'
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            render: (address) => {
                return <span>{address.address}, {address.city}, {address.state}, {address.country}</span>
            }
        }
    ]

    const getCustomer = async () => {
        try{
            setLoading(true);
            const res = await APICall.getCustomer();
            console.log("Customer : ",res.data);
            message.success("Got all customers");
            setDataSource(res.data.users);
            setLoading(false);
        }catch(err){
            message.error(err.message);
        }
    }
    useEffect(() => {
        getCustomer();
    }, [])


    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataSource}
                loading={loading}
                pagination={{
                    pageSize: 6
                }}
                style={{width: 1000}}

            />
        </div>
    );
};

export default DashboardCustomerTable;