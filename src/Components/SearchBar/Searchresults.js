import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchresultsAlbum from "./searchresultsAlbum";
import SearchresultsArtists from "./searchresultsArtists";
import SearchresultsEpisodes from "./searchresultsEpisodes";
import SearchresultsShows from "./searchresultsShows";
import SearchresultsPlaylist from "./searchresultsPlaylist";
import SearchresultsAudiobooks from "./searchresultsaudiobooks";
import SearchresultsTrack from "./searchresultstrack";

const Searchresults = ()=>{
    const{query} = useParams();

    const searchresults = useSelector(store => store?.Searchresults?.Searchresults)
    
    console.log(searchresults)
    return (
        <div>
            <SearchresultsArtists artists={searchresults?.artists?.items}/>
            <SearchresultsAlbum searchresults={searchresults?.albums?.items}/>
            <SearchresultsEpisodes Episodes={searchresults?.episodes?.items}/>
            <SearchresultsShows Shows={searchresults?.shows?.items}/>
            <SearchresultsPlaylist Playlists={searchresults?.playlists?.items}/>
            <SearchresultsAudiobooks Audiobooks={searchresults?.audiobooks?.items}/>
            <SearchresultsTrack Tracks={searchresults?.tracks?.items}/>
        </div>
    )
}

export default Searchresults;