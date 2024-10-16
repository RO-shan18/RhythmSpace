import Showcards from "../Shows/Showcards";

const SearchresultsShows = ({Shows}) => {

  if (!Shows || Shows.length === 0 || Shows) {
    return null;
  }

  const Noshows = Shows.filter((Show)=> Show===null)

  if(Noshows.length===50)
  return null;

  return (
    <div className="w-[98vw] mx-auto">
      <h2 className="font-bold text-2xl pt-4">Shows</h2>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none bg-gray-100 py-4">
        {Shows.length === 0 ? (<p>No more Shows..</p>) : 
         (Shows.map((Show) => (
            <Showcards image={Show?.images[0]?.url} name={Show?.name} id={Show?.id}/>
          )))}
      </div>
    </div>
  );
};

export default SearchresultsShows;
