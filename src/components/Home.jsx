import React from "react";
import photo from "../assets/image.png";

const Home = () => {
  return (
    <div className=" text-center pt-24 min-h-screen bg-slate-400 dark:bg-slate-900  dark:text-white">
      <div classname="flex flex-col justify-around items-center">
        <div>
        <span>Hola, soy</span>
          <h1 className=" text-3xl ">
            LUCAS CABRAL
          </h1>
          <h2 className="">Desarrollador Web</h2>
         
        </div>

        <div>
          <img
            className=" w-96 border-4 border-white rounded-full  "
            src={photo}
            alt="photo"
          />
        </div>
      </div>
      <div>
        <button>Descargar CV</button>
      </div>
    </div>
  );
};

export default Home;
