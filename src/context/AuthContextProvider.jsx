/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 29 Jun 2025
 * Time: 2:47 PM
 * Email: zishan.softdev@gmail.com
 */

import React, {createContext, useState} from 'react';
import {PROFILE, REFRESH_TOKEN, TOKEN} from "../components/constant/ConstantVariables.js";
import APICall from "../services/APICall.js";
import {getErrorMessage} from "../utils/GenericUtils.js";
import {Toast} from "../components/common/Toast.jsx";

export const AuthContext = createContext("AuthContext");

const token = localStorage.getItem(TOKEN);
let _profile = localStorage.getItem(PROFILE);
_profile = _profile ? JSON.parse(_profile) : null;

const AuthContextProvider = ({children}) => {

    const [isLogin, setIsLogin] = useState(!!token);
    const [profile, setProfile] = useState(_profile);
    const [loginLoading, setLoginLoading] = useState(false);
    const [profileLoading, setProfileLoading] = useState(false);

    const login = async (data) => {
        try{
            setLoginLoading(true);
            const res = await APICall.login(data);

            Toast("success", "Logged In", "You have been successfully logged in!");

            setIsLogin(true);
            setProfile(res.data);

            console.log("New Login : ", res.data);

            localStorage.setItem(TOKEN, res.data.accessToken);
            localStorage.setItem(PROFILE, JSON.stringify(res.data));
            localStorage.setItem(REFRESH_TOKEN, res.data.refreshToken);

            setLoginLoading(false);
        }catch(error){
            setLoginLoading(false);
            const msg = getErrorMessage(error);
            Toast("error", "Error", msg);
        }
    }

    const logout = () => {
        setIsLogin(false);
        setProfile(null);
        localStorage.clear();
    }

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                profile,
                loginLoading,
                profileLoading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;