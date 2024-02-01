// components/ShowList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ShowList.css'; // Import your custom CSS file
import defualtImage from "./film_1.jpg"
import { FaArrowRight } from "react-icons/fa";


const ShowList = ({ shows }) => {
  return (
    <div className="container mt-4">
      <h1 className=" section__title text-center mb-5"><span>Movies</span> Hub</h1>
      <div className="row mt-4">
        {shows.map(show => (
          <div key={show.show.id} className="col-md-3 mb-4">
            <div className="card movie-card">
              <div>
                <img
                  src={show.show.image && show.show.image.original || defualtImage}
                  className="card-img-top rounded-top movie-img"
                  alt={show.show.name}
                />
                {/* <div className="rating-badge">{show.show.rating && show.show.rating.average || 7.1}</div> */}
              </div>
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <p className="network d-flex justify-content-center">
                  {show.show.network && show.show.network.name}
                </p>
              </div>
              <div className="card-footer bg-transparent border-top-0 d-flex justify-content-center align-items-center">
                <Link to={`/details/${show.show.id}`} className="button">
                  More Details{" "}
                  <span className="button__icon">
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
