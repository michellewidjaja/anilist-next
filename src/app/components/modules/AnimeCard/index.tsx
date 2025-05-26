import Image from "next/image";
import Link from "next/link";
import { AnimeCardTypes, AnimeDisplayCardTypes } from "@/app/types/animeCard";
import { slugify } from "@/app/utils/slugify";

interface AnimeCardProps {
  anime: AnimeCardTypes | AnimeDisplayCardTypes;
}

export default function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Link
      key={anime.id}
      href={`/detail/${slugify(anime.title.romaji.toLowerCase().replace(/\s+/g, '-'))}-${anime.id}`}
      className="group cursor-pointer rounded-lg bg-black-100 overflow-hidden transform transition duration-300 hover:-translate-y-2"
    >
      <div className="relative w-full h-48 lg:h-64">
        <Image src={anime.coverImage.large} alt={anime.title.romaji} height={500} width={300} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col justify-between p-3 lg:p-4">
        <div>
          <h2 className="text-xl font-semibold line-clamp-2 transition duration-300 group-hover:text-blue mb-2">{anime.title.romaji}</h2>
          {anime.episodes && <p className="text-gray text-sm mb-1">{anime.episodes} episode</p>} 
          {anime.genres.length > 0 && <p className="text-gray text-sm">{anime.genres.join(', ')}</p>}
        </div>
      </div>
    </Link>
  )
}