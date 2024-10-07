import { useSelector } from "react-redux";
import useGetEpisode from "../Hooks/usegetEpisode";
import { Link } from "react-router-dom";

const Episode = () => {
  useGetEpisode();

  const Episode = useSelector((store) => store?.Episode?.Episodearr);

  if (!Episode || Episode.length === 0) {
    return <p>No Episode available....</p>;
  }

  return (
    <div className="w-[98vw] mx-auto">
    <h2 className="font-bold text-2xl">Episodes</h2>
    <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none bg-gray-100 py-4">
      {Episode.length === 0 ? (<p>No more episodes...</p>) :
       ( Episode.map((Episode) => (
          <Link to={"/episode/" + Episode.id} key={Episode.id}>
            <div className="px-4 cursor-pointer" >
               <img className="w-[12vw] max-w-none rounded-lg" src={Episode?.images[0]?.url} alt="image" />
               <p className="w-[12vw] overflow-hidden text-center font-semibold pt-1">{Episode?.name}</p>
            </div>
          </Link>)
        ))}
    </div>
  </div>
  );
};

export default Episode;
