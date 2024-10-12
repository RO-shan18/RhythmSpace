import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchresultsAlbum from "./searchresultsAlbum";
import SearchresultsArtists from "./searchresultsArtists";

const Searchresults = ()=>{
    const{query} = useParams();

    const searchresults = useSelector(store => store?.Searchresults?.Searchresults)
    
    console.log(searchresults)
    return (
        <div>
            <SearchresultsArtists artists={searchresults?.artists?.items}/>
            <SearchresultsAlbum searchresults={searchresults?.albums?.items}/>
        </div>
    )
}

export default Searchresults;