import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {providers} from "./ProviderInjection.js";


const getAppWithContextProvider = () => {
    let result = <App/>
    providers.forEach(Provider => {
        result = <Provider>{result}</Provider>
    })
    return result;
}
createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <BrowserRouter>
        {
            getAppWithContextProvider()
        }
    </BrowserRouter>
    // </StrictMode>,
)
