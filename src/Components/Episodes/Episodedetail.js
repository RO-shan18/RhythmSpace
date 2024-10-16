import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Episodedetailcard from "./Episodedetailcard";

const Episodedetail = () => {
  const { episodeid } = useParams();
  const Episode = useSelector((store) => store?.Showsepi?.Showsepisodearr);

  if (!Episode || Episode.length === 0) {
    return <p>No Episode available....</p>;
  }

  return (
    <div>
      {Episode.length > 0 ? (Episode.map(
        (item) =>
          item.id === episodeid && (
          <Episodedetailcard key={item.id} image={item?.images[0].url} type={item?.type} name={item?.name} date={item?.release_date} duration={item?.duration_ms} description={item} audio={item?.audio_preview_url}/>
          )
      )): (
        <p>Loading!!!!</p>
      )}
    </div>
  );
};

export default Episodedetail;
