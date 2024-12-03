import Playlistcard from "../Playlists/Playlistcard";

const SearchresultsPlaylist = ({ Playlists }) => {
  if (!Playlists || Playlists.length === 0) {
    return null;
  }

  return (
    <div className="w-[98vw] mx-auto">
      <h2 className="font-bold text-2xl pt-4">Playlists</h2>
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-none bg-gray-100 py-4">
        {Playlists.map((Playlist) =>
          !Playlist ? (
            ""
          ) : (
            <Playlistcard
              image={Playlist?.images[0]?.url}
              name={Playlist?.name}
              id={Playlist?.id}
            />
          )
        )}
      </div>
    </div>
  );
};

export default SearchresultsPlaylist;
