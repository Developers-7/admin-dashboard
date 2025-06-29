/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 23 Jun 2025
 * Time: 12:53 PM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Navigate} from "react-router-dom";
import {TOKEN} from "../components/constant/ConstantVariables.js";

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem(TOKEN);
    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;