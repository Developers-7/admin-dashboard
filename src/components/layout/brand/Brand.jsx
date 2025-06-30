/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 26 Jun 2025
 * Time: 2:58 PM
 * Email: zishan.softdev@gmail.com
 */

import React, {useContext} from 'react';
import {getIcon} from "../../Icons.jsx";
import {GlobalContext} from "../../../context/GlobalContextProvider.jsx";
import ImageView from "../../viewer/ImageView.jsx";
import {Flex} from "antd";

const Brand = () => {
    const {collapsed, handleSidebarCollapse} = useContext(GlobalContext);

    return (
        <Flex
            style={{backgroundColor: "white", paddingTop: "10px", paddingBottom: "10px", alignItems: "center", width: collapsed ? "45px" : "230px", justifyContent: collapsed ? "center" : "space-between"}}
        >
            {
                collapsed ? null : <ImageView src="/assets/brand_logo.svg"/>
            }
            <div
                style={{cursor: "pointer"}}
                onClick={() => {
                    return handleSidebarCollapse(!collapsed);
                }}
            >
                {
                    getIcon("collapse_icon")
                }
            </div>

        </Flex>
    );
};

export default Brand;