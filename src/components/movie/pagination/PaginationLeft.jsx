import React, { useContext } from "react";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// context
import themeContext from "../../../context/themeContext";
import languageContext from "../../../context/languageContext";
import MovieContext from "../../../context/movieContext";

function PaginationLeft() {
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const { page, setPage, maxpages } = useContext(MovieContext);

    const changePage = (p) => {
        if (p <= maxpages) {
            setPage(parseInt(p));
        }
    };

    return (
        <>
            <div className="ma">
                <li className={`page-item ${page === 1 ? "disabled" : ""} `}>
                    <p
                        className={`page-link text-dark ${
                            darkMode ? "text-bg-dark" : ""
                        }`}
                        onClick={() => changePage(page - 1)}
                        role="button"
                        tabIndex="-1"
                        aria-disabled={page === 1 ? "true" : "false"}
                    >
                        <FontAwesomeIcon
                            icon={faAngleLeft}
                            className={`${darkMode ? "text-bg-dark" : ""}`}
                        />
                    </p>
                </li>
            </div>
        </>
    );
}

export default PaginationLeft;
