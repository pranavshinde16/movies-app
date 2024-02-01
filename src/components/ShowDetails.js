// components/ShowDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import defualtImage from "./film_1.jpg"



const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    // Fetch show details based on the ID
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShowDetails(data));
  }, [id]);

  if (!showDetails) {
    return <div>Loading...</div>;
  }

  const { name, summary, image, network, genres, runtime, premiered, schedule, officialSite } = showDetails;

  return (
    <div className="container shadow p-4 d-flex align-items-center mt-5">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-4">
          <img
            className="img-fluid rounded-md"
            src={image && image.original || defualtImage}
            alt={name}
            height={400}
            width={300}
          />
        </div>
        <div className="col-md-8 mt-3">
          <h2 className="text-3xl font-bold mt-6 mb-1">{name}</h2>
          <hr class="mt-0 mb-4" />
          <p className="text-xl text-gray-500" dangerouslySetInnerHTML={{ __html: summary }} />
          <div className="mt-4">
            {genres.map((genre) => {
              return (<span className="badge p-2 mt-1 me-2 rounded-pill">{genre}</span>)
            })}
          </div>
          <div className="mt-4 d-flex">
            <Link to={showDetails.url} className="button">
              Watch Online {"  "}
              <span className="button__icon">
                <FiSend />
              </span>
            </Link>
            <Link to={`/billing/${name}`}>
              <button type="button" class="buy_button btn ms-3 mr-md-2 mb-md-0 btn-outline-primary btn-round rounded-pill">Buy Now</button>
            </Link>
          </div>
          {officialSite && (
            <div className="mt-4">
              <p className="text-lg">Official Site: <a href={officialSite} target="_blank" rel="noopener noreferrer">{officialSite}</a></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
