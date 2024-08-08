/* eslint-disable react/jsx-no-undef */
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { useState } from "react";
import { Provider } from "react-redux";

import store from "./store/store";
import AppRoute from "./routes/Router";

import themeContext from "./context/themeContext";
import languageContext from "./context/languageContext";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("en");

    return (
        <>
            <Provider store={store}>
                <themeContext.Provider value={{ darkMode, setDarkMode }}>
                    <languageContext.Provider value={{ language, setLanguage }}>
                        <AppRoute />
                    </languageContext.Provider>
                </themeContext.Provider>
            </Provider>
        </>
    );
}

export default App;
