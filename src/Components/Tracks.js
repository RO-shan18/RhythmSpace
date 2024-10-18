import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter, Millis_To_MinSec } from "../utils/constants";
import Music from "./Music";


const Tracks = ()=>{

    const {trackid} = useParams();

    const Tracks = useSelector(store => store?.Track?.Trackarr);

    if(!Tracks || Tracks.length === 0)
    return <p>No Tracks available....</p>

    return (
      <div>
      { Tracks.map((item) =>{
          const Track = item?.track ? item?.track : item;
          
          return(
            Track.id === trackid && (
              <div key={Track?.id}> {/* Add the key attribute here */}
                <div className="flex sm:flex-row flex-col items-center sm:items-start gap-x-6 bg-slate-300 mx-5 p-5 my-4 rounded-lg">
                  {Track?.album?.images[0] && <img
                    className="lg:w-64 sm:w-48 w-80 rounded-md"
                    src={Track?.album?.images[0].url}
                    alt="album cover"
                  />}
                  <div>
                    <p className="py-2  text-lg sm:text-xl text-center sm:text-left font-semibold">
                      {capitalizeFirstLetter(Track?.type)}
                    </p>
                    <p className="py-2 text-lg sm:text-xl lg:text-4xl font-bold">{Track?.name}</p>
                    <span className="font-semibold text-xl hidden sm:block">
                      {Millis_To_MinSec(Track?.duration_ms)}
                    </span>
                  </div>
                </div>
                {Track?.preview_url ? <Music url={Track?.preview_url} songname={Track?.name} /> : <p className="font-bold text-center text-lg sm:text-xl">No preview available for this song....</p>}
              </div>
            )
            )}
        ) }
    </div>
    )
}

export default Tracks;