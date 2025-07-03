/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 03 Jul 2025
 * Time: 3:12 PM
 * Email: zishan.softdev@gmail.com
 */
import {useContext, useEffect} from "react";
import {RoleContext} from "../context/RoleContextProvider.jsx";


const useRoleList = () => {
    const {loading, getRoleData, roleList} = useContext(RoleContext);

    useEffect(() => {
        getRoleData();
    },[])

    return {
        roleList,
        loading,
    }
};

export default useRoleList;