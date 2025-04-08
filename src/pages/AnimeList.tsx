import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AnimeCard from "../components/AnimeCard";
import { Anime } from "../types/anime";
import fetchAnimeMovies from "../api/fetchAnimeMovies";

interface AnimeListProps {
  searchQuery: string;
}

const AnimeList: React.FC<AnimeListProps> = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["animeMovies", searchQuery, currentPage],
    queryFn: () => fetchAnimeMovies({ searchQuery, page: currentPage }),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching anime movies</p>;
  if (!data || data.length === 0) return <p>No anime movies found</p>;

  return (
    <>
      <div className="anime-list">
        {data.map((anime: Anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={!data.length}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default AnimeList;
