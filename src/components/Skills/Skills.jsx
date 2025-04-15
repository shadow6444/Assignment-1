import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

const Skills = () => {
  const mySills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      color: "text-amber-600",
    },
    {
      name: "CSS",
      icon: <IoLogoCss3 />,
      color: "text-blue-500",
    },
    {
      name: "Javascript",
      icon: <IoLogoJavascript />,
      color: "text-yellow-500",
    },
    {
      name: "React",
      icon: <FaReact />,
      color: "text-blue-500",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      color: "text-blue-600",
    },
    {
      name: "NextJS",
      icon: <RiNextjsFill />,
      color: "text-black",
    },
    {
      name: "NodeJS",
      icon: <FaNodeJs />,
      color: "text-green-700",
    },
    {
      name: "ExpressJS",
      icon: <SiExpress />,
      color: "text-black",
    },
    {
      name: "MongoDB",
      icon: <DiMongodb />,
      color: "text-green-800",
    },
    {
      name: "MySQL",
      icon: <GrMysql />,
      color: "text-teal-500",
    },
  ];

  return (
    <div className="w-full mt-12 pt-16 px-6" id="skills">
      <div className="flex flex-col justify-center items-center gap-12">
        <h2 className="font-bold text-4xl">
          Skills <span className="text-red-700">I have</span>
        </h2>
        <div className="flex items-center justify-center gap-12 mt-5 w-full flex-wrap">
          {mySills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-6 shadow-cyan-950 flex flex-col justify-center items-center gap-4 w-40 rounded-xl transform transition-transform duration-300 hover:scale-110"
              style={{ boxShadow: "0 0 10px #155e75" }}
            >
              <span className={`text-7xl ${skill.color} `}>{skill.icon}</span>
              <span className="text-xl font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
