import Artistcards from "../Artists/Artistcards";

const SearchresultsArtists = ({artists})=>{

    if (!artists || artists.length === 0) {
        return <p>No Albums available....</p>;
      }

    return(
        <div className="w-[98vw] mx-auto">
      <h2 className="font-bold text-2xl">Artists</h2>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none bg-gray-100">
        {artists.length > 0 &&
          artists.map((artist) => (
            <Artistcards
              name={artist?.name}
              image={artist?.images}
              id={artist?.id}
            />
          ))}
      </div>
    </div>
    )
}

export default SearchresultsArtists;