/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 10:54 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Badge, Image, Space, Typography} from 'antd';
import {BellFilled, MailOutlined} from "@ant-design/icons";

const AppHeader = () => {
    return (
        <div className="AppHeader">
            <Image
                width="40px"
                src="https://cdn-icons-png.flaticon.com/512/5432/5432747.png"
            />
            <Typography.Title>Zishan's Dashboard</Typography.Title>
            <Space>
                <Badge count="5" dot>
                    <MailOutlined style={{ fontSize: 24 }}/>
                </Badge>
                <Badge count= "10">
                    <BellFilled style={{fontSize: 24}}/>
                </Badge>
            </Space>
        </div>
    );
};

export default AppHeader;