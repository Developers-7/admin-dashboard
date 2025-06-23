/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 10:52 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Route, Routes} from "react-router-dom";
import {CUSTOMER_PATH, GALLERY_PATH, INVENTORY_PATH, LOGIN_PATH, ORDER_PATH, ROOT_PATH} from "./Slug.js";
import DashboardPage from "../pages/DashboardPage.jsx";
import InventoryPage from "../pages/InventoryPage.jsx";
import OrderPage from "../pages/OrderPage.jsx";
import CustomerPage from "../pages/CustomerPage.jsx";
import MyGalleryPage from "../pages/MyGalleryPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const PageRoute = () => {
    return (
        <div>
            <Routes>
                <Route path={LOGIN_PATH} element={<LoginPage/>}/>
                <Route path={ROOT_PATH} element={<PrivateRoute><DashboardPage/></PrivateRoute>}/>
                <Route path={INVENTORY_PATH} element={<InventoryPage/>}/>
                <Route path={ORDER_PATH} element={<OrderPage/>}/>
                <Route path={CUSTOMER_PATH} element={<CustomerPage/>}/>
                <Route path={GALLERY_PATH} element={<MyGalleryPage/>}/>
            </Routes>
        </div>
    );
};

export default PageRoute;