import React, { useContext } from "react";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

// context
import themeContext from "../../../context/themeContext";
import languageContext from "../../../context/languageContext";
import MovieContext from "../../../context/movieContext";

function PaginationRight() {
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
            <div className="zen">
                <li
                    className={`page-item ${
                        page === maxpages ? "disabled" : ""
                    }`}
                >
                    <p
                        className={`page-link text-dark ${
                            darkMode ? "text-bg-dark" : ""
                        }`}
                        onClick={() => changePage(page + 1)}
                        role="button"
                        tabIndex="-1"
                        aria-disabled={page === maxpages ? "true" : "false"}
                    >
                        <FontAwesomeIcon
                            icon={faAngleRight}
                            className={`${darkMode ? "text-bg-dark" : ""}`}
                        />
                    </p>
                </li>
            </div>
        </>
    );
}

export default PaginationRight;
