import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter, FollowersConversion } from "../utils/constants";

const Artistdetail = () => {
  const { artistid } = useParams();
  const artists = useSelector((store) => store?.artist?.artistarr);

  return (
    <div>
      {artists.length > 0 ? (
        artists.map(
          (item) =>
            item.id === artistid && (
              <div key={item.id} className="bg-slate-300 w-[60vw] mx-auto rounded-lg my-5">
                <div className="flex justify-center">
                  <img className="w-[22vw] rounded-full my-3" src={item?.images[0].url} alt="image"/>
                </div>
                <div className=" w-[50vw] mx-auto text-3xl">
                    <p className="text-center font-bold">{capitalizeFirstLetter(item?.type)}</p>
                    <p className="py-3"><b>Name:</b> {item?.name}</p>
                    <p className="py-3"><b>Popularity:</b> {item?.popularity}</p>
                    <p className="py-3"><b>Followers:</b> {FollowersConversion(item?.followers?.total)}</p>
                    <p className="py-3"><b>Genres:</b> {item?.genres[0]}, {item?.genres[1]}, {item?.genres[2]}</p>
                </div>
              </div>
            )
        )
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default Artistdetail;
