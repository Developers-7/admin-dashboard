/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 26 Jun 2025
 * Time: 11:03 AM
 * Email: zishan.softdev@gmail.com
 */

import GlobalContextProvider from "./context/GlobalContextProvider.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import EmployeeContextProvider from "./context/EmployeeContextProvider.jsx";
import RoleContextProvider from "./context/RoleContextProvider.jsx";

export const providers = [
    GlobalContextProvider,
    AuthContextProvider,
    EmployeeContextProvider,
    RoleContextProvider,

]