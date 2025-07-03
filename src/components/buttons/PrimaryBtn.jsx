/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 01 Jul 2025
 * Time: 3:52 PM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Button} from "antd";

const PrimaryBtn = ({btnName, icon, style, loading, disabled=false}) => {
    return (
        <Button
            onClick={() => onClick ? onClick() : null}
            icon={icon ? icon : null}
            loading={loading}
            disabled={disabled}
            className="primary-btn"
            style={{...style}}
        >
            {btnName}
        </Button>
    );
};

export default PrimaryBtn;