import { Link } from "react-router-dom"

const Playlistcard = ({image, name, id})=>{
    return(
        <Link to={"/Playlist/" + id} key={id}><div className="px-2 md:px-4 cursor-pointer" >
        <img
          className="w-32 h-36 md:w-40 lg:w-48 md:h-44 object-cover rounded-lg"
          src={image}
          alt="image"
        />
        <p className="w-32 md:w-40 lg:w-48 overflow-hidden text-center font-semibold pt-1">
          {name}
        </p>
      </div></Link>
    )
}

export default Playlistcard;