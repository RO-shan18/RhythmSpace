import { useSelector } from "react-redux";
import useGetTrack from "../../Hooks/usegetTracks";
import Trackcard from "./Trackcard";

const Track = () => {
  useGetTrack();

  const Track = useSelector((store) => store?.Track?.Trackarr?.tracks);

  if (!Track || Track.length === 0){
    return <p>No Track available....</p>
  }

  return (
    <div className="w-[98vw] mx-auto">
      <h2 className="font-bold text-2xl">Tracks</h2>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none bg-gray-100 py-4">
        {Track.length === 0 ? (
          <p>No Track Shows..</p>
        ) : (
            Track.map((Track) => (
            <Trackcard
              key={Track?.id}
              image={Track?.album?.images[0]?.url}
              name={Track?.name}
              id={Track?.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Track;
