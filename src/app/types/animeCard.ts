export interface AnimeCardTypes {
  id:  number;
  title: {
    romaji: string;
  };
  type: string;
  status: string;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  episodes: number;
  coverImage: {
    large: string;
  };
  description: string;
  genres: string[];
}

export interface AnimeDisplayCardTypes {
  id:  number;
  title: {
    romaji: string;
  };
  episodes: number;
  coverImage: {
    large: string;
  };
  genres: string[];
}