import React, { useContext, useRef } from "react";

// bootstrap
import { Button } from "react-bootstrap";
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

function Welcome({ query, setQuery }) {
    let refInput = useRef("");

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    return (
        <>
            <div className={`welcome ${darkMode ? " text-bg-dark" : ""}`}>
                <div className="container py-3 ">
                    <div
                        className={`context p-5 rounded-3  ${
                            darkMode ? " text-bg-dark" : "bg-light"
                        }`}
                    >
                        <div className="title">
                            <h1 className="text-capitalize">
                                {language === "en"
                                    ? "Welcome to our movie app"
                                    : "مرحبًا بكم في تطبيق الأفلام الخاص بنا"}
                            </h1>
                            <p className="text-secondary">
                                {language === "en"
                                    ? "Millions of movies, TV shows and people to discover. Explore now."
                                    : "ملايين الأفلام والبرامج التلفزيونية والشخصيات التي يمكنك اكتشافها. استكشف الآن."}
                            </p>
                        </div>

                        <div
                            className={`d-flex align-items-center justify-content-between gap-4 flex-sm-column flex-md-row`}
                        >
                            <input
                                type="search"
                                className="form-control rounded"
                                placeholder={
                                    language === "en"
                                        ? "Search and explore"
                                        : "البحث والاستكشاف"
                                }
                                aria-label="Search"
                                aria-describedby="search-addon"
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                }}
                                ref={refInput}
                            />

                            <Button
                                className="bg-warning"
                                variant="warning"
                                onClick={(e) => {
                                    setQuery(refInput.current.value);
                                }}
                            >
                                {language === "en" ? "Search" : "بحث"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Welcome;
