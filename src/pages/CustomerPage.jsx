/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 2:25 PM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Space, Typography} from "antd";
import DashboardCustomerTable from "../components/table/DashboardCustomerTable.jsx";

const CustomerPage = () => {
    return (
        <Space direction="vertical">
            <Typography.Title level={4}>Customer</Typography.Title>
            <DashboardCustomerTable />
        </Space>
    );
};

export default CustomerPage;