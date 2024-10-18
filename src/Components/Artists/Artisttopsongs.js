import { useSelector } from "react-redux";
import useGetArtiststracks from "../../Hooks/usegetArtiststracks";
import { Millis_To_MinSec } from "../../utils/constants";
import { Link } from "react-router-dom";

const Artisttopsongs = ({ Followers }) => {
  useGetArtiststracks();

  const TopTracks = useSelector((store) => store?.Track?.Trackarr);

  if (!TopTracks || TopTracks.length === 0) {
    return <p>No TopTracks available....</p>;
  }

  return (
    <div className="mx-5 mb-5">
    {TopTracks.map((item, index) => {
      // Check if item.track is available, otherwise use item itself
      const trackItem = item.track ? item.track : item;
      if(trackItem?.preview_url ===  null)
      return;

      return (
        <Link to={"/track/" + trackItem?.id} key={trackItem?.id}>
          <div className="flex justify-between px-2 sm:px-9 py-3 hover:bg-slate-200 bg-slate-300 text-md font-semibold">
            <div className="flex w-[60vw] gap-x-4 items-center">
              <p>{index + 1}</p>
              <img
                className="w-[40px] md:w-[55px] rounded-md"
                src={trackItem?.album?.images[2]?.url}
                alt="image"
              />
              <p className="cursor-pointer md:text-lg text-sm hover:underline overflow-x-auto whitespace-nowrap scrollbar-none">
                {trackItem?.name}
              </p>
            </div>
            <div className="md:text-lg text-sm sm:block hidden"><p>{Followers}</p></div>
            <p className="px-6 md:text-lg text-sm">{Millis_To_MinSec(trackItem?.duration_ms)}</p>
          </div>
        </Link>
      );
    })}
  </div>
  );
};

export default Artisttopsongs;
