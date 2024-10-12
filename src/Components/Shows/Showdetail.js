import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter, Millis_To_MinSec } from "../../utils/constants";
import GetShowepisodes from "./getShowepisodes";
import useGetShowsEpisode from "../../Hooks/usegetShowsEpisode";

const Showdetail = () => {
  const { showsid } = useParams();
  const Show = useSelector((store) => store?.Show?.Showsarr);
  useGetShowsEpisode(showsid)

  return (
    <div>
      {Show.length > 0 ?
        (Show.map(
          (item) =>
            item.id === showsid && (
                <div key={item.id} className="flex gap-x-6 bg-slate-300 mx-5 p-5 my-4 rounded-lg">
                <img className="w-[18vw] rounded-md" src={item?.images[0].url} alt="image" />
                <div>
                   <p className="py-2 text-xl font-semibold">{capitalizeFirstLetter(item?.type)}</p>
                   <p className="pt-2 text-4xl font-bold">{item?.name}</p>
                   <span className="font-semibold text-xl ">by {capitalizeFirstLetter(item?.publisher.toLowerCase())}</span>
                   <p className="font-semibold text-xl py-3"><b>Total episodes:</b> {item?.total_episodes}</p>
                   <p className="py-2 font-semibold text-xl"><b>Description:</b> {item?.description}</p>
                </div>
             </div>
        )
        )) :(
            <p>Loading...</p>
        )}
        <GetShowepisodes/>
    </div>
  );
};

export default Showdetail;