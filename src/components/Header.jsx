import React, { useState } from "react";
import {Link} from "react-router-dom";
import DarkMode from "./DarkMode";
import logo from "../assets/logo.png";

const Header = () => {

  const [selected, setSelected] = useState(null); 

  return (
    <header className=" bg-slate-900 fixed w-screen h-20 text-white flex justify-around items-center border-b z-50">
      <div onClick={ () => setSelected(null)}>
        <Link to={"/"}>
          <img className="w-28" src={logo} alt="logo" />
        </Link>
      </div>

      <ul className="flex items-center px-10">
        <li className={ selected === true ? ` px-14 active` : `px-14`} onClick={ () => setSelected(true) }>
          <Link to={"/projects"}>
            <button className="object-fill relative overflow-hidden tracking-wider">
              Proyectos
              <span className="absolute bottom-0 h-0.5 bg-white inset-x-0 "></span>
            </button>
          </Link>
        </li>
        <li className={ selected !== true && selected !== null ? ` px-14 active` : `px-14`} onClick={ () => setSelected(false)}>
          <Link to={"/contact"}>
          <button className="object-fill relative overflow-hidden tracking-wider">
              Contacto
              <span className="absolute bottom-0 h-0.5 bg-white inset-x-0 "></span>
            </button>
          </Link>
        </li>
      </ul>
      <div className="pr-16">
        <DarkMode />
      </div>
    </header>
  );
};

export default Header;
