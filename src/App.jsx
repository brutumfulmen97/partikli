import "./App.css";
import Particle from "./Particle";
// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

function App() {
    // const particlesInit = useCallback(async (engine) => {
    //     console.log(engine);

    //     // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //     // starting from v2 you can add only the features you need reducing the bundle size
    //     await loadFull(engine);
    //     await loadSlim(engine);
    // }, []);

    // const particlesLoaded = useCallback(async (container) => {
    //     setTimeout(() => {
    //         container.pause();
    //     }, 4000);
    // }, []);

    return (
        <>
            {/* <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                // options={configs}
                options={{
                    background: {
                        color: {
                            value: "#fff",
                        },
                    },
                    emitters: {
                        direction: "top-right",
                        position: {
                            y: 80,
                            x: 30,
                        },
                        rate: {
                            delay: 0.3,
                            quantity: 5,
                        },
                    },
                    fpsLimit: 120,
                    particles: {
                        move: {
                            direction: "top-right",
                            enable: true,
                            outModes: {
                                default: "none",
                            },
                            random: true,
                            speed: 12,
                            straight: false,
                        },
                        shape: {
                            images: [
                                {
                                    src: "/trougao.png",
                                    width: 500,
                                    height: 500,
                                },
                                {
                                    src: "/krug.png",
                                    width: 500,
                                    height: 500,
                                },
                            ],
                            type: "image",
                        },
                        size: {
                            value: { min: 10, max: 50 },
                        },
                        rotate: {
                            path: true,
                        },
                    },

                    detectRetina: true,
                }}
            /> */}
            <div className="container">
                <img src="/osoba.png" alt="osoba" className="osoba" />
                <div className="particles">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <Particle delay={i} duration={(i + 1) * 250} key={i} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
