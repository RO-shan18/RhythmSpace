import { Link } from "react-router-dom";

const Albumcard = ({image, name, id}) => {
  return (
    <Link to={"/album/" + id} key={id}>
      <div className="px-4 cursor-pointer">
        <img
          className="w-[12vw] max-w-none rounded-lg"
          src={image}
          alt="image"
        />
        <p className="w-[12vw] overflow-hidden text-center font-semibold pt-1">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default Albumcard;
