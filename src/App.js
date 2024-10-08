/* eslint-disable react/jsx-no-undef */
// import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { useState } from "react";
import { Provider } from "react-redux";

// store
import store from "./store/store";

// context
import themeContext from "./context/themeContext";
import languageContext from "./context/languageContext";

// route
import AppRoute from "./routes/Router";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("en");

    return (
        <>
            {/* <div>{process.env.REACT_APP_BASE_API_Link}</div> */}
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
