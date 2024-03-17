import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import MovieDetailedCard from "./MovieDetailCard";

const MovieCard = ({movieTitle, posterPath,movie }) => {
  const [showModal, setShowModal] = useState(false);

  if (!posterPath) return null;
  return (
    <div>
      <div className="w-36 md:w-48 pr-4 cursor-pointer">
        <img
          className="hover:h-64"
          src={IMG_CDN_URL + posterPath}
          alt="Movie Card"
          onClick={() => {
            setShowModal(true);
          }}
        />
      </div>
      {showModal && (
        <MovieDetailedCard
          movie={movie}
          path={posterPath}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default MovieCard;
