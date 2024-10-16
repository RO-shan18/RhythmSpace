import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrack } from "../utils/trackslice";

const useGetPlaylistssongs = (id)=>{
    const dispatch = useDispatch();
    const store = useSelector((store)=> store.token.accesstoken);

    const getPlaylistssongs = async()=>{

        const data = await fetch("https://api.spotify.com/v1/playlists/" + id ,{
            headers: {
                Authorization : `Bearer ${store}`}
        })
        const json = await data.json();

        console.log(json);

        dispatch(addTrack(json));
     }

    useEffect(()=>{
       let timer =  setTimeout(() => {
            if(store) getPlaylistssongs();
        }, 200);
        
        return ()=>{
            clearTimeout(timer);
        }
    },[store])
}

export default useGetPlaylistssongs;