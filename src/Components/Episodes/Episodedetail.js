import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Episodedetailcard from "./Episodedetailcard";

const Episodedetail = () => {
  const { episodeid } = useParams();
  const Episode = useSelector((store) => store?.Showsepi?.Showsepisodearr);

  if (!Episode || Episode?.length === 0) {
    return <p>No Episode available....</p>;
  }

  console.log(Episode)

  const currentEpisode = Episode.find((item) => item?.id === episodeid);

  console.log(currentEpisode);

  if (!currentEpisode) return <p>No data available for this episode...</p>;

  return (
    <div>
      <Episodedetailcard
        key={currentEpisode.id}
        image={currentEpisode?.images?.[0]?.url}
        type={currentEpisode?.type}
        name={currentEpisode?.name}
        date={currentEpisode?.release_date}
        duration={currentEpisode?.duration_ms}
        description={currentEpisode}
        audio={currentEpisode?.audio_preview_url}
      />
    </div>
  );
};

export default Episodedetail;
