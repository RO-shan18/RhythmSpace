import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter, FollowersConversion } from "../../utils/constants";
import useGetArtiststracks from "../../Hooks/usegetArtiststracks";
import Artisttopsongs from "./Artisttopsongs";

const Artistdetail = () => {
  const { artistid } = useParams();
  const artists = useSelector((store) => store?.artist?.artistarr);
  
  useGetArtiststracks(artistid);

  return (
    <div>
      {artists.length > 0 ? (
        artists.map(
          (item) =>
            item.id === artistid && (
            <div>
              <div key={item.id} className=" flex bg-slate-300 mx-5 p-5 rounded-lg my-5">
                <div className="flex ">
                  <img className="w-[22vw] rounded-lg" src={item?.images[0].url} alt="image"/>
                </div>
                <div className=" w-[50vw] mx-5 text-3xl">
                    <p className="font-bold">{capitalizeFirstLetter(item?.type)}</p>
                    <p className="py-3"><b>Name:</b> {item?.name}</p>
                    <p className="py-3"><b>Popularity:</b> {item?.popularity}</p>
                    <p className="py-3"><b>Followers:</b> {FollowersConversion(item?.followers?.total)}</p>
                    <p className="py-3"><b>Genres:</b> {item?.genres[0]}, {item?.genres[1]}, {item?.genres[2]}</p>
                </div>
              </div>
                <div className="px-9 text-xl font-bold bg-slate-400 mx-5 rounded-t-md py-2">
                    <h2>{item?.name} Top songs</h2>
                </div>
                <Artisttopsongs Followers={item?.followers?.total}/>
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
