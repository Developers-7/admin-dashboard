/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 02 Jul 2025
 * Time: 3:46 PM
 * Email: zishan.softdev@gmail.com
 */

import React, {createContext, useEffect, useState} from 'react';
import UserService from "../services/UserService.js";

export const EmployeeContext = createContext("EmployeeContext");

const EmployeeContextProvider = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [employeeList, setEmployeeList] = useState([]);
    const [totalElements, setTotalElements] = useState(0);

    const getEmployeeList = async (params) => {
        try {
            setLoading(true);
            const res = await UserService.getUserList(params);
            setEmployeeList(res.data);
            console.log("Getting user data", res.data);
            setLoading(false);
        } catch (e) {
            console.log("Getting user data", e);
            setLoading(false);
        }
    }

    useEffect(() => {
        getEmployeeList();
    }, [])

    return (
        <EmployeeContext.Provider
            value={{
                loading,
                employeeList,
                totalElements,
            }}
        >

            {children}

        </EmployeeContext.Provider>
    );
};

export default EmployeeContextProvider;