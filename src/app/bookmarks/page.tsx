
"use client";
import { useState, useEffect } from "react";
import AnimeCard from "../components/modules/AnimeCard";
import { AnimeDisplayCardTypes } from "../types/animeCard";
import BackButton from "../components/elements/BackButton";
import { X } from "react-feather";
import Button from "../components/elements/Button";

export default function Bookmarks() {
  const [savedAnimeList, setSavedAnimeList] = useState<AnimeDisplayCardTypes[]>([]);
  
  useEffect(() => {
    const saved = localStorage.getItem("bookmarks");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setSavedAnimeList(parsed);
        } else if (typeof parsed === "object") {
          setSavedAnimeList([parsed]);
        }
      } catch (err) {
        console.error("Failed to parse bookmarks from localStorage", err);
      }
    }
  }, []);

  const handleResetBookmark = () => {
    localStorage.removeItem("bookmarks");
    setSavedAnimeList([]);
  }

  return (
    <>
      <BackButton backUrl="/">Back to List</BackButton>
      <div className="flex justify-between items-center flex-col lg:flex-row mb-12">
        <h1 className="text-2xl font-bold mt-5 mb-6 text-white">Your Bookmarks</h1>
        {
          savedAnimeList.length > 0 &&
          <Button 
            onClick={handleResetBookmark}
            type="secondary"
            icon={ <X size={18} />}>
            Reset
          </Button>
        }
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {savedAnimeList.length === 0 ? (
          <p className="col-span-full text-center text-gray-400 mb-24">No bookmarks saved yet.</p>
        ) : (
          savedAnimeList.map((anime: AnimeDisplayCardTypes) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))
        )}
      </div>
    </>
  )
}