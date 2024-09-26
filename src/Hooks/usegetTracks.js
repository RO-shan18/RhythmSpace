import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useGetTracks = ()=>{
    const dispatch = useDispatch();
    const store = useSelector((store)=> store.token.accesstoken);

    const getTracks = async()=>{

        const data = await fetch("https://api.spotify.com/v1/tracks/19GWgGIJzqZqe6i1v41NZZ",  {
            headers: {
                Authorization : `Bearer ${store}`}
        })
        const json = await data.json();

        console.log(json);
        }

    useEffect(()=>{
        if(store) getTracks();
    },[store])
}

export default useGetTracks;