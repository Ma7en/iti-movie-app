/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";

// bootstrap
import { Button } from "react-bootstrap";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

function NoWatch() {
    const navigate = useNavigate();
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    return (
        <>
            <div
                className="d-flex align-items-center justify-content-center flex-column gap-3"
                style={{ minHeight: "80vh" }}
            >
                <div>
                    <FontAwesomeIcon icon={faHeartCrack} size="10x" />
                </div>

                <div>
                    <p className="text-capitalize fs-3">
                        {language === "en"
                            ? "no movies in watch list"
                            : "لا يوجد أفلام في قائمة المشاهدة"}
                    </p>
                </div>

                <div>
                    <Button
                        className="bg-warning fs-3 text-capitalize px-5 py-3"
                        variant="warning"
                        onClick={() => {
                            navigate(`/`);
                        }}
                    >
                        {language === "en"
                            ? "back to home"
                            : "العودة إلى الصفحة الرئيسية"}
                    </Button>
                </div>
            </div>
        </>
    );
}

export default NoWatch;
