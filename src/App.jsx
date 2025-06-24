import React from 'react';
import "./App.css"
import LoginPage from "./pages/LoginPage.jsx";
import LayoutPage from "./components/layout/LayoutPage.jsx";
import {TOKEN} from "./components/constant/ConstantVariables.js";

const App = () => {
    const token = localStorage.getItem(TOKEN);

    return (
        <div className="App">


            {
                !!token ? <LayoutPage/> : <LoginPage/>
            }


        </div>
    );
};

export default App;