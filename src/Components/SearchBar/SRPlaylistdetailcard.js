import { capitalizeFirstLetter } from "../../utils/constants";
import Artisttopsongs from "../Artists/Artisttopsongs";

const PlaylistDetailcard = ({image, type, name, total})=>{
    return (
        <div>
      <div className="flex sm:flex-row flex-col items-center sm:items-start bg-slate-300 mx-5 p-5 rounded-lg my-5">
        <div className="flex ">
          <img
            className="lg:w-64 w-80 rounded-lg"
            src={image}
            alt="image"
          />
        </div>
        <div className=" w-[50vw] mx-5 text-lg sm:text-xl lg:text-3xl">
          <p className="font-bold text-center sm:text-left">{capitalizeFirstLetter(type)}</p>
          <p className="text-md sm:text-xl py-3">
            <b>Name:</b> {name}
          </p>
          <p className="py-3 text-md sm:text-xl">
            <b>Total tracks:</b> {total}
          </p>
        </div>
      </div>
      <div className="px-2 sm:px-9 text-lg sm:text-xl font-bold bg-slate-400 mx-5 rounded-t-md py-2">
        <h2>Top songs</h2>
      </div>
      <Artisttopsongs/>
    </div>
    )
}

export default PlaylistDetailcard;