import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Movie.css";

function Movie({ title, year, summary, poster, genres }) {
  let navigate = useNavigate();
  const toDetail = () => {
    navigate("/movie-detail", { state: { year, title, summary, poster, genres } });
  };
  return (
    <div className="movie">
      <div
        onClick={() => {
          toDetail();
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genre">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="movie__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

export default Movie;
