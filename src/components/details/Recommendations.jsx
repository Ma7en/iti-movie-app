/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

// components
import Loader from "../loader/Loader";
import MovieCard from "../movie/MovieCard";
import NoRecommendation from "./NoRecommendation";

function Recommendations() {
    const { id } = useParams();

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const [recommendMovie, setRecommendMovie] = useState(null);
    const [error, setError] = useState(false);

    // get Recommendations # https://api.themoviedb.org/3/movie/533535/recommendations?api_key=fir9f4fmkd9dmi3994nfir4?language=en-US
    useEffect(() => {
        const fetchMoviesRecommend = async () => {
            try {
                await axios
                    .get(
                        `${
                            process.env.REACT_APP_BASE_API_Link ||
                            process.env.REACT_APP_BASE_API_Link.slice(1, -2)
                        }movie/${id}/recommendations?api_key=${
                            process.env.REACT_APP_API_KEY ||
                            process.env.REACT_APP_API_KEY.slice(1, -2)
                        }&language=${language === "en" ? "en-US" : "ar"}`
                    )
                    .then((response) => {
                        setRecommendMovie(response.data.results);
                    });
            } catch (error) {
                console.log(error);
                setError(true);
            }
        };
        fetchMoviesRecommend();
    }, [id, language]);

    if (!recommendMovie) return <Loader />;

    return (
        <>
            <div
                className={`Recommendations ${darkMode ? "text-bg-dark" : ""}`}
            >
                <div className="container py-5">
                    <div className="row">
                        <div className="title">
                            <h2 className="text-capitalize mb-4 fw-bold">
                                {language === "en"
                                    ? "Recommendations"
                                    : "التوصيات"}
                            </h2>
                        </div>
                    </div>

                    <div>
                        {recommendMovie && recommendMovie?.length !== 0 ? (
                            <div className="row gy-5 gx-3 ">
                                {recommendMovie?.map((movie, index) => (
                                    <React.Fragment key={index}>
                                        <MovieCard movie={movie} />
                                    </React.Fragment>
                                ))}
                            </div>
                        ) : (
                            <NoRecommendation />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Recommendations;
