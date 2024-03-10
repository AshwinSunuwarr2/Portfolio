import React from "react";
import Edu from "./Edu"
import Projects from "./Projects";

function Posts() {
  return (
    <div className=" min-h-screen overflow-y-auto bi-sliders2-vertical">
      <div className="projects">
        <Projects/>
      </div>

{/*----- edu -----*/}
      <div className="flex flex-wrap p-6 m-auto">
        <Edu/>
      </div>
    </div>
  );
}

export default Posts;
