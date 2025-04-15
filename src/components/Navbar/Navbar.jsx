import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = ({ toggle, theme }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <h2
        className="owner font-bold text-4xl tracking-wider capitalize"
        style={{ fontFamily: "Parisienne, cursive" }}
      >
        &lt;Anas Akram Butt /&gt;
      </h2>
      <div className="flex justify-around items-center w-2/4 font-semibold text-xl">
        <a
          href="#home"
          className="group relative flex items-center flex-col justify-center cursor-pointer transition"
        >
          <span>Home</span>
          <span className="absolute -bottom-1 h-[2px] w-0 bg-cyan-800 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#about"
          className="group relative flex items-center flex-col justify-center cursor-pointer"
        >
          <span>About</span>
          <span className="absolute -bottom-1 h-[2px] w-0 bg-cyan-800 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#skills"
          className="group relative flex items-center flex-col justify-center cursor-pointer"
        >
          <span>Skills</span>
          <span className="absolute -bottom-1 h-[2px] w-0 bg-cyan-800 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#projects"
          className="group relative flex items-center flex-col justify-center cursor-pointer"
        >
          <span>Projects</span>
          <span className="absolute -bottom-1 h-[2px] w-0 bg-cyan-800 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <button
          onClick={toggle}
          className="text-2xl p-1 rounded-full hover:bg-cyan-950 transition-all duration-200"
        >
          {theme ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
