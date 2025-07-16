import React, { useCallback } from "react";
// Note: You may need to install these packages if you haven't already
// npm install @tsparticles/react @tsparticles/slim
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Using slim for a smaller bundle size

const SpidrEffect = () => {
  // Debugging log to confirm rendering
  console.log("SpidrEffect is rendering");

  // useCallback ensures this function is not recreated on every render
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles initialized"); // Debugging log
    // This loads the tsparticles package bundle
    await loadSlim(engine);
  }, []);

  return (
    <div
      className="particles-background"
      style={{ width: "100%", height: "100%" }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "connect",
                onHover: () => console.log("Hover event triggered"),
              },
              resize: true,
            },
            modes: {
              connect: {
                distance: 120,
                links: { opacity: 0.5 },
                radius: 150,
              },
            },
          },
          particles: {
            color: { value: "#333333" },
            links: {
              color: "#333333",
              distance: 120,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: "bounce",
            },
            number: {
              value: 60,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default SpidrEffect;