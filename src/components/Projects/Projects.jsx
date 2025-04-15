import Card from "./Card";
import ProjectImg from "../../assets/ProjectDev.png";
import Dineovu from "../../assets/dineovu.png";

const Projects = () => {
  const myProjects = [
    {
      name: "Dineovu - Cafe App",
      description:
        "A cafe app that allows users to reserve, order and pay for food and drinks.",
      image: Dineovu,
    },
    {
      name: "Tenzies - Game App",
      description:
        "A simple dice game app that allows users to roll dice and win prizes.",
      image:
        "https://dqy38fnwh4fqs.cloudfront.net/UH8OJAADNKGBGA71PRPOLODNP9JG/projects/tenzies.webp",
    },
    {
      name: "Vanlife - Van App",
      description:
        "A van app that allows users to find and book vans for rent.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdvuvqU9FAo6NRvsV6_wqCoAbPvcxnqXpSg&s",
    },
    {
      name: "Project Management App",
      description:
        "A project management app that allows users to create and manage projects.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0-tyUAy-CI8dg9T45pSbCJ7clsjMtQ15zw&s",
    },
  ];

  return (
    <div className="w-full mt-16 pt-16 px-6" id="projects">
      <div className="flex items-center justify-between gap-12">
        <div className="flex flex-col justify-start items-center gap-6">
          <h2 className="font-bold text-4xl mb-6">
            Projects <span className="text-red-700">I've Developed</span>
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {myProjects.map((project, index) => (
              <Card
                name={project.name}
                desc={project.description}
                image={project.image}
              />
            ))}
          </div>
        </div>
        <img
          src={ProjectImg}
          alt="Project Development Image"
          className="h-[450px] rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Projects;
