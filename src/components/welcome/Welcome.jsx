import React, { useRef } from "react";

// bootstrap
import { Button } from "react-bootstrap";

function Welcome({ query, setQuery }) {
    let refInput = useRef("");

    return (
        <>
            <div className="bg-light welcome">
                <div className="container   py-5 mb-5 ">
                    <div className="title">
                        <h1 className="text-capitalize">
                            Welcome to our movie app
                        </h1>
                        <p className="text-secondary">
                            Millions of movies and tv-shows to explore.
                        </p>
                    </div>

                    <div className="d-flex">
                        <input
                            type="search"
                            name="search"
                            className="form-control rounded vw-75 me-5"
                            placeholder="Search and explore"
                            aria-label="Search"
                            aria-describedby="search-addon"
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                            }}
                            ref={refInput}
                        />

                        <Button
                            className="bg-warning"
                            style={{ width: "150px" }}
                            variant="warning"
                            onClick={(e) => {
                                setQuery(refInput.current.value);
                            }}
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Welcome;
