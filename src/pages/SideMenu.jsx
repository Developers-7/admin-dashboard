/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 11:00 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Button, Menu} from "antd";
import {AppstoreOutlined, PictureOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {Navigate, useNavigate} from "react-router-dom";
import {CUSTOMER_PATH, GALLERY_PATH, INVENTORY_PATH, LOGIN_PATH, ORDER_PATH, ROOT_PATH} from "../routes/Slug.js";


const SideMenu = () => {

    const navigate = useNavigate();
    const items = [
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
        },
        {
            label: 'My Gallery',
            icon: <PictureOutlined/>,
            key: GALLERY_PATH,
        }
    ]

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
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
            <Button onClick={handleLogout} block>Logout</Button>

        </div>
    );
};

export default SideMenu;