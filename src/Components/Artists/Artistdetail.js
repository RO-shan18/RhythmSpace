import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useGetArtiststracks from "../../Hooks/usegetArtiststracks";
import Artistdetailcard from "./Artistdetailcards";

const Artistdetail = () => {
  const { artistid } = useParams();

  useGetArtiststracks(artistid);

  const artists = useSelector((store) => store?.artist?.artistarr);

  return (
    <div>
      {artists.length > 0 ? (
        artists.map(
          (item) =>
            item.id === artistid && (
            <Artistdetailcard image={item?.images[0].url} name={item?.name} type={item?.type} popularity={item.popularity} Followers={item?.followers?.total} genres={item?.genres} />
            )
        )
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default Artistdetail;
