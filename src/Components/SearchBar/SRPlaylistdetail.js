import { useParams, useSearchParams } from "react-router-dom";
import useGetPlaylistssongs from "../../Hooks/usegetPlaylistsongs";
import PlaylistDetailcard from "./SRPlaylistdetailcard";
import { useSelector } from "react-redux";

const SearchPlaylistdetails = ()=>{

  const {playlistid} = useParams();

  useGetPlaylistssongs(playlistid);

  const Playlistsong = useSelector(store => store?.SearchResults?.Searchresultarr?.playlists?.items)

  if(!Playlistsong || Playlistsong.length===0)
  return <p>No Songs are available...</p>

  return(
    <div>
    {Playlistsong.length > 0 ? (
      Playlistsong.map(
        (item) =>
          item.id === playlistid && (
          <PlaylistDetailcard key={playlistid} image={item?.images[0].url} type={item?.type} name={item?.name} total={item?.tracks?.total} />
          )
      )
    ) : (
      <p>Loading....</p>
  )}
  </div>
)
}

export default SearchPlaylistdetails;