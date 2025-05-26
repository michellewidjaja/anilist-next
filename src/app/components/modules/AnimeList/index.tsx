"use client";

import { useState, useEffect, useCallback } from "react";
import { GET_ANIME_LIST } from "../../../graphql/getAnimeList";
import { GET_GENRES } from "@/app/graphql/getGenres";
import InfiniteScroll from "react-infinite-scroll-component";
import client from "@/app/lib/apolloClient";
import { AnimeCardTypes } from "@/app/types/animeCard";
import AnimeCard from "../AnimeCard";
import Dropdown from "../../elements/Dropdown";
import AnimeCardLoader from "../../elements/AnimeCardLoader";

export default function AnimeList() {
  const [animeList, setAnimeList] = useState<AnimeCardTypes[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchGenres = async () => {
    const { data } = await client.query({
      query: GET_GENRES
    })
    setGenres(data?.GenreCollection || []);
  }

  useEffect(() => {
    fetchGenres();
  }, []);
  
  const fetchAnime = useCallback(async (pageNum: number) => {
    const { data } = await client.query({
      query: GET_ANIME_LIST,
      variables: {
        page: pageNum,
        perPage: 12,
        genre: selectedGenre ? [selectedGenre] : undefined
      },
      fetchPolicy: "network-only",
    });
    return data?.Page?.media || [];
  }, [selectedGenre]);

  useEffect(() => {
    const fetchByGenre = async () => {
      setIsLoading(true)
      setPage(1);
      setHasMore(true);
      const newAnime = await fetchAnime(1);
      setAnimeList(newAnime);
      if (newAnime.length < 12) {
        setHasMore(false);
      }
      setIsLoading(false)
    };
  
    fetchByGenre();
  }, [selectedGenre, fetchAnime]);

  const loadMore = useCallback(async () => {
    const nextPage = page + 1;
    const newAnime = await fetchAnime(nextPage);

    setAnimeList((prev) => [...prev, ...newAnime]);
    setPage(nextPage);

    if (newAnime.length < 12) {
      setHasMore(false);
    }
  }, [page, fetchAnime]);

  const EndState = () => {
    return <p className="col-span-full text-center mt-4">No more anime.</p>
  }
  
  return (
    <div>
      <div>
        <p className="text-white font-bold">Genres</p>
        <Dropdown options={genres} onChange={setSelectedGenre} id="genres" name="genres" value={selectedGenre} className="my-2 w-full lg:w-[50%]" placeholder="Select Genres" />
      </div>

      <div className="mt-12">
      {isLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimeCardLoader />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={animeList.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<AnimeCardLoader />}
          endMessage={<EndState />}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 !overflow-visible"
        >
          {animeList.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </InfiniteScroll>
        )}
      </div>
    </div>
  );
}
