import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TrackIds } from "../utils/constants";
import { addTrack } from "../utils/trackslice";

const useGetTrack = ()=>{
    const dispatch = useDispatch();
    const Track = useSelector(store => store?.Track?.Trackarr);
    const store = useSelector((store)=> store.token.accesstoken);
    
    const getTrack = async()=>{

        const data = await fetch("https://api.spotify.com/v1/tracks?" + TrackIds , {
            headers: {
                Authorization : `Bearer ${store}`
            }
        })

        const json = await data.json();

        console.log(json);

        dispatch(addTrack(json));
    }

    useEffect(()=>{
        if(!Track) getTrack();
    }, [store])
}

export default useGetTrack;