import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

// bootstrap
import { Button } from "react-bootstrap";

function NotFound() {
    const navigate = useNavigate();

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    return (
        <>
            <div
                className={`${darkMode ? "text-bg-dark" : "text-bg-light"}`}
                id="NotFound"
            >
                <div
                    className="container d-flex justify-content-center align-items-center flex-column gap-3"
                    style={{ minHeight: "100vh" }}
                >
                    <div className="fs-1 fw-bold">
                        <h2>
                            {language === "en"
                                ? "Error 404 Not Found Page"
                                : "خطأ 404 لم يتم العثور علي الصفحة"}
                        </h2>
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
                                : "العودة الي الصفحة الرئيسية"}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NotFound;
