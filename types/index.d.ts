export interface Genre {
  id: number;
  name: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  poster_path: string;
  backdrop_path: string | null;
  genres: Genre[];
  credits: {
    cast: CastMember[];
    crew: CrewMember[];
  };
}

export interface MetaProps {
  release_date: string;
  runtime: number;
  vote_average: number;
}

export type CreditListProps = {
  title: string;
  credits: CastMember[] | CrewMember[];
  type: "cast" | "crew";
};

export type FavoritesState = {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};
