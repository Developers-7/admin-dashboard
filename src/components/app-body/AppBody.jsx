/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 23 Jun 2025
 * Time: 3:31 PM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Space} from "antd";
import SideMenu from "../../pages/SideMenu.jsx";
import PageContent from "../../pages/PageContent.jsx";

const AppBody = () => {
    return (
        <Space className="sideMenu_pageContent">
            <SideMenu />
            <PageContent/>
        </Space>
    );
};

export default AppBody;