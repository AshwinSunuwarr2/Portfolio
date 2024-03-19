import React from "react";
import {Edu, Projects, Work } from "./index";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className=" min-h-screen overflow-y-auto bi-sliders2-vertical bg-primary">
      <div className="hidden md:flex flex-col md:fixed font-montserrat text-center text-[12px] z-999">
      <a href="#work">
          <div className="bg-[#e216129e] text-white p-4 mb-1  translate-x-[-15px] duration-300 ease-in hover:translate-x-0 hover:bg-[#e21612e7]">
            W<br />o<br />r<br />k<br/>
          </div>
        </a>
        <a href="#projects">
          <div className="bg-[#e216129e] text-white p-4 mb-1  translate-x-[-15px] duration-300 ease-in hover:translate-x-0 hover:bg-[#e21612e7]">
            P<br />r<br />o<br />j<br />e<br />c<br />t<br />s<br />
          </div>
        </a>

        <a href="#edu">
          <div className="bg-[#e216129e] rounded-br-full text-white p-4 mb-1  translate-x-[-15px] duration-300 ease-in hover:translate-x-0 hover:bg-[#e21612e7]">
            E<br />d<br />u<br />c<br />a<br />t<br />i<br />o<br />n
          </div>
        </a>
      </div>
      <div className="mt-14" id="work">
        <Work />
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
