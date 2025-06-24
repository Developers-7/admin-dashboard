/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 24 Jun 2025
 * Time: 10:23 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import AppHeader from "../app-header/AppHeader.jsx";
import AppBody from "../app-body/AppBody.jsx";
import AppFooter from "../app-footer/AppFooter.jsx";

const LayoutPage = () => {
    return (
        <div>
            <AppHeader/>
            <AppBody/>
            <AppFooter/>
        </div>
    );
};

export default LayoutPage;