/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 10:54 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Typography} from "antd";

const AppFooter = () => {
    return (
        <div className="AppFooter">
            <Typography.Link href="tel:+123456789">+123456789</Typography.Link>
            <Typography.Link href="https://www.google.com" target="_blank">Privacy Policy</Typography.Link>
            <Typography.Link href="https://www.google.com" target="_blank">Terms of Use</Typography.Link>
        </div>
    );
};

export default AppFooter;