/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 25 Jun 2025
 * Time: 11:43 AM
 * Email: zishan.softdev@gmail.com
 */
import {CUSTOMER_PATH, GALLERY_PATH, INVENTORY_PATH, ORDER_PATH, ROOT_PATH} from "./Slug.js";
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
    },
    {
        key: "customers",
        title: "Customers",
        path: CUSTOMER_PATH,
        icon: getIcon("user")
    },
    {
        key: "orders",
        title: "Orders",
        path: ORDER_PATH,
        icon: getIcon("request")
    },
    {
        key: "my-gallery",
        title: "My Gallery",
        path: GALLERY_PATH,
        icon: getIcon("rule")
    }

]

export default Navs;