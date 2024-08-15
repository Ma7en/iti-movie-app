import React from "react";

// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// store
import { addTowatchlist } from "../../store/slices/watchlistSlice";

function AddWatchLater() {
    return (
        <>
            <FontAwesomeIcon
                onClick={() => addTowatchlist}
                style={{ right: "10px", top: "15px" }}
                icon={faHeart}
            />
        </>
    );
}

export default AddWatchLater;
