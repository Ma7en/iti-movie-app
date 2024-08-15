/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// centext
import themeContext from "../../context/themeContext";
import languageContext from "../../context/languageContext";

// import components
import Welcome from "../../components/welcome/Welcome";
import { axiosInstance } from "../../api/config";
import axios from "axios";

// import MovieCard from "../Components/MovieCard";
import { Button } from "react-bootstrap";
import Movies from "../../components/movie/Movies";

function HomePage() {
    const navigate = useNavigate();

    const { darkMode, setDarkMode } = useContext(themeContext);
    const { language, setLanguage } = useContext(languageContext);

    const [moviesList, setMoviesList] = useState([]);
    
    const [page, setPage] = useState(1);
    const [maxpages, setMaxpages] = useState(1);
    const [error, setError] = useState(null);

    // search
    const [moviesListSeacrh, setMoviesListSeacrh] = useState([]);
    const [query, setQuery] = useState("");

    // movies - 6
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                await axios
                    .get(
                        `${
                            process.env.REACT_APP_BASE_API_Link.slice(1, -2) ||
                            process.env.REACT_APP_BASE_API_Link
                        }movie/popular?api_key=${
                            process.env.REACT_APP_API_KEY.slice(1, -2) ||
                            process.env.REACT_APP_API_KEY
                        }&language=en-US&page=1`
                    )
                    .then((response) => {
                        // console.log(response);
                        setMoviesList(response.data.results);
                        setMaxpages(response.data.total_pages);
                    });
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovies();
    }, []);

    // search movies 
    useEffect(() => {
        const fetchMoviesSearch = async () => {
            try {
                await axios
                    .get(
                        `${
                            process.env.REACT_APP_BASE_API_Link.slice(1, -2) ||
                            process.env.REACT_APP_BASE_API_Link
                        }search/movie?api_key=${
                            process.env.REACT_APP_API_KEY.slice(1, -2) ||
                            process.env.REACT_APP_API_KEY
                        }&query=${query}`
                    )
                    .then((response) => {
                        // console.log(response);
                        setMoviesListSeacrh(response.data.results); 
                    });
            } catch (error) {
                console.log(error);
            }
        };
        fetchMoviesSearch();
    }, [query]);

    return (
        <>
            <Welcome query={query} setQuery={setQuery} />
            {query ? (
                <Movies moviesList={moviesListSeacrh} />
            ) : (
                <Movies moviesList={moviesList} />
            )}
        </>
    );
}

export default HomePage;