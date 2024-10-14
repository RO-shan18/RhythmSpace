import { useSelector } from "react-redux";
import useGetAlbums from "../../Hooks/usegetAlbums";
import Albumcard from "./Albumcard";

const Albums = () => {
  useGetAlbums();

  const album = useSelector((store) => store?.album?.albumsarr);
    // Check if albums is undefined or empty
    if (!album || album.length === 0) {
      return <p>No Albums available....</p>;
    }
  
  return (
    <div className="w-[98vw] mx-auto">
      <h2 className="font-bold text-2xl">Albums</h2>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none bg-gray-100 py-4">
        {album.length > 0 &&
          album.map((album) => (
              <Albumcard key={album?.id} image={album?.images[0].url} name={album.name} id={album?.id}/>
          ))}
      </div>
    </div>
  );
};

export default Albums;
