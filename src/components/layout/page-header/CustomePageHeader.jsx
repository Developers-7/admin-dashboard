/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 02 Jul 2025
 * Time: 3:02 PM
 * Email: zishan.softdev@gmail.com
 */


import React, {useContext} from 'react';
import {PageHeader} from "@ant-design/pro-layout";
import {Link, useLocation} from "react-router-dom";
import {Breadcrumb, Flex} from "antd";
import {GlobalContext} from "../../../context/GlobalContextProvider.jsx";
import {getIcon} from "../../Icons.jsx";

const formatBreadcrumbName = (segment) => {
    // Decode URL-encoded segment (e.g., IPO%Billing%Address → IPO Billing Address)
    const decodedSegment = decodeURIComponent(segment);

    // Replace hyphens with spaces and split by spaces or remaining special characters
    const words = decodedSegment
        .replace(/-/g, ' ') // Replace hyphens with spaces (e.g., user-list → user list)
        .split(/\s+/) // Split by whitespace
        .filter(word => word); // Remove empty strings

    // Capitalize each word and join with spaces
    return words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

const CustomPageHeader = ({title, subTitle = <></>, extra = [], manualBreadcrumbItems}) => {

    const {collapsed, handleSidebarCollapse} = useContext(GlobalContext);

    const location = useLocation();
    // Split pathname into segments, filter out empty segments
    const pathSegments = location.pathname.split('/').filter(segment => segment);

    // Create breadcrumb items dynamically
    const breadcrumbItems = pathSegments.map((segment, index) => {

        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;

        return {
            key: index,
            title: formatBreadcrumbName(segment),
            path
        }
    });

    return (
        <div className="custom-page-header-wrapper">

            {/*lienHeight used for page header text was not fully displayed some portion was cut down*/}

            <PageHeader
                title={<Flex gap={4} style={{lineHeight: "36px"}}>
                    {
                        collapsed ? <div
                            style={{cursor: "pointer"}}
                            onClick={() => handleSidebarCollapse(!collapsed)}
                        >
                            {getIcon("collapse_icon")}
                        </div> : null
                    }
                    {title}
                </Flex>}
                subTitle={subTitle}
                extra={extra}
            />

            {
                manualBreadcrumbItems?.length > 0 ? (
                    <Breadcrumb separator=">">
                        {manualBreadcrumbItems.map((item, index) => (
                            <Breadcrumb.Item key={item.key}>
                                {index === manualBreadcrumbItems.length - 1 ? (
                                    <span>{item.title}</span>
                                ) : (
                                    <Link to={item.path}>{item.title}</Link>
                                )}
                            </Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                ) : breadcrumbItems.length > 0 ? (
                    <Breadcrumb separator=">">
                        {breadcrumbItems.map((item, index) => (
                            <Breadcrumb.Item key={item.key}>
                                {index === breadcrumbItems.length - 1 ? (
                                    <span>{item.title}</span>
                                ) : (
                                    <Link to={item.path}>{item.title}</Link>
                                )}
                            </Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                ) : null
            }

        </div>
    );
};

export default CustomPageHeader;