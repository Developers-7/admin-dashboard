/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 11:00 AM
 * Email: zishan.softdev@gmail.com
 */

import React, {useEffect, useState} from 'react';
import {Menu} from "antd";
import {Link, useLocation} from "react-router-dom";
import {getIcon} from "../components/Icons.jsx";
import Navs from "../routes/Navs.js";
import {getSelectedMenu} from "../utils/GenericUtils.js";


const SideMenu = () => {

    const location = useLocation();

    const [selectedKeys, setSelectedKeys] = useState(getSelectedMenu(location));

    useEffect(() => {
        setSelectedKeys(getSelectedMenu(location));
    },[location.pathname])

    const getMenuItem = (item) => {
        return (
            {
                key: item.key,
                label: <>
                    {item.title}
                    {item.path && <Link to={item.path}/>}
                </>,
                icon: item.icon,
            }
        )
    }

    const bottomMenu = [
        {
            key: "user",
            label: "Emily Jonson",
            icon: getIcon("user_circle"),
        },

        {
            key: "logout",
            label: "Logout",
            icon: getIcon("logout"),
            onClick: () => logout()
        },
    ]

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div className="side_menu">
            <Menu
                style={{height: "100vh"}}
                theme="light"
                mode="inline"
                onclick={(item)=>setSelectedKeys(item.key)}
                items={Navs.map((item) => {
                    return getMenuItem(item);
                })}
                selectedKeys={[selectedKeys]}
            />


            <Menu
                theme="light"
                mode="inline"
                items={bottomMenu}
            />

        </div>
    )
}

export default SideMenu;