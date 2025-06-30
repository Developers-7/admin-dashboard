/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 18 Jun 2025
 * Time: 9:54 AM
 * Email: zishan.softdev@gmail.com
 */

import {
    CUSTOMER_URL, LOGIN_URL, MAIL_COMMENTS_URL,
    PRODUCT_DELETE_URL, PRODUCT_GALLERY_URL,
    PRODUCT_ORDER_URL,
    PRODUCT_URL,
    REVENUE_URL,
    UPDATE_PRODUCT_URL
} from "./APIUrl.js";
import PrivateAPI from "../rest-handlers/PrivateAPI.js";
import PublicAPI from "../rest-handlers/PublicAPI.js";

export default class APICall {

    static getOrders = () => {
        return PrivateAPI.get(PRODUCT_ORDER_URL);
    }


    static deleteOrder = (id) => {
        return PrivateAPI.delete(`${PRODUCT_DELETE_URL}/${id}`);
    }
    // static updateOrder = (id, data) => {
    //     return PrivateAPI.put(`${UPDATE_PRODUCT_URL}/${id}`, data);
    // }
    static updateOrder = (id, data) => {
        return PrivateAPI.put(`${UPDATE_PRODUCT_URL}/${id}`, {
            merge: true,
            products: [data]
        });
    };

    static getRevenue = () => {
        return PrivateAPI.get(REVENUE_URL);
    }

    static getInventoryProducts = () => {
        return PrivateAPI.get(PRODUCT_URL);
    }

    static getProductOrder = () => {
        return PrivateAPI.get(PRODUCT_ORDER_URL);
    }

    static getCustomer = () => {
        return PrivateAPI.get(CUSTOMER_URL);
    }

    static getMailComment = () => {
        return PrivateAPI.get(MAIL_COMMENTS_URL);
    }


    static getProductImages = (name) => {
        return PrivateAPI.get(`${PRODUCT_GALLERY_URL}${name}`,)
    }

    static login = (data) =>{
        return PublicAPI.post(LOGIN_URL, data);
    }

    // static getUserProfile = () => {
    //     return PrivateAPI.get();
    // }

}
