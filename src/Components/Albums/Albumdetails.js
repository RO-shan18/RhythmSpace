import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Albumsonglists from "./Albumsonglists";
import { capitalizeFirstLetter } from "../../utils/constants";
import { useEffect } from "react";
import { addTrack } from "../../utils/trackslice";
import useGetAlbumtracks from "../../Hooks/usegetAlbumtracks";
import Albumdetailcard from "./Albumdetailcard";

const Albumsong = () => {
  const { albumid } = useParams();
  useGetAlbumtracks(albumid)

  const album = useSelector((store) => store?.album?.albumsarr);
  const dispatch = useDispatch();

  useEffect(() => {
    const selectedAlbum = album.find(item => item?.id === albumid);
    if (selectedAlbum) {
      dispatch(addTrack(selectedAlbum?.tracks?.items));
    }
  }, [albumid, album, dispatch]);


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
