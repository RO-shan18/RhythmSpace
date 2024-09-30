import { useSelector } from "react-redux";
import useGetArtists from "../Hooks/usegetArtists";
import Artistcards from "./Artistcards";
import { Link } from "react-router-dom";

const Artists = () => {
  useGetArtists();

  const artists = useSelector((store) => store?.artist?.artistarr);

  return (
    <div className="w-[98vw] mx-auto">
      <h2 className="font-bold text-2xl">Artists</h2>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none bg-gray-100">
        {artists.length > 0 &&
          artists.map((artist) => (
            <Link to={"/artist/" + artist?.id}><Artistcards
              key={artist?.id}
              name={artist?.name}
              image={artist?.images}
              artistid={artist?.id}
            />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Artists;
