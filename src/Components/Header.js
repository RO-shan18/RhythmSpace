import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png"
import { useEffect, useState } from "react";
import { addsearchartist } from "../utils/searcharitstslice";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector(store => store.token.accesstoken)
  const [searchartist, setsearchartist] = useState("");

  return (
    <div className="flex justify-between items-center bg-red-400 px-5 py-3 text-white font-semibold text-xl pb-5">
      <div className="">
        <img className="w-[9.5rem] h-[4rem] absolute top-0 left-[11px]" src={logo} alt="logo" />
      </div>
      <div>
        <input type="text" placeholder="Search your rhythm......" className="w-[30vw] py-1 pl-4 mx-2 rounded-md text-lg text-black" value={searchartist} onChange={(e)=> setsearchartist(e.target.value)} />
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
