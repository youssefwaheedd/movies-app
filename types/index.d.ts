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
  poster_path: string | null;
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

type CreditListProps = {
  title: string;
  credits: CastMember[] | CrewMember[];
  type: "cast" | "crew";
};
