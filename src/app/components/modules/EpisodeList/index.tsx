import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "react-feather";

interface EpisodeDetailProps {
  title: string;
  thumbnail: string;
  url: string;
}
interface EpisodeListProps {
  streamingEpisodes: EpisodeDetailProps[]
}

export default function EpisodeList({ streamingEpisodes }: EpisodeListProps) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Episode List</h2>
      <ul className="grid lg:grid-cols-2 gap-4">
        {streamingEpisodes.map((episode: EpisodeDetailProps, index: number) => (
          <li
            key={index}
          >
            <Link
              href={episode.url}
              target="_blank"
              className="flex items-center justify-between group gap-4 px-4 py-2 bg-black-100 text-gray font-normal hover:text-blue hover:font-bold transition duration-300 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <Image src={episode.thumbnail} width={80} height={80} alt={episode.title} className="rounded object-cover" />
                <span className="line-clamp-2">{episode.title}</span>
              </div>
              <ChevronRight size={24} className="transform duration-300 group-hover:translate-x-1 flex-shrink-0"/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}