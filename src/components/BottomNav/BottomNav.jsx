import { AiOutlineHome } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";

const BottomNav = () => {
  return (
    <div className="relative w-full">
      <nav className="fixed bottom-8 left-1/2 -translate-x-2/4 z-10 px-5 py-2 flex items-center gap-8 rounded-full w-max bg-black bg-opacity-30 backdrop-blur-md shadow-lg">
        <a
          href="#home"
          className="text-2xl p-2 hover:bg-cyan-950/30 rounded-full transition-all duration-300"
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          className="text-2xl p-2 hover:bg-cyan-950/30 rounded-full transition-all duration-300"
        >
          <IoPersonSharp />
        </a>
        <a
          href="#skills"
          className="text-2xl p-2 hover:bg-cyan-950/30 rounded-full transition-all duration-300"
        >
          <FaBook />
        </a>
        <a
          href="#projects"
          className="text-2xl p-2 hover:bg-cyan-950/30 rounded-full transition-all duration-300"
        >
          <GoProjectRoadmap />
        </a>
      </nav>
    </div>
  );
};

export default BottomNav;
