import { FaGithub } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";

const Hero = () => {
  const toggleAlert = () => {
    alert("CV Coming Soon");
  };

  return (
    <div className="w-full mt-12 pt-16 px-6" id="about">
      <div className=" flex justify-between items-center gap-12">
        <img
          src="https://imgcdn.stablediffusionweb.com/2024/10/29/b772c8fb-e6cc-4e71-93c4-b5e43899a68f.jpg"
          alt="Portfolio Hero Image"
          className="h-96 rounded-3xl"
        />
        <div className="flex flex-col gap-7 max-w-xl">
          <h2 className="font-bold text-5xl">
            Know <span className="text-red-700">Who I Am</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I’m a passionate and curious software engineer who loves turning
            ideas into impactful digital experiences. With a diverse skills of
            front-end, back-end, and database technologies, I thrive on learning
            new tools and solving real-world problems through code.{" "}
          </p>
          <div className="flex gap-6 items-center text-lg mt-6">
            <a
              href="https://github.com/shadow6444"
              className="flex items-center gap-2 px-2 py-2 font-medium bg-cyan-950 hover:bg-gray-200 rounded-xl transition-all duration-200"
            >
              <FaGithub />
              <span> My GitHub</span>
            </a>
            <button
              onClick={toggleAlert}
              className="flex items-center gap-2 px-2 py-2 font-medium bg-cyan-950 hover:bg-gray-200 rounded-xl transition-all duration-200"
            >
              <MdDownload />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
