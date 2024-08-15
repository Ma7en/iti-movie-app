import React from "react";
import { useNavigate } from "react-router-dom";

// import components
import Rating from "./Rating";
import AddWatchLater from "./AddWatchLater";

// assest
import backdrop_image from "../../assets/Images/error/no-image-available.jpg";

function MovieCard({ movie }) {
    const navigate = useNavigate();

    const {
        id,
        title,
        release_date,
        vote_average,
        poster_path,
        backdrop_path,
    } = movie;

    return (
        <>
            <div className="col-12 col-md-4 col-lg-4">
                <div className="card mb-2 border-0 vh-50">
                    <img
                        onClick={() => navigate(`/movie/${id}`)}
                        role="button"
                        src={
                            poster_path
                                ? `${
                                      process.env.REACT_APP_IMAGE_URL.slice(
                                          1,
                                          -2
                                      ) || process.env.REACT_APP_IMAGE_URL
                                  }${poster_path || backdrop_path}`
                                : `${backdrop_image}`
                        }
                        className="card-img-top img-fluid rounded"
                        alt={`${title}`}
                    />

                    <div className="card-body p-0 position-relative rounded mt-1">
                        <h5
                            onClick={() => navigate(`/movie/${id}`)}
                            className="d-inline-block card-title mt-3 w-75"
                            role="button"
                            style={{
                                textWrap: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                            }}
                        >
                            {title}
                        </h5>
                        <p
                            className="position-absolute m-0 text-secondary p-0"
                            style={{ bottom: "-5px" }}
                        >
                            {release_date}
                        </p>

                        <div
                            className="position-absolute"
                            style={{ top: "-30px", left: "15px" }}
                        >
                            <Rating rate={parseInt(vote_average)} />
                        </div>

                        <AddWatchLater movie={movie} key={id} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieCard;
