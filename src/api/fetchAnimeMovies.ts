import apiClient from ".";

interface FetchAnimeMoviesParams {
  searchQuery?: string;
  page?: number;
  limit?: number;
}

const fetchAnimeMovies = async ({
  searchQuery,
  page = 1,
  limit = 20,
}: FetchAnimeMoviesParams) => {
  const params = {
    q: searchQuery || undefined,
    filter: "movie",
    page,
    limit,
  };

  try {
    const response = await apiClient.get("/anime", { params });
    return response.data.data; // Jikan API returns data under `data.data`
  } catch (error) {
    console.error("Error fetching anime movies:", error);
    throw error;
  }
};

export default fetchAnimeMovies;
