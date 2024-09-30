import { Millis_To_MinSec } from "../utils/constants";

const Albumsonglists = ({ tracks }) => {
  return (
    <div className="mx-5 mb-5">
      {tracks.map((track, index) => (
        <div key={track?.id} className="flex justify-between px-9 py-3 hover:bg-slate-200 bg-slate-300 text-md font-semibold">
          <p className=" w-[10vw]">{index + 1}</p>
          <div>
            <p className="w-[80vw] mx-auto cursor-pointer hover:underline">{track?.name}</p>
            <p className="cursor-pointer">{track?.artists[0]?.name},{track?.artists[1]?.name}, {track?.artists[2]?.name}</p>
          </div>
          <p className="px-6">{Millis_To_MinSec(track?.duration_ms)}</p>
        </div>
      ))}
    </div>
  );
};

export default Albumsonglists;
