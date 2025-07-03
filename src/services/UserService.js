/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 02 Jul 2025
 * Time: 3:55 PM
 * Email: zishan.softdev@gmail.com
 */
import PrivateAPI from "../rest-handlers/PrivateAPI.js";
import {PRODUCT_URL} from "./APIUrl.js";


export default class UserService {

    static getUserList = (params) => {
        return PrivateAPI.get(PRODUCT_URL, params);
    }
}