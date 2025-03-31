export interface Anime {
  mal_id: number;
  title: string;
  synopsis: string | null;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
  type: string;
  status: string;
  episodes: number | null;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  genres: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
}
