import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter, Millis_To_MinSec } from "../utils/constants";
import Music from "./Music";

const Tracks = ()=>{

    const {trackid} = useParams();

    const Tracks = useSelector(store => store?.Track?.Trackarr);

    // if(!Tracks || Tracks.length === 0)
    // return <p>No Tracks available....</p>

    return (
      <div>
      {Tracks.length > 0 ? (
        Tracks.map(
          (item) =>
            item.id === trackid && (
              <div key={item.id}> {/* Add the key attribute here */}
                <div className="flex gap-x-6 bg-slate-300 mx-5 p-5 my-4 rounded-lg">
                  <img
                    className="w-[18vw] rounded-md"
                    src={item?.album?.images[0].url}
                    alt="album cover"
                  />
                  <div>
                    <p className="py-2 text-xl font-semibold">
                      {capitalizeFirstLetter(item?.type)}
                    </p>
                    <p className="py-2 text-4xl font-bold">{item?.name}</p>
                    <span className="font-semibold text-xl">
                      {Millis_To_MinSec(item?.duration_ms)}
                    </span>
                  </div>
                </div>
                <Music url={item?.preview_url} songname={item?.name} />
              </div>
            )
        )
      ) : (
        <p>Loading!!!!</p>
      )}
    </div>
    )
}

export default Tracks;