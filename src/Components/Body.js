import { useEffect, useState } from "react";
import Artists from "./Artists";
import { useDispatch } from "react-redux";
import { addaccesstoken } from "../utils/Tokenslice";

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
        <div>
            <Artists/>
        </div>
    )
}   


export default Body;