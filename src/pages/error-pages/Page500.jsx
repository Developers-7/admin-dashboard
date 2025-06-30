/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 30 Jun 2025
 * Time: 10:18 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import ErrorLayout from "../../components/layout/ErrorLayout.jsx";
import {ROOT_PATH} from "../../routes/Slug.js";

const Page500 = () => {
    return (
        <ErrorLayout
            status='500'
            title='500'
            subTitle='Sorry, something went wrong. Please try again later.'
            btnName='Go to Home'
            pathName={ROOT_PATH}
        >

        </ErrorLayout>
    );
};

export default Page500;