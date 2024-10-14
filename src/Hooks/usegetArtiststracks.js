import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArtisttracks } from "../utils/Artisttrackslice";

const useGetArtiststracks = (id)=>{
    const dispatch = useDispatch();
    const store = useSelector((store)=> store.token.accesstoken);
    const TopTracks = useSelector(store => store?.Artisttrack?.Artisttracksarr);

    const getArtiststracks = async()=>{

        const data = await fetch("https://api.spotify.com/v1/artists/" + id + "/top-tracks" , {
            headers: {
                Authorization : `Bearer ${store}`}
        })
        const json = await data.json();
       
        dispatch(addArtisttracks(json?.tracks));   
     }

    useEffect(()=>{
        if(store) getArtiststracks();
    },[store])
}

export default useGetArtiststracks;