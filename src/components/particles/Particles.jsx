import React, { useEffect } from 'react'
import Particles from "@tsparticles/react";

const Reactparticles = () => {

    
  useEffect(() => {
    const initializeParticles = async () => {
        const { loadSlim } = await import("@tsparticles/slim");
        const {initParticlesEngine} = await import("@tsparticles/react");
      await initParticlesEngine(async (engine) => await loadSlim(engine));
    };
    initializeParticles();
  }, []);
  return (
    <>
        <Particles
        className="z-[-1]"
        id="tsparticles"
        // particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#F1EBD0",
            },
          },
          fpsLimit: 90,
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
              value: "#F8371D",
            },
            links: {
              color: "#F8371D",
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
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
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
    </>
  )
}

export default Reactparticles