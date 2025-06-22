/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 10:51 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import PageRoute from "../routes/PageRoute.jsx";

const PageContent = () => {
    return (
        <div style={{display: "flex", flexDirection: "column" }} className="page_content">
            <PageRoute/>
        </div>
    );
};

export default PageContent;