/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 02 Jul 2025
 * Time: 12:15 PM
 * Email: zishan.softdev@gmail.com
 */

import React, {Fragment} from 'react';

const PageWrapper = ({pageHeader, pageSubHeader, pageTabHeader, children}) => {
    return (
        <Fragment>
            <div className="page-header">
                {pageHeader}
            </div>

            {
                pageSubHeader ? <div
                    className="page-sub-header"
                >
                    {pageSubHeader}
                </div> : null
            }

            {
                pageTabHeader ? <div
                    className="page-tab-header"
                >
                    {pageTabHeader}
                </div>: null
            }

            {
                !pageTabHeader ? <div
                    className={`${pageSubHeader ? "page-content-two" : "page-content"}`}
                >
                    {children}
                </div> : null
            }
        </Fragment>
    );
};

export default PageWrapper;