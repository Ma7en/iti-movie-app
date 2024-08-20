import React, { useContext } from "react";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

function NoRecommendation() {
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    return (
        <>
            <div className="py-5 text-center">
                <h2 className="fw-bold text-capitalize">
                    {language === "en"
                        ? "No recommendation at this time"
                        : "لا يوجد توصية في هذا الوقت"}
                </h2>
                <h3 className="fw-bold text-capitalize">
                    {language === "en"
                        ? "will be added soon"
                        : "سيتم اضافتها قريبا"}
                </h3>
            </div>
        </>
    );
}

export default NoRecommendation;
