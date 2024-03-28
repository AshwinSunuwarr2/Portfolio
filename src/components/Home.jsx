import React from "react";
import { useNavigate, Link } from "react-router-dom";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


function Home() {
  // particles
  const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };



  // not particles
  const navigate = useNavigate();
  return (
    <div className=" flex items-center h-screen">
      {init && <Particles className="z-[-1]"
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#F1EBD0",
                    },
                },
                fpsLimit: 165,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#F75E20",
                    },
                    links: {
                        color: "#F75E20",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
            
/>
}
          <section className="z-99 w-full bg-no-repeat bg-cover bg-fixed bg-center py-32 bg-[url(https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg?t=st=1710396910~exp=1710400510~hmac=c9afba45ba1145ff467fd76585ff998c59e56d76bb0a8968d860e5c42bb3fc7d&w=1060)] bg-blend-darken">
            
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
