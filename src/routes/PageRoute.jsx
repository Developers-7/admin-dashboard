/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 10:52 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Route, Routes} from "react-router-dom";
import {CUSTOMER_PATH, INVENTORY_PATH, ORDER_PATH, ROOT_PATH} from "./Slug.js";
import DashboardPage from "../pages/DashboardPage.jsx";
import InventoryPage from "../pages/InventoryPage.jsx";
import OrderPage from "../pages/OrderPage.jsx";
import CustomerPage from "../pages/CustomerPage.jsx";

const PageRoute = () => {
    return (
        <div>
            <Routes>
                <Route path={ROOT_PATH} element={<DashboardPage/>}/>
                <Route path={INVENTORY_PATH} element={<InventoryPage/>}/>
                <Route path={ORDER_PATH} element={<OrderPage/>}/>
                <Route path={CUSTOMER_PATH} element={<CustomerPage/>}/>
            </Routes>
        </div>
    );
};

export default PageRoute;