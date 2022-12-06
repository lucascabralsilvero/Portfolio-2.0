import data from "../data/projects.json";
import {AiFillGithub} from "react-icons/ai";
import {IoIosRocket} from "react-icons/io";

const Projects = () => {
  return (
    <div className=" text-center pt-24 min-h-screen bg-slate-400 dark:bg-slate-900 flex flex-wrap justify-around items-center   ">
      {data.map((project) => {
        return (
          <div
            className=" dark:text-white border mt-10 flex flex-col justify-center  items-center max-w-sm  rounded overflow-hidden"
            key={project.id}>
            <img
              className="w-full m-auto"
              src={project.img}
              alt={project.title}
              />
              <div className="text-xl font-bold mt-2">{project.title}</div>
            <p className="mt-2">{`${project.description.slice(0,80)}...`}</p>
            <p className="mt-2">{project.rol}</p>
            <p className="mt-2">{project.technologies}</p>
            <div className="flex mt-5 mb-5">
              <a
                className="text-3xl mr-5hover:text-red-700 hover:text-orange-300"
                target="_blank"
                href={project.deploy}>
                <IoIosRocket />
              </a>
              <a className="text-3xl ml-14 hover:text-orange-300" target="_blank" href={project.github}>
                <AiFillGithub />
              </a>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Projects;
