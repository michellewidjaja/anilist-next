import { gql } from '@apollo/client';

export const GET_GENRES = gql`
  query GetAllGenres {
    GenreCollection
  }
`;