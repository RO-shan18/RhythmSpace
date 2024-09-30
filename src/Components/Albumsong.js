import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Albumsonglists from "./Albumsonglists";
import { capitalizeFirstLetter } from "../utils/constants";

const Albumsong = () => {
  const { albumid } = useParams();
  const album = useSelector((store) => store?.album?.albumsarr);

  return (
    <div>
      {album.length > 0 ? (
        album.map(
          (item) =>
            item?.id === albumid && (
              <div key={item.id}>
              <div className="flex  gap-x-6 bg-slate-300 mx-5 p-5 my-4 rounded-lg">
                <div>
                  <img src={item?.images[0]?.url} alt="image" className="w-[18vw] rounded-md"/>
                </div>

                <div className="">
                  <p className="py-2 text-xl font-semibold">{capitalizeFirstLetter(item?.type)}</p>
                  <p className="py-2 text-5xl font-bold">{item?.name}</p>
                  <p className="py-3 font-semibold text-xl"><span >{item?.release_date.split("-")[0]}</span>,
                  <span className="px-2 py-4">{item?.total_tracks} songs</span></p>
                </div>
              </div>
              <div className="flex justify-between px-9 text-xl font-bold bg-slate-400 mx-5 rounded-t-md py-2">
                 <h3 className="w-[10vw]">No.</h3>
                 <h3 className="w-[70vw] mx-auto">Title</h3>
                 <h3>Duration</h3>
              </div>
              <Albumsonglists tracks={item?.tracks?.items}/>
              </div>
            )
        )
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
};

export default Albumsong;
