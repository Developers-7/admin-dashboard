/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 10:52 AM
 * Email: zishan.softdev@gmail.com
 */
import {CUSTOMER_PATH, GALLERY_PATH, INVENTORY_PATH, ORDER_PATH, ROOT_PATH} from "./Slug.js";
import {lazy} from "react";

const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const InventoryPage = lazy(() => import("../pages/InventoryPage"));
const CustomerPage = lazy(() => import("../pages/CustomerPage"));
const OrderPage = lazy(() => import("../pages/OrderPage"));
const GalleryPage = lazy(() => import("../pages/MyGalleryPage"));

const PageRoute = [
    {
        path: ROOT_PATH,
        component: DashboardPage,
    },
    {
        path: INVENTORY_PATH,
        component: InventoryPage,
    },
    {
        path: CUSTOMER_PATH,
        component: CustomerPage,
    },
    {
        path: ORDER_PATH,
        component: OrderPage,
    },
    {
        path: GALLERY_PATH,
        component: GalleryPage,
    }
]
export default PageRoute;