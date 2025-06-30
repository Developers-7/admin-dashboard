/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 30 Jun 2025
 * Time: 10:13 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import ErrorLayout from "../../components/layout/ErrorLayout.jsx";
import {ROOT_PATH} from "../../routes/Slug.js";

const Page403 = () => {
    return (
        <ErrorLayout
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            btnName="Go to Home"
            pathName={ROOT_PATH}
        >

        </ErrorLayout>
    );
};

export default Page403;