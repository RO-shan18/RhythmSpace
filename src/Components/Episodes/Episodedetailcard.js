import { capitalizeFirstLetter, Millis_To_MinSec } from "../../utils/constants";
import Music from "../Music"

const Episodedetailcard = ({ image, type, name, date, duration, description , audio})=>{
    return(
        <div>
        <div  className="flex sm:flex-row flex-col items-center sm:items-start gap-x-6 bg-slate-300 mx-5 p-5 my-4 rounded-lg">
           <img className="lg:w-64 sm:w-48 w-80 rounded-md" src={image} alt="image" />
           <div>
              <p className="py-2 text-lg sm:text-xl text-center sm:text-left font-semibold">{capitalizeFirstLetter(type)}</p>
              <p className="py-2 text-lg sm:text-xl lg:text-4xl font-bold">{name}</p>
              <span className="py-2 px-2 font-semibold text-md sm:text-xl">{date.split("-")[0]},</span>
              <span className="font-semibold text-md sm:text-xl">{Millis_To_MinSec(duration)}</span>
           </div>
        </div>
        <Music url={audio} songname={name}/>
        </div>
    )
}

export default Episodedetailcard;