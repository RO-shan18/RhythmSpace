import { useParams } from "react-router-dom";
import useGetPlaylistssongs from "../../Hooks/usegetPlaylistsongs";
import PlaylistDetailcard from "./SRPlaylistdetailcard";

const SearchPlaylistdetails = ()=>{

  const {playlistid} = useParams();

  useGetPlaylistssongs(playlistid);

  return(
    <div>
      <PlaylistDetailcard />
    </div>
  )
}

export default SearchPlaylistdetails;