import React from "react";
import { useNavigate, Link } from "react-router-dom";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";


function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-primary flex items-center h-screen">
          <section className="w-full bg-no-repeat bg-cover bg-fixed bg-center py-32 bg-[url(https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg?t=st=1710396910~exp=1710400510~hmac=c9afba45ba1145ff467fd76585ff998c59e56d76bb0a8968d860e5c42bb3fc7d&w=1060)] bg-blend-darken">
            
        <div className="mx-auto text-center text-white">
          {/* <h1 className="text-5xl font-medium mb-6">Welcome to My Portfolio</h1> */}
          <div className="flex flex-row justify-center items-center">
          <img src="https://readme-typing-svg.herokuapp.com?font=Montserrat&weight=500&size=36&pause=1000&color=F7F7F7&center=true&vCenter=true&random=false&width=600&lines=%E2%98%98%EF%B8%8F+Welcome+to+My++Portfolio+%E2%98%98%EF%B8%8F;You're+Amaging+%26+Loved++%F0%9F%91%91" alt="Typing SVG" />
          </div>
          <p className="text-lg mt-4 mb-12 font-montserrat">
          I code, I design, I drink coffee🍵 (a lot), and sometimes, I even sleep! 
          </p>
          <Link
            to="/contact"
            className=" bg-[#e21612b4] text-white py-4 px-6 md:px-8 rounded-full hover:bg-[#e21612e0] mr-2 font-montserrat text-sm"
          >
            HIRE ME
          </Link>
          <a
            href="ashwinCV.pdf"
            target="_blank"
            className=" bg-[#e21612b4] text-white py-4 px-6 md:px-8  rounded-full hover:bg-[#e21612e0] ml-2 font-montserrat text-sm"
            download
          >
            DOWNLOAD CV
          </a>
        </div>

      </section>
          
        
    </div>


    // parallax effect -----------
    // <>
    //   <Parallax pages={2}>
    //     <ParallaxLayer
    //       offset={0}
    //       speed={0.5}
    //       style={{ backgroundColor: "green" }}
    //     />
    //     <ParallaxLayer className="flex justify-center items-center" offset={0} >
    //       <h2>Hello dev!</h2>
    //     </ParallaxLayer>
    //     <ParallaxLayer
    //       offset={1}
    //       speed={0.5}
    //       factor={2}
    //       style={{ backgroundColor: "orange" }}/>
      
    //   <ParallaxLayer className="flex justify-center items-center" offset={1}>
    //       <h2 className="text-3xl text-center m-auto">Bye dev!</h2>
    //     </ParallaxLayer>
    //     </Parallax>
    // </>
  );
}

export default Home;
