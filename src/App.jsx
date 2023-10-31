import "./App.css";
import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

function App() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        setTimeout(() => {
            container.pause();
        }, 2000);
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#fff",
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
                            speed: 6,
                            straight: true,
                        },
                        number: {
                            value: 50,
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
                            value: { min: 10, max: 30 },
                        },
                        rotate: {
                            path: true,
                        },
                    },

                    detectRetina: true,
                }}
            />
        </>
    );
}

export default App;
