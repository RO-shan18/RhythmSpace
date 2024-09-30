
const Artistcards = ({ name, image, id }) => {

  return (
    <div className="m-5 cursor-pointer">
      <img className="max-w-none rounded-full" src={image[2]?.url} alt="artist image" />
      <p className="font-semibold pt-1">{name}</p>
    </div>
  );
};

export default Artistcards;
