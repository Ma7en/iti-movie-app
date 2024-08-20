/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useContext } from "react";

// context
import languageContext from "../../context/languageContext";
import themeContext from "../../context/themeContext";
import MovieContext from "../../context/movieContext";
import PaginationLeft from "./pagination/PaginationLeft";
import PaginationRight from "./pagination/PaginationRight";

// components

function Pagination() {
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
            <ul
                className={`pagination justify-content-center  ${
                    darkMode ? "text-bg-dark" : ""
                }`}
                // dir={`${language === "en" ? "ltr" : "rtl"}`}
            >
                <PaginationLeft />
                {/* {language === "en" ? <PaginationRight /> : <PaginationLeft />} */}
                <li className="page-item">
                    <p
                        className={`page-link ${
                            page === 1 ? "bg-warning text-light" : "text-dark"
                        } ${darkMode ? "text-bg-dark text-white" : ""}`}
                        onClick={(e) => changePage(e.target.innerText)}
                        role="button"
                    >
                        {page <= 2 ? 1 : page - 2}
                    </p>
                </li>
                <li className="page-item">
                    <p
                        className={`page-link ${
                            page === 2 ? "bg-warning text-light" : "text-dark"
                        } ${darkMode ? "text-bg-dark text-white" : ""}`}
                        onClick={(e) => changePage(e.target.innerText)}
                        role="button"
                    >
                        {page <= 2 ? 2 : page - 1}
                    </p>
                </li>
                <li className="page-item">
                    <p
                        className={`page-link ${
                            page >= 3 ? "bg-warning text-light" : "text-dark"
                        } ${darkMode ? "text-bg-dark text-white" : ""}`}
                        onClick={(e) => changePage(e.target.innerText)}
                        role="button"
                    >
                        {page > 3 ? page : 3}
                    </p>
                </li>
                <li className="page-item">
                    <p
                        className={`page-link text-dark ${
                            darkMode ? "text-bg-dark text-white" : ""
                        }`}
                        onClick={(e) => changePage(e.target.innerText)}
                        role="button"
                    >
                        {page > 3 ? page + 1 : 4}
                    </p>
                </li>
                <li className="page-item">
                    <p
                        className={`page-link text-dark ${
                            darkMode ? "text-bg-dark text-white" : ""
                        }`}
                        onClick={(e) => changePage(e.target.innerText)}
                        role="button"
                    >
                        {page > 3 ? page + 2 : 5}
                    </p>
                </li>
                {/* {language === "en" ? <PaginationRight /> : <PaginationLeft />} */}
                <PaginationRight />
            </ul>
        </>
    );
}

export default Pagination;
