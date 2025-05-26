import Image from 'next/image';
import client from '@/app/lib/apolloClient';
import { GET_ANIME_DETAIL } from '../../graphql/getAnimeDetail';
import Bookmark from '@/app/components/modules/Bookmark';
import EpisodeList from '@/app/components/modules/EpisodeList';
import BackButton from '@/app/components/elements/BackButton';

interface AnimeDetailProps {
  params: Promise<{ id: string }>
}

export default async function AnimeDetail({ params }: AnimeDetailProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id.split('-').pop();
  const animeId = Number(id);

  const { data } = await client.query({
    query: GET_ANIME_DETAIL,
    variables: { id: animeId },
  });

  const detail = data.Media;

  if (!detail) {
    return <p className="text-center mt-10">Anime not found.</p>;
  }

  return (
    <div>
      <BackButton backUrl="/">Back to List</BackButton>

      <div className="flex flex-col lg:flex-row gap-12">
        {
          detail.coverImage ? 
            <Image src={detail.coverImage.large} alt={detail.title.romaji} height={500} width={500} className="h-[250px] lg:h-[400px] w-full lg:w-[30%] object-contain rounded" /> 
            : 
            <div></div>
        }
        <div>
          <div className="flex justify-end">
            <Bookmark data={{
              title: detail.title,
              genres: detail.genres,
              id: detail.id,
              episodes: detail.episodes,
              coverImage: detail.coverImage, 
            }} />
          </div>
          <div className="flex justify-between items-center mt-5 mb-3">
            <h1 className="text-2xl font-bold">{detail.title.romaji}</h1>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {detail.genres.map((genre: string, idx: number) => (
              <span
                key={idx}
                className="bg-blue text-white text-xs font-medium px-2 py-1 rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>

          <div className="text-gray mb-5">
            {detail.episodes} episode(s) &#x2022; {detail.status}
          </div>

          <div
            className="text-gray leading-relaxed"
            dangerouslySetInnerHTML={{ __html: detail.description }}
          ></div>
        </div>
      </div>

      {detail.streamingEpisodes.length > 0 && (
        <EpisodeList streamingEpisodes={detail.streamingEpisodes} />
      )}
    </div>
  );
}
