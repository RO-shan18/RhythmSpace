import { capitalizeFirstLetter, FollowersConversion } from "../../utils/constants";
import Artisttopsongs from "./Artisttopsongs";

const Artistdetailcard = ({image, name, type, popularity, Followers, genres}) => {

  return (
    <div>
      <div className=" flex bg-slate-300 mx-5 p-5 rounded-lg my-5">
        <div className="flex ">
          <img
            className="w-[22vw] rounded-lg"
            src={image}
            alt="image"
          />
        </div>
        <div className=" w-[50vw] mx-5 text-3xl">
          <p className="font-bold">{capitalizeFirstLetter(type)}</p>
          <p className="py-3">
            <b>Name:</b> {name}
          </p>
          <p className="py-3">
            <b>Popularity:</b> {popularity}
          </p>
          <p className="py-3">
            <b>Followers:</b> {FollowersConversion(Followers)}
          </p>
          <p className="py-3">
            <b>Genres:</b> {genres[0]}, {genres[1]},{" "}
            {genres[2]}
          </p>
        </div>
      </div>
      <div className="px-9 text-xl font-bold bg-slate-400 mx-5 rounded-t-md py-2">
        <h2>{name} Top songs</h2>
      </div>
      <Artisttopsongs Followers={Followers} />
    </div>
  );
};

export default Artistdetailcard;
