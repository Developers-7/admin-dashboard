/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 2:25 PM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Space, Typography} from "antd";
import DashboardOrderTable from "../components/table/DashboardOrderTable.jsx";

const OrderPage = () => {
    return (
        <Space direction="vertical">
            <Typography.Title level={4}>Order</Typography.Title>
            <DashboardOrderTable />
        </Space>
    );
};

export default OrderPage;