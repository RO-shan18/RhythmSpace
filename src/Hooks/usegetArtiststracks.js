import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrack } from "../utils/trackslice";

const useGetArtiststracks = (id)=>{
    const dispatch = useDispatch();
    const store = useSelector((store)=> store.token.accesstoken);

    const getArtiststracks = async()=>{

        const data = await fetch("https://api.spotify.com/v1/artists/" + id + "/top-tracks" , {
            headers: {
                Authorization : `Bearer ${store}`}
        })
        const json = await data.json();

        dispatch(addTrack(json?.tracks));
     }

    useEffect(()=>{
       let timer =  setTimeout(() => {
            if(store) getArtiststracks();
        }, 200);
        
        return ()=>{
            clearTimeout(timer);
        }
    },[store])
}

export default useGetArtiststracks;