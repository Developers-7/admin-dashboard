/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 18 Jun 2025
 * Time: 10:34 AM
 * Email: zishan.softdev@gmail.com
 */

import axios from "axios";

const instance = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "application/json",
    }
});

export default instance;