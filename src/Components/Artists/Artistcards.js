import { Link } from "react-router-dom";

const Artistcards = ({ name, image, id }) => {

  const imageurl = image[2]?.url;

  if(!imageurl)
    return null;

  return (
   <Link to={"/artist/"+ id} key={id}>
    <div className="md:m-5 m-3 cursor-pointer">
    <img className="max-w-none h-28 md:h-40 object-cover rounded-full" src={image[2]?.url} alt="artist image" />
      <p className="font-semibold pt-1">{name.split(",")[0]}</p>
    </div>
    </Link>
  );
};

export default Artistcards;
