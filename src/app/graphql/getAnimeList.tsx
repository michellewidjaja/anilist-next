import { gql } from '@apollo/client';

export const GET_ANIME_LIST = gql`
  query getAnimeList ($id: Int, $page: Int, $perPage: Int, $search: String, $genre: [String], $sort: [MediaSort]) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, search: $search, genre_in: $genre, sort: $sort) {
        id
        title {
          romaji
        }
        type
        status
        startDate {
          year
          month
          day
        }
        episodes
        coverImage {
          large
        }
        description
        genres
      }
    }
  }
`;