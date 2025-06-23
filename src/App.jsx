import React from 'react';
import AppHeader from "./components/app-header/AppHeader.jsx";
import AppFooter from "./components/app-footer/AppFooter.jsx";
import "./App.css"
import AppBody from "./components/app-body/AppBody.jsx";

const App = () => {

    return (
        <div className="App">



            <AppHeader/>

            <AppBody/>

            <AppFooter/>
        </div>
    );
};

export default App;