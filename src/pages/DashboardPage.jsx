/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 2:24 PM
 * Email: zishan.softdev@gmail.com
 */

import React, {useEffect, useState} from 'react';
import {Button, Space, Typography} from "antd";
import DashboardCard from "../components/card/DashboardCard.jsx";
import {DollarCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined} from "@ant-design/icons";
import DashboardTable from "../components/table/DashboardTable.jsx";
import DashboardChart from "../components/chart/DashboardChart.jsx";
import APICall from "../services/APICall.js";
import {LOGIN_PATH} from "../routes/Slug.js";
import {useNavigate} from "react-router-dom";

const DashboardPage = () => {
    const navigate = useNavigate();

    const [orders, setOrders] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [inventory, setInventory] = useState(0);

    const getTotalOrder = async () => {
        const res = await APICall.getProductOrder();
        setOrders(res.data.totalQuantity);
    }

    const getTotalInventory = async () => {
        const res = await APICall.getInventoryProducts();
        setInventory(res.data.total);
    }

    const getTotalCustomer = async () => {
        const res = await APICall.getCustomer();
        setCustomers(res.data.total);
    }

    const getTotalRevenue = async () => {
        const res = await APICall.getRevenue();
        setRevenue(res.data.total);
    }
    useEffect(() => {
        getTotalOrder();
        getTotalInventory();
        getTotalRevenue();
        getTotalCustomer();

    }, [])

    const logOut = () => {
        //localStorage.removeItem("token");
        //window.location.href = LOGIN_PATH;

        localStorage.clear();
        navigate(LOGIN_PATH);
    }

    return (
        <div style={{display: "flex", flexDirection: "column", gap: 20}}>
           <Typography.Title level={4}>Dashboard</Typography.Title>
            <Space direction="horizontal">
                <DashboardCard icon={<ShoppingCartOutlined style={{color: "green", backgroundColor: "rgba(0,255,0,0.25)", borderRadius: 12, paddding: 8, fontSize: 25}}/>} title={"Orders"} value={orders}/>
                <DashboardCard icon={<ShoppingOutlined style={{color: "blue", backgroundColor: "rgba(0,255,255,0.25)", borderRadius: 12, paddding: 8, fontSize: 25}}/>} title={"Inventory"} value={inventory}/>
                <DashboardCard icon={<UserOutlined style={{color: "purple", backgroundColor: "rgba(255,0,0,0.25)", borderRadius: 12, paddding: 8, fontSize: 25}}/>} title={"Customers"} value={customers}/>
                <DashboardCard icon={<DollarCircleOutlined style={{color: "red", backgroundColor: "rgba(0,0,255,0.25)", borderRadius: 12, paddding: 8, fontSize: 25}}/>} title={"Revenue"} value={revenue}/>
            </Space>

            <DashboardTable/>
            <DashboardChart/>

            <Button onClick={logOut}>Logout</Button>

        </div>
    );
};

export default DashboardPage;