/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 01 Jul 2025
 * Time: 11:28 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';

import './login_layout_form_cover.scss'

const LoginLayoutFormOne = ({childrenOne, childrenTwo}) => {
    return (
        <div className='main_layout_form'>
            <div className="children_one">
                {childrenOne}
            </div>

            <div style={{padding: "0, 80px"}}>
                {childrenTwo}
            </div>
        </div>
    );
};

export default LoginLayoutFormOne;