/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 24 Jun 2025
 * Time: 10:23 AM
 * Email: zishan.softdev@gmail.com
 */


import React, {lazy, Suspense, useContext} from 'react';
import {Layout} from "antd";
import {GlobalContext} from "../../context/GlobalContextProvider.jsx";
import LoadingSuspense from "../common/LoadingSuspense.jsx";
import PageRoute from "../../routes/PageRoute.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {ROOT_PATH} from "../../routes/Slug.js";
import Page404 from "../../pages/error-pages/Page404.jsx";

const {Sider, Content} = Layout;
const SideMenu = lazy(() => import("../../pages/SideMenu.jsx"));


const LayoutPage = () => {

    const {collapsed} = useContext(GlobalContext);

    return (
        <Layout>

            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                collapsedWidth={45}
                width={230}
            >
                <Suspense fallback={<LoadingSuspense/>}>
                    <SideMenu/>
                </Suspense>
            </Sider>

            <Layout>
                <Content style={{margin: "10px"}}>
                    <Suspense fallback={<LoadingSuspense/>}>

                        <Routes>
                            {
                                PageRoute.map(route => {
                                    return <Route
                                        key={route.path}
                                        path={route.path}
                                        element={<route.component/>}
                                    />
                                })
                            }

                            <Route
                                path={ROOT_PATH}
                                element={<Navigate to={ROOT_PATH}/>}
                            />

                            <Route path="*" element={<Page404/>}/>

                        </Routes>

                    </Suspense>
                </Content>
            </Layout>

        </Layout>
    );
};

export default LayoutPage;