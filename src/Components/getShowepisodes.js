import { useSelector } from "react-redux";
import useGetShowsEpisode from "../Hooks/usegetShowsEpisode";
import { Millis_To_MinSec, months } from "../utils/constants";
import play from "../assets/play.svg"
import { Link } from "react-router-dom";

const GetShowepisodes = () => {
  useGetShowsEpisode();

  const showsepisodes = useSelector(
    (store) => store?.Showsepi?.Showsepisodearr
  );

  // Check if showsepisodes or showsepisodes.items is undefined or empty
  if (!showsepisodes || showsepisodes.length === 0) {
    return <p>No episodes available....</p>;
  }

  return (
    <div>
        <h1 className="px-6 font-bold my-3 text-3xl bg-slate-400 mx-5 rounded-t-md py-2">All Episodes</h1>
    <div className="flex flex-col gap-x-7 gap-y-5 flex-wrap justify-evenly items-center px-5 mx-5 py-4 bg-slate-300">
      {showsepisodes.map((item) => (
        <Link to={"/episode/" + item?.id} key={item?.id}>
          <div key={item.id} className="flex hover:bg-slate-200 p-5 rounded-md relative group">
          <img className="w-[12vw] max-w-none rounded-lg hover:shadow-xl transition-all .4s ease-in-out" src={item.images[0].url} alt="episode thumbnail" />
          <div className="flex flex-col w-[40vw] px-6 my-1 overflow-hidden whitespace-nowrap text-ellipsis">
            <p className="text-xl font-semibold pb-2">{item?.name}</p>
            <p className="h-[5vh] pb-2">{item?.description}</p>
            <p className="pb-2">{months[item?.release_date.split("-")[1]]} {item?.release_date.split("-")[0]}</p>
            <p className="pb-3">{Millis_To_MinSec(item?.duration_ms)}</p>
          </div>
          <div className="absolute top-1/2 right-5 bottom-30 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img className="w-[30px]" src={play} alt="play icon" />
            </div>
        </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default GetShowepisodes;