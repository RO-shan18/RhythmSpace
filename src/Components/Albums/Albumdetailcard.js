import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../utils/constants";
import Albumsonglists from "./Albumsonglists";

const Albumdetailcard = ({image, type, name, date, total, tracks}) => {
    const Track = useSelector(store=> store?.Track?.Trackarr);

  return (
    <div>
      <div className="flex  gap-x-6 bg-slate-300 mx-5 p-5 my-4 rounded-lg">
        <div>
          <img
            src={image}
            alt="image"
            className="w-[18vw] rounded-md"
          />
        </div>

        <div className="">
          <p className="py-2 text-xl font-semibold">
            {capitalizeFirstLetter(type)}
          </p>
          <p className="py-2 text-5xl font-bold">{name}</p>
          <p className="py-3 font-semibold text-xl">
            <span>{date.split("-")[0]}</span>,
            <span className="px-2 py-4">{total} songs</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between px-9 text-xl font-bold bg-slate-400 mx-5 rounded-t-md py-2">
        <h3 className="w-[10vw]">No.</h3>
        <h3 className="w-[70vw] mx-auto">Title</h3>
        <h3>Duration</h3>
      </div>
       <Albumsonglists tracks={Track} />
    </div>
  );
};

export default Albumdetailcard;
