import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png"
import { useEffect, useState } from "react";
import { addsearchresults } from "../utils/searchresultSlice";
import { addsearch } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchquery, setsearchquery] = useState("");
  const searchcaching = useSelector(store=> store.Search)
  const store = useSelector((store)=> store.token.accesstoken);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(()=>{
    let timer = setTimeout(() => {
      if(searchcaching[searchquery]){
        dispatch(addsearchresults(searchcaching[searchquery]))
      }
      else{
       getsearchresults();
      }    
    }, 200);

    return ()=>{
      clearTimeout(timer)
    }
   
 },[store, searchquery])
  
  const getsearchresults = async()=>{

      const data = await fetch("https://api.spotify.com/v1/search?q=" + searchquery + "&type=album,playlist,track,show,audiobook,episode,artist&limit=50", {
          headers: {
              Authorization : `Bearer ${store}`}
      })
      const json = await data.json();

      dispatch(addsearchresults(json));
      
      dispatch(addsearch({ [searchquery]: [json]}));
  }

  const HandleInputChange = (e)=>{
     const query = e.target.value;
     setsearchquery(query);

     if(query.trim() === "")
     Navigate("/");
     else
     Navigate("/search/" + e.target.value);
  }

  return (
    <div className="flex justify-between items-center bg-red-400 px-5 py-3 text-white font-semibold text-xl pb-5 sticky top-0 z-10">
      <div className="">
        <img className="w-[9.5rem] h-[4rem] absolute top-0 left-[11px]" src={logo} alt="logo" />
      </div>
      <div>
        <input type="text" placeholder="Search your rhythm......" className="w-[30vw] py-1 pl-4 mx-2 rounded-md text-lg text-black" value={searchquery} onChange={HandleInputChange} />
        <button className="bg-blue-400 px-2 pb-1 pt-[2px] rounded-md text-lg cursor-pointer border-t-[3px]">Search</button>
      </div>
      <div className="border border-white  px-2 py-1 rounded-lg border-t-[4px] cursor-pointer">
        <p>Get Plus</p>
      </div>
      <div>
        <button className="bg-blue-400 px-2 py-1 rounded-md text-lg mx-2 cursor-pointer border-t-[3px]">Log in</button>
         <button className="bg-blue-400 px-2 py-1 rounded-md text-lg cursor-pointer border-t-[3px]">Sign in</button>
      </div>
    </div>
  );
};

export default Header;
