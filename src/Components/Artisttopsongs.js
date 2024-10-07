import { useSelector } from "react-redux";
import useGetArtiststracks from "../Hooks/usegetArtiststracks";
import { Millis_To_MinSec } from "../utils/constants";
import { Link } from "react-router-dom";

const Artisttopsongs = ({Followers})=>{
    useGetArtiststracks();

    const TopTracks = useSelector(store => store?.Artisttrack?.Artisttracksarr);

    if (!TopTracks || TopTracks.length === 0) {
        return <p>No TopTracks available....</p>;
      }
    
    return (
        <div className="mx-5 mb-5">
          {TopTracks.length > 0  ? (
            TopTracks.map((item, index) => (
            <Link to={"/track/" + item?.id} key={item?.id}>
            <div  className="flex justify-between px-9 py-3 hover:bg-slate-200 bg-slate-300 text-md font-semibold">
              <div className="flex w-[40vw] gap-x-4 items-center">
                <p>{index + 1}</p>
                <img className="w-[55px] rounded-md" src={item?.album?.images[2]?.url} alt="image"/>
                <p className="cursor-pointer hover:underline">{item?.name}</p>
              </div>
              <div>
                 <p>{Followers}</p>
              </div>
              <p className="px-6">{Millis_To_MinSec(item?.duration_ms)}</p>
            </div>
            </Link>
            ) 
          )): (
            <p>Loading...</p>
        )}
        </div>
      );
}

export default Artisttopsongs;