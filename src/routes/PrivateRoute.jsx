/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 23 Jun 2025
 * Time: 12:53 PM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {LOGIN_PATH} from "./Slug.js";

const PrivateRoute = ({isLogin}) => {
    return (isLogin ? <Outlet/> : <Navigate to={LOGIN_PATH}/>);
}

export default PrivateRoute;