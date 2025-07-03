/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 03 Jul 2025
 * Time: 3:00 PM
 * Email: zishan.softdev@gmail.com
 */
import PrivateAPI from "../rest-handlers/PrivateAPI.js";
import {ROLE_TABLE_DATA_URL} from "./APIUrl.js";

export default class RoleService {
    static getRoleData = () => {
        return PrivateAPI.get(ROLE_TABLE_DATA_URL);
    }

}