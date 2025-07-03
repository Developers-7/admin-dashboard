/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 25 Jun 2025
 * Time: 11:43 AM
 * Email: zishan.softdev@gmail.com
 */
import {
    CUSTOMER_PATH,
    EMPLOYEE_LIST_PATH,
    GALLERY_PATH,
    INVENTORY_PATH,
    ORDER_PATH,
    ROLE_LIST_PATH,
    ROOT_PATH
} from "./Slug.js";
import {getIcon} from "../components/Icons.jsx";

const Navs = [
    {
        key: "dashboard",
        title: "Dashboard",
        path: ROOT_PATH,
        icon: getIcon("dashboard"),
        notification: false,
        subMenu: null,
    },
    {
        key: "inventory",
        title: "Inventory",
        path: INVENTORY_PATH,
        icon: getIcon("job"),
        notification: false,
        subMenu: null,
    },
    {
        key: "customers",
        title: "Customers",
        path: CUSTOMER_PATH,
        icon: getIcon("user"),
        notification: false,
        subMenu: null,
    },
    {
        key: "orders",
        title: "Orders",
        path: ORDER_PATH,
        icon: getIcon("request"),
        notification: false,
        subMenu: null,
    },
    {
        key: "my-gallery",
        title: "My Gallery",
        path: GALLERY_PATH,
        icon: getIcon("rule"),
        notification: false,
        subMenu: null,
    },
    {
        key: "user-management",
        title: "User Management",
        icon: getIcon("user"),
        notification: false,
        subMenu: [
            {
                key: "employee-list",
                title: "Employee List",
                path: EMPLOYEE_LIST_PATH,
                icon: getIcon("dot"),
                notification: false,
                subMenu: null,
            },
            {
                key: "role-list",
                title: "Role List",
                path: ROLE_LIST_PATH,
                icon: getIcon("dot"),
                notification: false,
                subMenu: null,
            }
        ]
    }
]
export default Navs;