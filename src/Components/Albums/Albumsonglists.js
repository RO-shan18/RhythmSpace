import { Link } from "react-router-dom";
import { Millis_To_MinSec } from "../../utils/constants";

const Albumsonglists = ({ tracks }) => {

      if (!tracks || tracks.length === 0) {
        return <p>No tracks available.</p>;
    }

  return (
    <div className="mx-5 mb-5">
      {tracks.map((track, index) => (
        <Link to={"/track/"+track?.id} key={track?.id}>
        <div className="flex justify-between px-1 sm:px-3 py-3 hover:bg-slate-200 bg-slate-300 text-sm sm:text-lg font-semibold">
          <p className=" w-[10vw]">{index + 1}</p>
          <div className="w-[50vw] lg:w-[80vw]  mx-auto">
            <p className="cursor-pointer hover:underline">{track?.name.split("(")[0]}</p>
            <p className="cursor-pointer sm:block hidden">{track?.artists[0]?.name},{track?.artists[1]?.name}, {track?.artists[2]?.name}</p>
          </div>
          <p className="px-3 sm:px-6">{Millis_To_MinSec(track?.duration_ms)}</p>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Albumsonglists;
