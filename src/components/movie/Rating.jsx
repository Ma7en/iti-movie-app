import React from "react";

function Rating({ rate }) {
    return (
        <>
            <div className="bg-dark d-inline-block text-light rounded-circle">
                <div className="d-flex align-items-center justify-content-center position-relative">
                    <h5 className="position-absolute bottom-0 start-50">
                        {rate * 10}
                    </h5>
                </div>
            </div>
        </>
    );
}

export default Rating;
