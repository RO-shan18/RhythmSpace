import { useSelector } from "react-redux";
import useGetShows from "../../Hooks/usegetShows";
import { Link } from "react-router-dom";
import Showcards from "./Showcards";

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
            <Showcards key={Show?.id} image={Show?.images[0]?.url} name={Show?.name} id={Show?.id}/>
          )))}
      </div>
    </div>
  );
};

export default Shows;
