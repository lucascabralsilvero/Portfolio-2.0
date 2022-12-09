import data from "../data/projects.json";
import {AiFillGithub} from "react-icons/ai";
import {IoIosRocket} from "react-icons/io";
import {useState} from "react";
import Pagination from "./Pagination";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="text-center pt-24 min-h-screen bg-slate-100 dark:bg-slate-900">
      <div className="  flex flex-wrap justify-around items-center   ">
        {currentPost.map((project) => {
          return (
            <div
              className=" dark:text-white border-2 border-gray-400  dark:border-white mt-10 flex flex-col justify-center  items-center max-w-sm  rounded overflow-hidden"
              key={project.id}>
              <img
                className="w-full m-auto"
                src={project.img}
                alt={project.title}
              />
              <div className="px-3">
                <div className="text-xl font-bold mt-2  dark:text-yellow-300 text-orange-400">{project.title}</div>
                <p className="mt-2 mb-2  text-justify">{`${project.description.slice(
                  0,
                  80
                )}..`}</p>
                <span className=" px-2  rounded dark:bg-white dark:text-black bg-black text-white font-semibold ">
                  {project.rol}
                </span>
                <p className=" dark:text-white shadow-color mt-3 font-bold italic  ">
                  {project.technologies}
                </p>
                <div className="flex justify-center mt-4 mb-5">
                  <a
                    className="text-3xl mr-5hover:text-red-700 hover:text-orange-300"
                    target="_blank"
                    href={project.deploy}>
                    <IoIosRocket />
                  </a>
                  <a
                    className="text-3xl ml-14 hover:text-orange-300"
                    target="_blank"
                    href={project.github}>
                    <AiFillGithub />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        totalPost={data.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Projects;
