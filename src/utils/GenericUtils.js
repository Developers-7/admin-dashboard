/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 25 Jun 2025
 * Time: 2:17 PM
 * Email: zishan.softdev@gmail.com
 */
import {TOKEN} from "../components/constant/ConstantVariables.js";

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
