import { useSelector } from "react-redux";
import useGetShows from "../Hooks/usegetShows";
import { Link } from "react-router-dom";

const Shows = () => {
  useGetShows();

  const Show = useSelector(store => store?.Show?.Showsarr)

  if (!Show || Show.length === 0) {
    return <p>No Show available....</p>;
  }

  return (
    <div className="w-[98vw] mx-auto">
      <h2 className="font-bold text-2xl">Shows</h2>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none bg-gray-100 py-4">
        {Show.length === 0 ? (<p>No more Shows..</p>) : 
         ( Show.map((Show) => (
            <Link to={"/shows/" + Show.id} key={Show.id}><div className="px-4 cursor-pointer" >
              <img
                className="w-[12vw] max-w-none rounded-lg"
                src={Show?.images[0]?.url}
                alt="image"
              />
              <p className="w-[12vw] overflow-hidden text-center font-semibold pt-1">
                {Show?.name}
              </p>
            </div></Link>
          )))}
      </div>
    </div>
  );
};

export default Shows;
