/* eslint-disable react/jsx-no-undef */
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'

function DetailsCard(id) {

   


    return (
       
        
        function MovieCard() {
          return (
            <div className="container mt-5">
              <div className="row">
          
                <div className="col-md-4">
                  <img
                    src=""
                    className="img-fluid rounded"
                    alt="Black Widow Poster"
                  />
                </div>
        
                
                <div className="col-md-8">
                  <h2>Black Widow</h2>
                  <p>Sep 25, 2017</p>
        
                  <div className="d-flex align-items-center mb-3">
                    <span className="mr-2">⭐⭐⭐⭐⭐</span>
                    <p className="mb-0 ml-2">9288</p>
                  </div>
        
                  <p>
                    Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.
                  </p>
        
                  <div className="mb-3">
                    <button type="button" className="btn btn-warning me-2">Action</button>
                    <button type="button" className="btn btn-warning me-2">Crime</button>
                    <button type="button" className="btn btn-warning">Thriller</button>
                  </div>
        
                  <p><strong>Duration:</strong> 134 Min.</p>
                  <p><strong>Languages:</strong> English</p>
        
                  <img
                    src=""
                    className="img-fluid mb-3"
                    alt="Marvel Studios Logo"
                  />
        
                  <a href=""  className="btn btn-outline-secondary">
                    Website
                  </a>
                </div>
              </div>
            </div>
          );
        }
        
        export default MovieCard;
        


    );
}

export default DetailsCard;
