/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 18 Jun 2025
 * Time: 10:29 AM
 * Email: zishan.softdev@gmail.com
 */

export const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
export const VITE_BASE_URL_TWO = import.meta.env.VITE_BASE_URL_TWO;

export const PRODUCT_ORDER_URL = `${VITE_BASE_URL}/carts/1`;
export const PRODUCT_DELETE_URL = `${VITE_BASE_URL}/carts`;
export const UPDATE_PRODUCT_URL = `${VITE_BASE_URL}/carts`;
export const REVENUE_URL = `${VITE_BASE_URL}/carts`;

export const PRODUCT_URL = `${VITE_BASE_URL}/products`;
export const CUSTOMER_URL = `${VITE_BASE_URL}/users`;

export const MAIL_COMMENTS_URL = `${VITE_BASE_URL}/comments`;

export const PRODUCT_GALLERY_URL = `${VITE_BASE_URL}/products/search?q=`;

export const LOGIN_URL = `${VITE_BASE_URL}/auth/login`;

 export const ROLE_TABLE_DATA_URL = `${VITE_BASE_URL_TWO}/todos`;