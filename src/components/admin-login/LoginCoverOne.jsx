/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 01 Jul 2025
 * Time: 10:20 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import ImageView from "../viewer/ImageView.jsx";
import './login_cover_one.scss'

const LoginCoverOne = () => {
    return (
        <div className="main_container">

            <div className="child_one">
                <ImageView
                    src="/assets/brand_logo.svg"
                    style={{width: "210px"}}
                />
            </div>

            <div className="child_two">
                <ImageView
                    src="/assets/images/cover_image.png"
                    style={{height: "400px", width: "400px"}}
                />
            </div>

        </div>
    );
};

export default LoginCoverOne;