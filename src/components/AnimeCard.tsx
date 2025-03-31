import React from "react";
import { Anime } from "../types/anime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <div className="anime-card">
      {/* Image */}
      <div className="anime-card-image">
        <img src={anime.images.jpg.large_image_url} alt={anime.title} />
      </div>

      {/* Content */}
      <div className="anime-card-content">
        {/* Status and Episodes */}
        <div className="anime-card-status">
          {/* Title */}
          <h3>{anime.title}</h3>
          <p>
            <strong>{anime.status || "N/A"}</strong>
          </p>
          <span>{anime.episodes} episodes</span>
        </div>

        {/* Score and Ranking */}
        <div className="anime-card-score-ranking">
          <div className="score">
            <FontAwesomeIcon className="star-icon" icon={faStar} />

            <span>{anime.score || "N/A"}</span>
          </div>
          <div className="ranking">
            <span>Rank #: {anime.rank || "N/A"}</span>
          </div>
        </div>

        {/* Genres */}
        <div className="anime-card-genres">
          {anime.genres.map((genre, index) => (
            <span key={genre.mal_id}>
              {genre.name}
              {index !== anime.genres.length - 1 && ", "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
