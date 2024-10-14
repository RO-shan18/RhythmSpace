import Trackcard from "../Tracks/Trackcard";

const SearchresultsTrack = ({Tracks})=>{
    if (!Tracks || Tracks.length === 0) {
        return null;
      }

  return (
    <div className="w-[98vw] mx-auto">
      <h2 className="font-bold text-2xl pt-4">Tracks</h2>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none bg-gray-100 py-4">
          {Tracks.map((Track) => (
            <Trackcard
              image={Track?.album?.images[0].url}
              name={Track?.name}
              id={Track?.id}
            />
          ))}
      </div>
    </div>
  );
}

export default SearchresultsTrack;