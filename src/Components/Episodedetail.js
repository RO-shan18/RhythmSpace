import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter, Millis_To_MinSec } from "../utils/constants";

const Episodedetail = () => {
  const { episodeid } = useParams();
  const Episode = useSelector((store) => store?.Episode?.Episodearr);
  console.log(Episode)
  return (
    <div>
      {Episode.length > 0 ? (Episode.map(
        (item) =>
          item.id === episodeid && (
          <div key={item.id} className="flex gap-x-6 bg-slate-300 mx-5 p-5 my-4 rounded-lg">
             <img className="w-[18vw] rounded-md" src={item?.images[0].url} alt="image" />
             <div>
                <p className="py-2 text-xl font-semibold">{capitalizeFirstLetter(item?.type)}</p>
                <p className="py-2 text-4xl font-bold">{item?.name}</p>
                <span className="py-3 px-3 font-semibold text-xl">{item?.release_date.split("-")[0]},</span>
                <span className="font-semibold text-xl">{Millis_To_MinSec(item?.duration_ms)}</span>
                <p className="py-3 font-semibold text-xl"><b>Description:</b> {item?.show?.description}</p>
             </div>
          </div>
          )
      )): (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Episodedetail;
