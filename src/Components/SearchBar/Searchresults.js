import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchresultsAlbum from "./SRAlbum";
import SearchresultsArtists from "./SRArtists";
import SearchresultsEpisodes from "./SREpisodes";
import SearchresultsShows from "./SRShows";
import SearchresultsPlaylist from "./SRPlaylist";
import SearchresultsTrack from "./SRtrack";
import {addartist, removeartist} from "../../utils/artistslice"
import { addAlbums, removeAlbums } from "../../utils/albumSlice";
import { addEpisodes, removeEpisodes } from "../../utils/episodeslice";
import { addShows, removeshows } from "../../utils/showslice";
import { addTrack, removeTrack } from "../../utils/trackslice";

const Searchresults = ()=>{
    const{query} = useParams();

    const searchresults = useSelector(store => store?.SearchResults?.Searchresultarr)
    const dispatch = useDispatch();

    if(query.length === 0){
        dispatch(removeartist());
        dispatch(removeTrack());
        dispatch(removeAlbums());
    }
    else{
        dispatch(addartist(searchresults?.artists?.items));
        dispatch(addAlbums(searchresults?.albums?.items));
        dispatch(addTrack(searchresults?.tracks?.items));
    }
   
    
    console.log(searchresults)
    return (
        <div>
            <SearchresultsArtists artists={searchresults?.artists?.items}/>
            <SearchresultsAlbum searchresults={searchresults?.albums?.items}/>
            <SearchresultsEpisodes Episodes={searchresults?.episodes?.items}/>
            <SearchresultsShows Shows={searchresults?.shows?.items}/>
            <SearchresultsPlaylist Playlists={searchresults?.playlists?.items}/>
            <SearchresultsTrack Tracks={searchresults?.tracks?.items}/>
        </div>
    )
}

export default Searchresults;