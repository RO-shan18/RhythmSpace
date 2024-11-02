import { useSelector } from "react-redux";
import useGetEpisode from "../../Hooks/usegetEpisode";
import Episodecard from "./Episodecard";

const Episode = () => {
  useGetEpisode();

  const Episode = useSelector((store) => store?.Showsepi?.Showsepisodearr);

  if (!Array.isArray(Episode) || Episode.length === 0) {
    return <p>No Episode available....</p>;
  }

  return (
    <div className="w-[98vw] mx-auto">
    <h2 className="font-bold text-2xl">Episodes</h2>
    <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none bg-gray-100 py-4">
      {Episode.length === 0 ? (<p>No more episodes...</p>) :
       ( Episode.map((Episode) => (
          <Episodecard key={Episode?.id} image={Episode?.images[0].url} name={Episode?.name} id={Episode?.id}/>
        )
        ))}
    </div>
  </div>
  );
};

export default Episode;
