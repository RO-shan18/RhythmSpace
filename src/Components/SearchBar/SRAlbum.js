import Albumcard from "../Albums/Albumcard";

const SearchresultsAlbum = ({searchresults}) => {

    if (!searchresults || searchresults.length===0) {
        return null;
      }

  return (
    <div className="w-[98vw] mx-auto">
      <h2 className="font-bold text-2xl pt-4">Albums</h2>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none bg-gray-100 py-4">
        {searchresults.map((searchresult) => (
            <Albumcard
              image={searchresult?.images[0]?.url}
              name={searchresult?.name}
              id={searchresult?.id}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchresultsAlbum;
