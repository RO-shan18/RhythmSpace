import { useDispatch, useSelector } from "react-redux";
import { addartist } from "../utils/artistslice";
import { useEffect } from "react";
import { artistIds } from "../utils/constants";

const useGetArtists = ()=>{
    const dispatch = useDispatch();
    const store = useSelector((store)=> store.token.accesstoken);

    const getartist = async()=>{

        const data = await fetch("https://api.spotify.com/v1/artists?" + artistIds , {
            headers: {
                Authorization : `Bearer ${store}`}
        })
        const json = await data.json();
        
        dispatch(addartist(json?.artists));
        }

    useEffect(()=>{
        if(store) getartist();
    },[store])
}

export default useGetArtists;