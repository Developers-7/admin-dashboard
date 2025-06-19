/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 2:25 PM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Space, Typography} from "antd";
import InventoryProductTable from "../components/table/InventoryProductTable.jsx";

const InventoryPage = () => {
    return (
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Inventory</Typography.Title>
            <InventoryProductTable/>
        </Space>
    );
};

export default InventoryPage;