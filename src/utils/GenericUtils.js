/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 25 Jun 2025
 * Time: 2:17 PM
 * Email: zishan.softdev@gmail.com
 */
import {TOKEN} from "../components/constant/ConstantVariables.js";
import {useLocation} from "react-router-dom";

export const getSelectedMenu = (location) => {
    const path = location.pathname.split('/');
    return path[1] ?? "dashboard";
}

export const getErrorMessage = (error) => {

    if (error.response) {
        if(error.response.data)  return error.response.data.message || error.response.data.error;
        return error.response.data;
    }else{
        return error.message;
    }

}

export const authorizationHeader = () => {
    const accessToken = localStorage.getItem(TOKEN);
    return {"Authorization": `Bearer ${accessToken}`};
}


export const bindUrlWithParams = (url, params) => {
    let result = url;

    Object.keys(params).forEach(key => {
        if (!params[key] || params[key].length < 1) {
            delete params[key];
        }
    });

    Object.keys(params).forEach((key, index) => {

        let param = params[key];

        if (Array.isArray(params[key])) {
            param = param.toString();
        }

        if (index === 0) {
            result += `?${key}=${param}`;
        } else {
            result += `&${key}=${param}`;
        }

    });

    return result;
}

export const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}