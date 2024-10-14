import { Link } from "react-router-dom"

const Playlistcard = ({image, name, id})=>{
    return(
        <Link to={"/Playlist/" + id} key={id}><div className="px-4 cursor-pointer" >
        <img
          className="w-[12vw] h-44 object-cover rounded-lg"
          src={image}
          alt="image"
        />
        <p className="w-[12vw] overflow-hidden text-center font-semibold pt-1">
          {name}
        </p>
      </div></Link>
    )
}

export default Playlistcard;