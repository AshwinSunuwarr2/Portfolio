import React from 'react'
import { Link } from 'react-router-dom'
function Mobilemenu() {
    const holder = document.getElementsByClassName("below-menu-holder");
      
      var active = 0;
      function activate() {
          for (let x = 0; x < holder.length; x++) {
              if (x == active) {
                  holder[x].classList.add("border-t-4", "bg-red-400/0");
              } else {
                  holder[x].classList.remove("border-t-4", "bg-red-400/0");
              }
          }
      }
      for ( let x = 0; x < holder.length; x++ ) {
          holder[x].addEventListener("click", () => {
              active = x;
              activate();
          })
      }
  return (


    <>

<div className="flex flex-col justify-around">
    <div className="p-2 w-full h-auto border-box bottom-0">
        
        <div className="bg-[#e2161200] flex justify-around text-[#e21612d6] w-full h-full rounded-xl">
            <div className="below-menu-holder bg-red-400/0 rounded-bl-xl w-1/4 border-t-4 border-[#ee2d2d] duration-100 flex justify-around">
                <Link to="/"><span className="material-icons self-center">home</span></Link>
            </div>
            <div className="below-menu-holder w-1/4 flex duration-100 justify-around border-[#ee2d2d]">
                <Link to="/about"><span className="material-icons self-center">person</span></Link>
            </div>
            <div className="below-menu-holder  w-1/4 flex duration-100 justify-around border-[#ee2d2d]">
                <Link to="/contact"><span className="material-icons self-center">contact_page</span></Link>
            </div>
            <div className="below-menu-holder rounded-tr-xl rounded-br-xl w-1/4 flex duration-100 justify-around border-[#ee2d2d]">
                <Link to="/posts"><span className="material-icons self-center">work</span></Link>
            </div>
        </div>
        
    </div>
</div>

    </>
  )
}

export default Mobilemenu