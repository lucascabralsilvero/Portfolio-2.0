import React from "react";
import photo from "../assets/image.png";

const Home = () => {
  return (
    <div className=" text-center pt-24 min-h-screen bg-slate-400 dark:bg-slate-900 flex justify-center items-center dark:text-white">
      <div>
        <span>Hola!</span>
        <h1 className=" ">Soy <span classname="font-bold">Lucas</span> </h1>
        <h2 className="text-2xl">Desarrollador Web</h2>
        <button className="">Descargar CV</button>
      </div>
      <div>
        <img
          className=" w-96 border-4 border-white rounded-full  "
          src={photo}
          alt="photo"
        />
      </div>
    </div>
  );
};

export default Home;
