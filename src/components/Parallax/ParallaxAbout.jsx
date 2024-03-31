import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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
        <ParallaxLayer offset={0} className="bg-[#7b7554]"></ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0.5}>
          <h1
            className="text-center text-[4rem] md:text-[8rem] 
           font-bold font-montserrat leading-wider tracking-wider text-[#89825e] drop-shadow-[8px_8px_5px_#00000052] inset-1"
          >
            Greetings! Lorem Ipsum daily
          </h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1}></ParallaxLayer>
        <ParallaxLayer offset={1.2}>
          <div className="flex flex-col-reverse md:flex-row justify-between">
            <div className="flex flex-grow">
              {/* socials-------- */}

              <div className="flex flex-row gap-5 ml-4">
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

              <ParallaxLayer offset={0.6} speed={0.5}>
                <div className="flex flex-col items-start justify-center sm:backdrop-blur-sm lg:backdrop-blur-0">
                  <h1
                    className="text-start text-[1rem] md:text-[4rem] 
           font-bold font-montserrat leading-wider tracking-wider text-[#7b7554] drop-shadow-[8px_8px_5px_#00000093] ml-14"
                  >
                    Er. Ashwin Sunuwar
                  </h1>
                  <p
                    className="text-start text-[1rem] md:text-[2rem] 
           font-medium font-montserrat leading-wider tracking-wider text-[#7b7554] drop-shadow-[8px_8px_5px_#00000093] ml-14"
                  >
                    From Sindhuli, Nepal <br />
                    Lalitpur, current <br />
                    Computer Engineer
                    <br />
                    Email -&nbsp;
                    <Link
                      to="mailto:ashwinsunuwarr2@gmail.com"
                      className="underline"
                    >
                      ashwinsunuwarr2@gmail.com
                    </Link>
                  </p>
                </div>
              </ParallaxLayer>
            </div>

            <div className="relative lg:mr-10 z-[-1] ">
              <img
                src={me}
                alt="me"
                width={400}
                className="rounded-full aspect-[1/1] object-cover shadow-[0px_0px_14px_8px_#7b7554] shadow-[#00000039]"
              />
              <div className="absolute top-0 left-0 bg-[#0000003e] w-full h-full rounded-full "></div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} factor={2} speed={0.2}>
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="exp-bg" className="relative opacity-[0.2]"/>
        
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} >
        <h1
                    className="text-start text-[1rem] md:text-[4rem] 
           font-bold font-montserrat leading-wider tracking-wider text-[#a29a70] drop-shadow-[8px_8px_5px_#00000093] ml-14"
                  >
                    Experiences
                  </h1>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default ParallaxAbout;
