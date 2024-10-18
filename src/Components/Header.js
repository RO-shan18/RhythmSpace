import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { addsearchresults } from "../utils/searchresultSlice";
import { addsearch } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchquery, setsearchquery] = useState("");
  const searchcaching = useSelector((store) => store.Search);
  const store = useSelector((store) => store.token.accesstoken);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    if (searchcaching[searchquery]) {
      dispatch(addsearchresults(searchcaching[searchquery]));
    } else {
      getsearchresults();
    }
  }, [store, searchquery]);

  const getsearchresults = async () => {
    const data = await fetch(
      "https://api.spotify.com/v1/search?q=" +
        searchquery +
        "&type=album,playlist,track,show,audiobook,episode,artist&limit=15",
      {
        headers: {
          Authorization: `Bearer ${store}`,
        },
      }
    );
    const json = await data.json();

    dispatch(addsearchresults(json));
    dispatch(addsearch({ [searchquery]: json }));
  };

  const HandleInputChange = (e) => {
    const query = e.target.value;
    setsearchquery(query);

    if (query.trim() === "") {
      Navigate("/");
    } else {
      Navigate("/search/" + e.target.value);
    }
  };

  return (
    <div className="flex items-center flex-col justify-between sm:flex-row bg-red-400 px-0 md:px-5 sm:py-3 py-0 gap-3 sm:gap-0 text-white font-semibold text-xl pb-4 lg:pb-5 sticky top-0 z-10">
      <div className="">
        <img
          className="h-[4rem] sm:w-[8.5rem] sm:h-[3.5rem] lg:w-[9.5rem] lg:h-[4rem] md:absolute top-0 md:left-[11px]"
          src={logo}
          alt="logo"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Wanna Play rhythm Search here......"
          className="w-[95vw] sm:w-[70vw] md:w-[30vw] py-1 sm:mr-4 md:mr-0 pl-4 mx-auto rounded-md text-lg text-black"
          value={searchquery}
          onChange={HandleInputChange}
        />
      </div>
      
      <div className="md:block hidden">
        <button className="bg-blue-400 px-2 lg:py-1 rounded-md text-lg mx-2 cursor-pointer lg:border-t-[3px]">
          Log in
        </button>
        <button className="bg-blue-400 px-2 lg:py-1 rounded-md text-lg cursor-pointer lg:border-t-[3px]">
          Sign in
        </button>
      </div>
    </div>
  );
};
  
export default Header;
