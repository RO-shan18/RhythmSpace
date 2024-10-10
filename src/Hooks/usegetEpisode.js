import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { EpisodesIds } from "../utils/constants";
import {addEpisodes} from "../utils/episodeslice"
import { addShowsepisodes } from "../utils/showsepisodeslice";

const useGetEpisode = ()=>{
    const dispatch = useDispatch();
    const store = useSelector((store)=> store.token.accesstoken);
    const Episode = useSelector((store) => store?.Episode?.Episodearr);

    const getEpisode = async()=>{

        const data = await fetch("https://api.spotify.com/v1/episodes?" + EpisodesIds , {
            headers: {
                Authorization : `Bearer ${store}`}
        })
        const json = await data.json();

        dispatch(addEpisodes(json?.episodes))
        dispatch(addShowsepisodes(json?.episodes))
        }

    useEffect(()=>{
        if(!Episode) getEpisode();
    },[store])
}

export default useGetEpisode;