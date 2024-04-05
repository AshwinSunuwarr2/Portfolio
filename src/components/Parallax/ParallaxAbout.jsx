import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Parallax.css";

import me from "../../assets/images/me.png";
import "../compo.css";
import { Link } from "react-router-dom";

import {
  PiInstagramLogoLight,
  PiLinkedinLogo,
  PiGithubLogoLight,
} from "react-icons/pi";

import { SiGmail } from "react-icons/si";
const ParallaxAbout = () => {
  return (
    <>
      <Parallax pages={4} className="bg-[#2f2f2f]">
        <ParallaxLayer offset={0} className="bg-[#0d0d0d]"></ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0.5} className="">
          <h1
            className="first-heading text-center text-[4rem] md:text-[6rem] 
           font-bold font-montserrat leading-wider tracking-[0.1em]"
          >
            Greetings!
            <br /> Welcome to my <br />
            Website.
          </h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1}></ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.2}>
          <div className="flex flex-col md:flex-row justify-between flex-wrap px-4">
            
              {/* socials-------- */}

              <div className="flex flex-row gap-5 ml-4 w-full">
                <button
                  className="middle none relative h-10 max-h-[35px] w-10 max-w-[35px] rounded-lg bg-[#2f2f2f] text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-[#7b7554ba] transition-all hover:shadow-lg hover:shadow-[#7b7554] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:scale-105"
                  type="button"
                  data-ripple-light="true"
                  onClick={() =>
                    window.open("https://www.instagram.com/ahwinsunuwar/")
                  }
                >
                  <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <PiInstagramLogoLight size={30} />
                  </span>
                </button>
                <button
                  className="middle none relative h-10 max-h-[35px] w-10 max-w-[35px] rounded-lg bg-[#2f2f2f] text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-[#7b7554ba] transition-all hover:shadow-lg hover:shadow-[#7b7554] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:scale-105"
                  type="button"
                  data-ripple-light="true"
                  onClick={() =>
                    window.open("https://github.com/AshwinSunuwarr2")
                  }
                >
                  <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <PiGithubLogoLight size={30} />
                  </span>
                </button>
                <button
                  className="middle none relative h-10 max-h-[35px] w-10 max-w-[35px] rounded-lg bg-[#2f2f2f] text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-[#7b7554ba] transition-all hover:shadow-lg hover:shadow-[#7b7554] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:scale-105"
                  type="button"
                  data-ripple-light="true"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/ashwin-sunuwar-648769229/"
                    )
                  }
                >
                  <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <PiLinkedinLogo size={30} />
                  </span>
                </button>
                <button
                  className="middle none relative h-10 max-h-[35px] w-10 max-w-[35px] rounded-lg bg-[#2f2f2f] text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-[#7b7554ba] transition-all hover:shadow-lg hover:shadow-[#7b7554] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:scale-105"
                  type="button"
                  data-ripple-light="true"
                  onClick={() =>
                    window.open("mailto:ashwinsunuwarr2@gmail.com")
                  }
                >
                  <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                    <SiGmail size={25} />
                  </span>
                </button>
              </div>
            

            <div className="flex flex-col md:flex-row justify-around items-center w-full m-auto mt-14 md:mt-0 gap-5 md:gap-2">
              <div className="flex flex-col">
                <h1
                  className="text-start text-[2rem] md:text-[4rem] 
           font-bold font-montserrat leading-wider tracking-wider text-[#7b7554] drop-shadow-[8px_8px_5px_#00000093]"
                >
                  Ashwin Sunuwar <br />
                  <span className="text-[3rem]">Computer Engineer</span>
                </h1>
                <p
                  className="text-start text-[1rem] md:text-[2rem] 
           font-medium font-montserrat leading-wider tracking-wider text-[#7b7554] drop-shadow-[8px_8px_5px_#00000093]"
                >
                  From Sindhuli, Nepal <br />
                  Lalitpur, current <br />
                  Computer Engineer
                  <br />
                  <a
                    href="mailto:ashwinsunuwarr2@gmail.com"
                    className="underline z-[999] hover:text-white/50"
                  >
                    ashwinsunuwarr2@gmail.com
                  </a>
                </p>
              </div>

              <div className="relative flex mt-10 ">
                <img
                  src={me}
                  alt="me"
                  className="w-[300px] xl:w-[400px] rounded-full aspect-[1/1] object-cover object-center shadow-[0px_0px_14px_8px_#7b7554] shadow-[#00000039]"
                />
                <div className="absolute w-[300px] xl:w-[400px] top-0 bg-[#0000004c] hover:bg-[#0000001f] transition-all transition-1000 ease-in h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={2} factor={2} speed={0.1}>
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="exp-bg"
            className="relative opacity-[0.2]"
          />
        </ParallaxLayer> */}
        <ParallaxLayer
          offset={2}
          className="flex flex-col md:flex-row justify-center items-center bg-red-400"
        >
          {/* <div className=""> */}
          <div className="">
            <h1
              className="text-[1rem] md:text-[2rem] lg:text-[4rem] 
           font-bold font-montserrat leading-wider tracking-wider text-[#a29a70] drop-shadow-[8px_8px_5px_#00000093] ml-14"
            >
              Experiences
            </h1>
            <h2 className="text">
              Front-end Developer -{" "}
              <span className="text-[#7b7554]">Intern</span>
            </h2>
            <p>@Yoddha Lab Pvt. Ltd.</p>

            <h2>Projects</h2>
            <Link to="https://github.com/AshwinSunuwarr2">@GitHub</Link>
            <ul>
              <li>Criminal Face Recognition System</li>
              <li>Social APP</li>
              <li>FreeL</li>
              <li>NewsBud</li>
              <li>Miscellaneous</li>
            </ul>
          </div>
          <div>
            <h1
              className=" text-start text-[1rem] md:text-[2rem] lg:text-[4rem]  
           font-bold font-montserrat leading-wider tracking-wider text-[#a29a70] drop-shadow-[8px_8px_5px_#00000093] ml-14 "
            >
              Expertise
            </h1>
            <ul className="sm:ml-8 lg:ml-2">
              <li>ReactJs</li>
              <li>Tailwind CSS</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>Django</li>
              <li>MySQL</li>
              <li>Appwrite</li>
            </ul>
          </div>
          {/* </div> */}
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default ParallaxAbout;
