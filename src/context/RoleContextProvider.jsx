/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 03 Jul 2025
 * Time: 3:03 PM
 * Email: zishan.softdev@gmail.com
 */

import React, {createContext, useState} from 'react';
import RoleService from "../services/RoleService.js";
import {Toast} from "../components/common/Toast.jsx";

export const RoleContext = createContext("RoleContext");

const RoleContextProvider = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [roleList, setRoleList] = useState([]);

    const getRoleData = async () => {
        try{
            setLoading(true);
            const res = await RoleService.getRoleData();
            console.log("Role List : ", res.data);
            setRoleList(res.data);
            setLoading(false);
        }catch(e){
            setLoading(false);
        }
    }

    return (
        <RoleContext.Provider
            value={{
                loading,
                roleList,
                getRoleData,
            }}
        >

            {children}

        </RoleContext.Provider>
    );
};

export default RoleContextProvider;