/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { useContext } from "react";
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

function HomepageLayout() {
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    return (
        <>
            <div dir={`${language === "en" ? "ltr" : "rtl"}`}>
                <Header />
                <Outlet />
            </div>
        </>
    );
}

export default HomepageLayout;
