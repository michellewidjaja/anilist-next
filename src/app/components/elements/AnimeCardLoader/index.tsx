import React from "react";
interface AnimeCardLoaderProps {
  cardColumn?: number;
}
export default function AnimeCardLoader({
  cardColumn = 4
}: AnimeCardLoaderProps) {
 return [...Array(cardColumn)].map((_, i) => (
  <div
    key={i}
    role="article"
    className="animate-pulse rounded-lg bg-black-100 overflow-hidden"
  >
    <div className="bg-gray-700 w-full h-64" />
    <div className="p-4 space-y-2">
      <div className="h-5 bg-gray-700 rounded w-3/4" />
      <div className="h-4 bg-gray-700 rounded w-1/2" />
      <div className="h-4 bg-gray-700 rounded w-2/3" />
    </div>
  </div>
))
}