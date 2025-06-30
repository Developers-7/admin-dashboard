/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 30 Jun 2025
 * Time: 9:49 AM
 * Email: zishan.softdev@gmail.com
 */


let toastApi = null;

export const setToastApi = (api) => {
    toastApi = api;
};

export const Toast = (type, title, desc) => {

    if (typeof title !== 'string') {
        desc = "error";
    }

    if (typeof desc !== 'string') {
        desc = "Error description not found";
    }

    toastApi?.[type]?.({
        message: title,
        description: desc,
    });
};