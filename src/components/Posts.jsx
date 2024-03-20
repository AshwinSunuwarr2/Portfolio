import React from "react";
import { Edu, Projects, Work } from "./index";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className=" min-h-screen overflow-y-auto bi-sliders2-vertical bg-primary">
      <div className="hidden md:flex flex-col md:fixed font-montserrat text-center text-[12px] z-999">
        <a href="#work">
          <div className="bg-[#e216129e] text-white p-4 mb-1  translate-x-[-15px] duration-300 ease-in hover:translate-x-0 hover:bg-[#e21612e7] leading-[14px]">
            W<br />O<br />R<br />K<br />
          </div>
        </a>
        <a href="#projects">
          <div className="bg-[#e216129e] text-white p-4 mb-1  translate-x-[-15px] duration-300 ease-in hover:translate-x-0 hover:bg-[#e21612e7] leading-[14px]">
            P<br />R<br />O<br />J<br />E<br />C<br />T<br />
          </div>
        </a>

        <a href="#edu">
          <div className="bg-[#e216129e] rounded-br-full text-white p-4 mb-1  translate-x-[-15px] duration-300 ease-in hover:translate-x-0 hover:bg-[#e21612e7] leading-[14px]">
            E<br />D<br />U<br />C<br />A<br />T<br />I<br />O<br />N
          </div>
        </a>
      </div>

      <div className="mt-[70px]" id="work">
        <Work />
      </div>
      <div className="projects mt-[70px]" id="projects">
        <Projects />
      </div>

      {/*----- edu -----*/}
      <div className="flex flex-wrap p-6 mt-[70px]" id="edu">
        <Edu />
      </div>
    </div>
  );
}

export default Posts;
