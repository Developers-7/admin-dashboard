/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 3:02 PM
 * Email: zishan.softdev@gmail.com
 */

import React, {useState} from 'react';
import {Card, Space, Statistic} from "antd";

const DashboardCard = ({title, value, icon}) => {

    return (
        <div>
            <Card>
                <Space direction="horizontal">
                    {
                        icon
                    }
                    <Statistic title={title} value={value} />
                </Space>
            </Card>
        </div>
    );
};

export default DashboardCard;