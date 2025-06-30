import React, {lazy, Suspense, useContext} from 'react';
import "./App.css"
import {AuthContext} from "./context/AuthContextProvider.jsx";
import {ConfigProvider} from "antd";
import {lightComponentsToken, lightToken} from "./theme/light.js";
import LoadingSuspense from "./components/common/LoadingSuspense.jsx";
import {Route, Routes} from "react-router-dom";
import {LOGIN_PATH, PAGE_403_PATH, PAGE_404_PATH, PAGE_500_PATH} from "./routes/Slug.js";
import PrivateRoute from "./routes/PrivateRoute.jsx";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const LayoutPage = lazy(() => import("./components/layout/LayoutPage"));

const Interceptors = lazy(() => import("./rest-handlers/Interceptors.jsx"));
const Page403 = lazy(() => import("./pages/error-pages/Page403.jsx"));
const Page404 = lazy(() => import("./pages/error-pages/Page404.jsx"));
const Page500 = lazy(() => import("./pages/error-pages/Page500.jsx"));


const App = () => {

    const {isLogin} = useContext(AuthContext);

    return (
        <ConfigProvider
            theme={{
                token: {...lightToken},
                components: {...lightComponentsToken}
            }}
        >

            <Suspense
                fallback={<LoadingSuspense/>}
            >
                <Routes>
                    <Route path={LOGIN_PATH} element={<LoginPage/>}/>

                    <Route element={<PrivateRoute isLogin={isLogin}/>}>

                        <Route path={PAGE_403_PATH} element={<Page403/>}/>
                        <Route path={PAGE_404_PATH} element={<Page404/>}/>
                        <Route path={PAGE_500_PATH} element={<Page500/>}/>

                        <Route path="*" element={<LayoutPage/>}/>

                    </Route>
                </Routes>

                <Interceptors/>
            </Suspense>

        </ConfigProvider>
    );
};

export default App;