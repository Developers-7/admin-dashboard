/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 29 Jun 2025
 * Time: 10:58 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';

import ErrorLayout from "../../components/layout/ErrorLayout.jsx";
import {ROOT_PATH} from "../../routes/Slug.js";

const Page404 = () => {
    return (
        <div>
            <ErrorLayout
                status={404}
                title={404}
                subTitle="Sorry, the page you visited does not exist."
                btnName="Go to Home"
                pathName={ROOT_PATH}
            >

            </ErrorLayout>
        </div>
    );
};

export default Page404;