import { useParams, useSearchParams } from "react-router-dom";
import useGetPlaylistssongs from "../../Hooks/usegetPlaylistsongs";
import PlaylistDetailcard from "./SRPlaylistdetailcard";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

const SearchPlaylistdetails = () => {
 const { playlistid } = useParams();

  // Call the custom hook to fetch playlist songs
  useGetPlaylistssongs(playlistid);

  // Access playlists from Redux store
  const Playlistsong = useSelector(
    (store) => store?.SearchResults?.Searchresultarr?.playlists?.items
  );

  // Log for debugging purposes
  console.log("Playlistsong:", Playlistsong);

  // Handle loading and no data cases
  if (!Playlistsong) {
    return <p>Loading...</p>;
  }

  if (Playlistsong.length === 0) {
    return <p>No Songs are available...</p>;
  }

  // Find the specific playlist by ID
  const currentPlaylist = Playlistsong.find((item) => item?.id === playlistid);

  if (!currentPlaylist) {
    return <p>No details available for the selected playlist.</p>;
  }

  return (
    <div>
   
            <PlaylistDetailcard
              key={currentPlaylist?.id}
              image={currentPlaylist?.images[0].url}
              type={currentPlaylist?.type}
              name={currentPlaylist?.name}
              total={currentPlaylist?.tracks?.total}
            />
    </div>
  );
};

export default SearchPlaylistdetails;
