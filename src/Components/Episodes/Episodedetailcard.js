import { capitalizeFirstLetter, Millis_To_MinSec } from "../../utils/constants";
import Music from "../Music"

const Episodedetailcard = ({ image, type, name, date, duration, description , audio})=>{
    return(
        <div>
        <div  className="flex gap-x-6 bg-slate-300 mx-5 p-5 my-4 rounded-lg">
           <img className="w-[18vw] rounded-md" src={image} alt="image" />
           <div>
              <p className="py-2 text-xl font-semibold">{capitalizeFirstLetter(type)}</p>
              <p className="py-2 text-4xl font-bold">{name}</p>
              <span className="py-3 px-3 font-semibold text-xl">{date.split("-")[0]},</span>
              <span className="font-semibold text-xl">{Millis_To_MinSec(duration)}</span>
              {description?.show?.description ? (<p className="py-3 font-semibold text-xl h-[10vh] overflow-hidden text-ellipsis"><b>Description:</b> {description?.show?.description}</p>) :
              (<p className="py-3 font-semibold text-xl h-[10vh] overflow-hidden text-ellipsis"><b>Description:</b> {description?.description}</p>)}
           </div>
        </div>
        <Music url={audio} songname={name}/>
        </div>
    )
}

export default Episodedetailcard;