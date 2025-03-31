import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../api";
import AnimeCard from "../components/AnimeCard";
import { Anime } from "../types/anime";

const fetchAnimeMovies = async (searchQuery: string) => {
  return apiClient
    .get("", {
      params: {
        q: searchQuery || undefined,

        limit: 20,
      },
    })
    .then((res) => res.data.data);
};
interface AnimeListProps {
  searchQuery: string;
}
const AnimeList: React.FC<AnimeListProps> = ({ searchQuery }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["animeMovies", searchQuery],
    queryFn: () => fetchAnimeMovies(searchQuery),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching anime movies</p>;

  return (
    <div className="anime-list">
      {data?.map((anime: Anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;
