export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export interface MovieListResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
}