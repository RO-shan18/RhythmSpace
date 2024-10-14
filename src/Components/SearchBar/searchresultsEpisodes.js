import Episodecard from "../Episodes/Episodecard";

const SearchresultsEpisodes = ({ Episodes }) => {

    if (!Episodes || Episodes.length === 0) {
        return null;
      }

  return (
    <div className="w-[98vw] mx-auto">
      <h2 className="font-bold text-2xl pt-4">Episodes</h2>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none bg-gray-100 py-4">
          {Episodes.map((Episode) => (
            <Episodecard
              image={Episode?.images[0].url}
              name={Episode?.name}
              id={Episode?.id}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchresultsEpisodes;
