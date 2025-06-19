import React from 'react';
import AppHeader from "./components/appHeader/AppHeader.jsx";
import AppFooter from "./components/appFooter/AppFooter.jsx";
import {Space} from "antd";
import SideMenu from "./pages/SideMenu.jsx";
import PageContent from "./pages/PageContent.jsx";
import "./App.css"

const App = () => {
    return (
        <div className="App">
            <AppHeader/>

            <Space className="SideMenu_PageContent">
                <SideMenu />
                <PageContent/>
            </Space>


            <AppFooter/>
        </div>
    );
};

export default App;