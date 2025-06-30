/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 23 Jun 2025
 * Time: 12:11 PM
 * Email: zishan.softdev@gmail.com
 */

import axios from "axios";

const instance = axios.create({
    baseURL: "",
    headers: {
        "Content-Type": "application/json",
    }
});


instance.interceptors.request.use(
    (config) => {

        if (!config.headers.Authorization) {
            config.headers = {...config.headers};
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    }, // If valid response
    async (err) => {
        return Promise.reject(err);
    }
);

export default instance;

