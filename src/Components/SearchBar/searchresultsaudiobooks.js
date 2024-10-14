import Audiobookcard from "../Audiobooks/Audiobookcard";

const SearchresultsAudiobooks = ({Audiobooks})=>{
    if (!Audiobooks || Audiobooks.length === 0) {
        return null;
      }

  return (
    <div className="w-[98vw] mx-auto">
      <h2 className="font-bold text-2xl pt-4">Audiobooks</h2>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none bg-gray-100 py-4">
          {Audiobooks.map((Audiobook) => (
            <Audiobookcard
              image={Audiobook?.images[0].url}
              name={Audiobook?.name}
              id={Audiobook?.id}
            />
          ))}
      </div>
    </div>
  );
}

export default SearchresultsAudiobooks;