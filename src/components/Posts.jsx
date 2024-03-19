import React from "react";
import Edu from "./Edu";
import Projects from "./Projects";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className=" min-h-screen overflow-y-auto bi-sliders2-vertical bg-primary">
      <div className="hidden md:flex flex-col md:fixed font-montserrat text-center text-[12px] z-999">
        <a href="#projects">
          <div className="bg-[#e216129e] text-white p-4 mb-1  translate-x-[-15px] duration-500 ease-in-out hover:translate-x-0 hover:bg-[#e21612e7]">
            P<br />r<br />o<br />j<br />e<br />c<br />t<br />s<br />
          </div>
        </a>

        <a href="#edu">
          <div className="bg-[#e216129e] rounded-br-full text-white p-4 mb-1  translate-x-[-15px] duration-500 ease-in-out hover:translate-x-0 hover:bg-[#e21612e7]">
            E<br />d<br />u<br />c<br />a<br />t<br />i<br />o<br />n
          </div>
        </a>
      </div>
      <div className="projects" id="projects">
        <Projects />
      </div>

      {/*----- edu -----*/}
      <div className="flex flex-wrap p-6 m-auto" id="edu">
        <Edu />
      </div>
    </div>
  );
}

export default Posts;
