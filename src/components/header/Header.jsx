import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// bootstrap
import { Nav, Navbar } from "react-bootstrap";

// font awsome icons
import { faFilm, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

function Header() {
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const watchlist = useSelector((state) => state.watchlist.watchlist);

    return (
        <>
            <div className="header bg-body-tertiary sticky-top">
                <Navbar className="ps-5 pe-5 bg-warning flex-column flex-md-row  justify-content-between">
                    <NavLink
                        className="navbar-brand fs-4 d-flex align-items-center gap-2"
                        to="/home"
                    >
                        <FontAwesomeIcon icon={faFilm} />
                        <span className="d-inline-block">Movie App</span>
                    </NavLink>

                    <Nav className="d-flex align-items-center">
                        <NavLink className="nav-link pe-3 fw-bold">
                            <svg
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    transform: `rotateZ(${
                                        darkMode ? "180deg" : "0deg"
                                    })`,
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                onClick={() => setDarkMode(!darkMode)}
                            >
                                <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                            </svg>
                        </NavLink>

                        <NavLink
                            className="nav-link pe-3 fw-bold"
                            onClick={() =>
                                setLanguage(language === "EN" ? "AR" : "EN")
                            }
                        >
                            {language}
                        </NavLink>

                        <NavLink
                            className="nav-link fs-5 d-flex align-items-center gap-2"
                            to="/watchlist"
                        >
                            <span>Watchlist</span>
                            <FontAwesomeIcon icon={faHeart} />
                            {watchlist?.length ? (
                                <>
                                    <span className="bg-danger">
                                        {watchlist?.length}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span>0</span>
                                </>
                            )}
                        </NavLink>
                    </Nav>
                </Navbar>
            </div>
        </>
    );
}

export default Header;
