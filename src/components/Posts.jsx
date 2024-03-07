import React from "react";
import Edu from "./Edu"

function Posts() {
  return (
    <div className="bg-gradient-to-r from-violet-300 to-pink-100 min-h-screen">
      <div className="projects">
        <ul>
          <li>
            <div>
              Criminal Face Recognition System
            </div>
          </li>
          <li>
            <div>
              FreeL
            </div>
          </li>
          <li>
            <div>
              eBilling
            </div>
          </li>
          <li>
            <div>
              Todo Using Redux
            </div>
          </li>
          <li>
            <div>
              stopwatch for react components
            </div>
          </li>
          <li>
            <div>
              miscellaneous
            </div>
          </li>
        </ul>
      </div>

{/*----- edu -----*/}
      <div className="flex flex-wrap p-6 m-auto">
        <Edu/>
      </div>
    </div>
  );
}

export default Posts;
