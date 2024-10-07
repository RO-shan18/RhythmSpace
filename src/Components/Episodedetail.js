import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter, Millis_To_MinSec } from "../utils/constants";
import Music from "./Music";

const Episodedetail = () => {
  const { episodeid } = useParams();
  const Episode = useSelector((store) => store?. Showsepi?.Showsepisodearr);
  
  if (!Episode || Episode.length === 0) {
    return <p>No Episode available....</p>;
  }

  return (
    <div>
      {Episode.length > 0 ? (Episode.map(
        (item) =>
          item.id === episodeid && (
          <div>
          <div key={item.id} className="flex gap-x-6 bg-slate-300 mx-5 p-5 my-4 rounded-lg">
             <img className="w-[18vw] rounded-md" src={item?.images[0].url} alt="image" />
             <div>
                <p className="py-2 text-xl font-semibold">{capitalizeFirstLetter(item?.type)}</p>
                <p className="py-2 text-4xl font-bold">{item?.name}</p>
                <span className="py-3 px-3 font-semibold text-xl">{item?.release_date.split("-")[0]},</span>
                <span className="font-semibold text-xl">{Millis_To_MinSec(item?.duration_ms)}</span>
                {item?.show?.description ? (<p className="py-3 font-semibold text-xl h-[10vh] overflow-hidden text-ellipsis"><b>Description:</b> {item?.show?.description}</p>) :
                (<p className="py-3 font-semibold text-xl h-[10vh] overflow-hidden text-ellipsis"><b>Description:</b> {item?.description}</p>)}
             </div>
          </div>
          <Music url={item?.audio_preview_url} songname={item?.name}/>
          </div>
          )
      )): (
        <p>Loading!!!!</p>
      )}
    </div>
  );
};

export default Episodedetail;
