import { useSelector } from "react-redux";
import useGetAlbums from "../Hooks/usegetAlbums";
import { Link } from "react-router-dom";

const Albums = () => {
  useGetAlbums();

  const album = useSelector((store) => store?.album?.albumsarr);
  
  return (
    <div className="w-[98vw] mx-auto">
      <h2 className="font-bold text-2xl">Albums</h2>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none bg-gray-100 py-4">
        {album.length > 0 &&
          album.map((album) => (
            <Link to={"/album/"+album?.id} key={album.id}><div className="px-4 cursor-pointer" >
            <img className="w-[12vw] max-w-none rounded-lg" src={album?.images[0]?.url} alt="image" />
            <p className="w-[12vw] overflow-hidden text-center font-semibold pt-1">{album?.name}</p>
            </div></Link>
          ))}
      </div>
    </div>
  );
};

export default Albums;
