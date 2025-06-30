/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 26 Jun 2025
 * Time: 10:26 AM
 * Email: zishan.softdev@gmail.com
 */

import React, {createContext, useState} from 'react';

export const GlobalContext = createContext("GlobalContext");

const GlobalContextProvider = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const handleSidebarCollapse = (collapsed) => {
        setCollapsed(!!collapsed);
    }

    return (
        <GlobalContext.Provider
            value={{

                collapsed,
                handleSidebarCollapse

            }}
        >

            {children}

        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;