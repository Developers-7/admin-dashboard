/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 11:00 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Menu} from "antd";
import {
    AppstoreOutlined,
    ShopOutlined, ShoppingCartOutlined,
    UserOutlined
} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {CUSTOMER_PATH, INVENTORY_PATH, ORDER_PATH, ROOT_PATH} from "../routes/Slug.js";

const  items = [
    {
        label: 'Dashboard',
        icon: <AppstoreOutlined/>,
        key: ROOT_PATH,
    },
    {
        label: 'Inventory',
        icon: <ShopOutlined/>,
        key: INVENTORY_PATH,
    },
    {
        label: 'Orders',
        icon: <ShoppingCartOutlined/>,
        key: ORDER_PATH,
    },
    {
        label: 'Customers',
        icon: <UserOutlined/>,
        key: CUSTOMER_PATH,
    }
]

const SideMenu = () => {

    const navigate = useNavigate();
    return (
        <div className="side_menu">
            <Menu
                style={{height: "100vh"}}
                mode="vertical"
                items={items}
                onClick={(item) => {
                    navigate(item.key);
                }}
            >
            </Menu>
        </div>
    );
};

export default SideMenu;