import React from "react";
import MovieCard from "./MovieCard";

function Movies({ moviesList }) {
    return (
        <>
            <div className="movies">
                <div className="container py-3">
                    <div className="row g-3">
                        {moviesList.map((movie, index) => (
                            <React.Fragment key={index}>
                                <MovieCard movie={movie} />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movies;
