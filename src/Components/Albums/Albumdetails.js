import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { addTrack } from "../../utils/trackslice";
import useGetAlbumtracks from "../../Hooks/usegetAlbumtracks";
import Albumdetailcard from "./Albumdetailcard";

const Albumsong = () => {
  const { albumid } = useParams();
  useGetAlbumtracks(albumid)
  const dispatch = useDispatch();
  const album = useSelector((store) => store?.album?.albumsarr);

  if(!album || album.length === 0){
     <p>No albums are available</p>
  }

  useEffect(() => {
    const selectedAlbum = album.find(item => item?.id === albumid);
    if (selectedAlbum) {
      dispatch(addTrack(selectedAlbum?.tracks?.items));
    }
  }, [albumid, album, dispatch]);

  if(!album || album.length === 0){
   return <p>No albums are available</p>
 }

  return (
    <div>
      {album.length > 0 ? (
        album.map(
          (item) =>
            item?.id === albumid && (
              <Albumdetailcard key={item.id} image={item?.images[0]?.url} type={item?.type} name={item?.name} date={item?.release_date} total={item?.total_tracks} tracks={item?.tracks?.items}/>
            )
        )
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
};

export default Albumsong;
