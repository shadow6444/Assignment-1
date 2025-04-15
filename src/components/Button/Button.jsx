import { FaPlay } from "react-icons/fa";

const Button = () => {

  const toggleAlert=()=>{
    alert("Project Coming Soon!");
  }

  return (
    <button onClick={toggleAlert} className="flex items-center gap-2 px-2 py-2 font-medium bg-cyan-950 hover:bg-gray-200 rounded-xl transition-all duration-200">
      <FaPlay />
      <span>View Project</span>
    </button>
  );
};

export default Button;
