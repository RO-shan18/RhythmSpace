import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ShowsIds } from "../utils/constants";
import { addShows } from "../utils/showslice";

const useGetShows = ()=>{
    const dispatch = useDispatch();
    const store = useSelector((store)=> store.token.accesstoken);

    const getShows = async()=>{

        const data = await fetch("https://api.spotify.com/v1/shows?" + ShowsIds ,  {
            headers: {
                Authorization : `Bearer ${store}`}
        })
        const json = await data.json();
        dispatch(addShows(json?.shows));
        }

    useEffect(()=>{
        if(store) getShows();

    },[store])
}

export default useGetShows;