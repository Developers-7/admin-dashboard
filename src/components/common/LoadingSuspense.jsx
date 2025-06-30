/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 29 Jun 2025
 * Time: 9:51 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Spin} from "antd";

const LoadingSuspense = ({height = "100%", width = "100%" }) => {

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width,
        height
    }
    return (
        <div style={style}>
            <Spin size="large"/>
        </div>
    );
};

export default LoadingSuspense;