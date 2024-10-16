import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addShowsepisodes } from "../utils/showsepisodeslice";

const useGetShowsEpisode = (id)=>{
    const dispatch = useDispatch();
    const store = useSelector((store)=> store.token.accesstoken);
    const showsepisodes = useSelector(
        (store) => store?.Showsepi?.Showsepisodearr
      );

    const getShowsEpisode = async()=>{

        const data = await fetch("https://api.spotify.com/v1/shows/" + id + "/episodes?offset=0&limit=50" , {
            headers: {
                Authorization : `Bearer ${store}`}
        })
        const json = await data.json();

        dispatch(addShowsepisodes(json?.items))     
        }

    useEffect(()=>{
        if(store) getShowsEpisode();
    },[store])
}

export default useGetShowsEpisode;