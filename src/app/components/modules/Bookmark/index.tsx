"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bookmark as BookmarkIcon } from "react-feather";
import { AnimeDisplayCardTypes } from "@/app/types/animeCard";

interface BookmarkProps {
  data: AnimeDisplayCardTypes,
}

export default function Bookmark({ data }: BookmarkProps) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('bookmarks');
    if (saved) {
      const parsed = JSON.parse(saved);
      const exists = Array.isArray(parsed) && parsed.some((item) => item.id === data.id);
      setBookmarked(exists);
    }
  }, [data.id]);

  const toggleBookmark = () => {
    const saved = localStorage.getItem("bookmarks");
    let bookmarks: AnimeDisplayCardTypes[] = [];

    try {
      bookmarks = saved ? JSON.parse(saved) : [];
      if (!Array.isArray(bookmarks)) bookmarks = [];
    } catch {
      bookmarks = [];
    }

    const exists = bookmarks.some((item) => item.id === data.id);

    if (exists) {
      bookmarks = bookmarks.filter((item) => item.id !== data.id);
      setBookmarked(false);
    } else {
      bookmarks.push(data);
      setBookmarked(true);
    }

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  };
  
  return (
    <Link
      href="/bookmarks"
      onClick={toggleBookmark}
      className="flex gap-2 flex-shrink-0 cursor-pointer hover:text-blue group"
    >
      <BookmarkIcon
        size={24}
        className={
          bookmarked
            ? "text-blue fill-current"
            : "text-gray-400 group-hover:text-blue transition duration-300"
        }
      />
      {bookmarked ? "Bookmarked" : "Bookmark This"}
    </Link>
  );
}
