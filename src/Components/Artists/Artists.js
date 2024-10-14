import { useSelector } from "react-redux";
import useGetArtists from "../../Hooks/usegetArtists";
import Artistcards from "./Artistcards";

const Artists = () => {
  useGetArtists();

  const artists = useSelector((store) => store?.artist?.artistarr);

  if (!artists || artists.length === 0) {
    return <p>No artists available....</p>;
  }

  return (
    <div className="w-[98vw] mx-auto">
      <h2 className="font-bold text-2xl">Artists</h2>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none bg-gray-100">
        {artists.length > 0 &&
          artists.map((artist) => (
            <Artistcards
             key={artist?.id}
              name={artist?.name}
              image={artist?.images}
              id={artist?.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Artists;
