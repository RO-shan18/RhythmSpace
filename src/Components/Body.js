import { useEffect} from "react";
import Artists from "./Artists";
import { useDispatch} from "react-redux";
import { addaccesstoken } from "../utils/Tokenslice";
import Albums from "./Albums";
import Episode from "./Episode";
import Shows from "./Shows";


const Body = ()=>{
    const dispatch = useDispatch();

    const getSpotifyaccesstoken = async()=>{

        const data = await fetch("https://accounts.spotify.com/api/token" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                grant_type: "client_credentials",
                client_id: "0f94f662183b4321acad79a0c070583f",
                client_secret: "5fbda2cc5f624d5c82652f71f49848e5",
              }),client_secret : "5fbda2cc5f624d5c82652f71f49848e5"
            })

        const json = await data.json();

        dispatch(addaccesstoken(json.access_token));
    }

    useEffect(()=>{
        getSpotifyaccesstoken();
    },[])

    return (
        <div className="flex flex-col gap-y-3 my-3">
            <Artists/>
            <Albums/>
            <Episode/>
            <Shows/>
        </div>
    )
}   


export default Body;