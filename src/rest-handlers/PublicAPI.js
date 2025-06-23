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

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;

