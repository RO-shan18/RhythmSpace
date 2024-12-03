import { useEffect } from "react";
import { albumIds } from "../utils/constants";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addAlbums } from "../utils/albumSlice";

const useGetAlbums = ()=>{

    const store = useSelector((store)=> store.token.accesstoken);
    const album = useSelector((store) => store?.album?.albumsarr);
    const dispatch = useDispatch();
    
    const getAlbums = async()=>{

        const data = await fetch("https://api.spotify.com/v1/albums?" + albumIds , {
            headers: {
                Authorization : `Bearer ${store}`}
        })
        const json = await data.json();

        dispatch(addAlbums(json?.albums));
    }

    useEffect(()=>{
       if(store) getAlbums();
       
    },[store])
}

export default useGetAlbums;