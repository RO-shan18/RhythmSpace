import { useSelector } from "react-redux";
import Artistdetailcard from "../Artists/Artistdetailcards";
import { useParams } from "react-router-dom";
import { FollowersConversion } from "../../utils/constants";

const SearchArtistdetails = ()=>{
    const { artistid } = useParams();

    const searchresultsartistdetails = useSelector(store => store?.Searchresults?.Searchresults?.artists?.items)
  
    if (!searchresultsartistdetails || searchresultsartistdetails.length === 0) {
      return <p>Loading...</p>;
    }

    return(
        <div>
        {searchresultsartistdetails.length > 0 ? (
          searchresultsartistdetails.map(
            (item) =>
              item?.id === artistid && (
              <Artistdetailcard image={item?.images[0].url} name={item?.name} type={item?.type} popularity={item.popularity} Followers={item?.followers?.total} genres={item?.genres}  />
              )
          )
        ) : (
          <p>Loading....</p>
        )}
      </div>
    )
}

export default SearchArtistdetails;