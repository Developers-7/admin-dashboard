/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 29 Jun 2025
 * Time: 11:01 AM
 * Email: zishan.softdev@gmail.com
 */


import React from 'react';
import {Button, Result} from "antd";
import {Link} from "react-router-dom";

const ErrorLayout = ({status, title, subTitle, btnName, pathName}) => {
    return (
        <div>
            <Result
                status={status}
                title={title}
                subTitle={subTitle}
                extra={<Link to={pathName}><Button type="primary">{btnName}</Button></Link>}

            />
        </div>
    );
};

export default ErrorLayout;