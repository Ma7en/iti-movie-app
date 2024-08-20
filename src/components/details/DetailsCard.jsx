/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// context
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

// components
import Loader from "../loader/Loader";
import AddWatchLater from "../movie/AddWatchLater";

// assest
import backdrop_image from "../../assets/Images/error/no-image-available.jpg";
import Stars from "../movie/Stars";

function DetailsCard() {
    const { id } = useParams();

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const [movie, setMovie] = useState(null);

    const [error, setError] = useState(false);

    // get movie # https://api.themoviedb.org/3/movie/533535?api_key=fir9f4fmkd9dmi3994nfir4?language=en-US
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                await axios
                    .get(
                        `${
                            process.env.REACT_APP_BASE_API_Link ||
                            process.env.REACT_APP_BASE_API_Link.slice(1, -2)
                        }movie/${id}?api_key=${
                            process.env.REACT_APP_API_KEY ||
                            process.env.REACT_APP_API_KEY.slice(1, -2)
                        }&language=${language === "en" ? "en-US" : "ar"}`
                    )
                    .then((response) => {
                        setMovie(response.data);
                    });
            } catch (error) {
                console.log(error);
                setError(true);
            }
        };
        fetchMovies();
    }, [id, language]);

    if (!movie) return <Loader />;
    // if (error) return <Empty resourceName="movies" />;

    const {
        poster_path,
        backdrop_path,
        title,
        release_date,
        vote_average,
        vote_count,
        overview,
        genres,
        runtime,
        homepage,
        spoken_languages,
        production_companies,
    } = movie;

    return (
        <>
            <div className={`moviedetails ${darkMode ? "text-bg-dark" : ""}`}>
                <div className="container py-5 border-bottom">
                    <div className="row g-4 ">
                        <div className="col-12 col-md-4 col-lg-4 rounded">
                            <div className="image" style={{ height: "100%" }}>
                                <img
                                    className="rounded-4"
                                    style={{
                                        alignSelf: "center",
                                        height: "100%",
                                        maxWidth: "100%",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundImage: "",
                                    }}
                                    src={`${
                                        poster_path
                                            ? `${
                                                  process.env
                                                      .REACT_APP_IMAGE_URL ||
                                                  process.env.REACT_APP_IMAGE_URL.slice(
                                                      1,
                                                      -2
                                                  )
                                              }${poster_path || backdrop_path}`
                                            : `${backdrop_image}`
                                    }`}
                                    alt={`${title || "not found"}`}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-8 col-lg-8 ">
                            <div className="card-body">
                                <div className="d-flex align-items-start justify-content-between mb-3">
                                    <div>
                                        <h3 className="card-title fw-bolder d-inline text-capitalize">
                                            {title || "not found"}
                                        </h3>

                                        <h5
                                            className={`fs-6 mt-1 ${
                                                darkMode
                                                    ? "text-bg-dark"
                                                    : "text-muted"
                                            }`}
                                        >
                                            {release_date}
                                        </h5>
                                    </div>

                                    <div className=" fs-3">
                                        <AddWatchLater movie={movie} key={id} />
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-3">
                                    <Stars
                                        className="d-inline "
                                        rating={vote_average / 2}
                                    />

                                    <div>
                                        <p className="d-inline ">
                                            {vote_count}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <p className="card-text p-1 fw-medium">
                                    {overview}
                                </p>
                            </div>

                            <div>
                                <div>
                                    {genres?.map((genre, index) => (
                                        <React.Fragment key={index}>
                                            <span className="badge badge-pill px-4 py-2 bg-warning text-dark me-2 mb-2 fw-normal rounded-5  text-capitalize">
                                                {genre?.name || "not found"}
                                            </span>
                                        </React.Fragment>
                                    ))}
                                </div>

                                <div className={`mt-3 `}>
                                    <p
                                        className="d-inline"
                                        style={{ fontSize: "15px" }}
                                    >
                                        <span className="fw-bold px-2">
                                            {language === "en"
                                                ? "Duration"
                                                : "المدة"}
                                            :
                                        </span>
                                        <span>
                                            {(runtime / 60).toFixed(2)} h
                                        </span>
                                    </p>

                                    <p
                                        className={`d-inline px-4 `}
                                        style={{ fontSize: "15px" }}
                                    >
                                        <span className="fw-bold px-2 text-capitalize">
                                            {language === "en"
                                                ? "Languages"
                                                : "اللغة"}
                                            :
                                        </span>

                                        <span>
                                            {spoken_languages?.map(
                                                (lang, index) => (
                                                    <React.Fragment key={index}>
                                                        <span className="px-2">
                                                            {lang?.name ||
                                                                "English"}
                                                        </span>
                                                    </React.Fragment>
                                                )
                                            )}
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <img
                                        style={{
                                            display: "block",
                                            width: "40%",
                                            height: "200px",
                                            padding: "30px 0px 30px 0px",
                                            objectFit: "fill",
                                        }}
                                        src={
                                            production_companies[0]?.logo_path
                                                ? `${
                                                      process.env
                                                          .REACT_APP_IMAGE_URL ||
                                                      process.env.REACT_APP_IMAGE_URL.slice(
                                                          1,
                                                          -2
                                                      )
                                                  }${
                                                      production_companies[0]
                                                          ?.logo_path
                                                  }`
                                                : `${backdrop_image}`
                                        }
                                        alt={`${
                                            production_companies[0]?.name ||
                                            "not found"
                                        }`}
                                    />
                                </div>

                                <div>
                                    <a
                                        className={`text-decoration-none badge border border-warning rounded-5 px-3 py-2  ${
                                            darkMode
                                                ? "text-bg-dark"
                                                : "text-secondary"
                                        }`}
                                        href={homepage}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className="mx-2">
                                            {language === "en"
                                                ? "Website"
                                                : "الموقع"}
                                        </span>

                                        <FontAwesomeIcon icon={faLink} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsCard;
