import { Link } from "react-router-dom";

const Episodecard = ({image, name, id})=>{
    return(
        <Link to={"/episode/" + id} key={id}>
            <div className="px-4 cursor-pointer" >
               <img className="w-[12vw] h-44 object-coverrounded-lg" src={image} alt="image" />
               <p className="w-[12vw] overflow-hidden text-center font-semibold pt-1">{name}</p>
            </div>
          </Link>
    )
}

export default Episodecard;