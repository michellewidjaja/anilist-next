import AnimeList from "./components/modules/AnimeList";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <div className="mb-24 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold my-4 tracking-wide ">Find your favorite anime with <span className="text-blue">AniList</span></h1>
          <p className="text-gray text-xl">
            Explore, discover, and track your next favorite anime series
          </p>
        </div>
        <AnimeList />
      </main>
    </>
  );
}
