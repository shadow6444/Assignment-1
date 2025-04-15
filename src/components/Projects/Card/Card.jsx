import Button from "../../Button";

const Card = ({ name, desc, image }) => {
  return (
    <div className="flex flex-col rounded-2xl gap-2 justify-center items-center p-6 bg-cyan-950 transform transition-transform duration-300 hover:scale-110">
      <img src={image} alt="Project Image" className="h-32 w-52 rounded-lg" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-400">{desc}</p>
      <Button />
    </div>
  );
};

export default Card;
