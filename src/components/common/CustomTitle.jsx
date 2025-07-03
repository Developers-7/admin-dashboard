/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 01 Jul 2025
 * Time: 12:44 PM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';

const CustomTitle = ({title="Title", style}) => {
    return (
        <p
            className="custom_title"
            style={{...style}}
        >
            {title}
        </p>
    );
};

export default CustomTitle;