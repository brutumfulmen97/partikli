import "./App.css";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

function App() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        setTimeout(() => {
            container.pause();
        }, 2000);
    }, []);

    const configs = {
        particles: {
            stroke: {
                width: 5,
                color: {
                    value: [
                        "#5bc0eb",
                        "#fde74c",
                        "#9bc53d",
                        "#e55934",
                        "#fa7921",
                        "#2FF3E0",
                        "#F8D210",
                        "#FA26A0",
                        "#F51720",
                    ],
                },
            },
            shape: {
                type: "square",
                options: {
                    square: {
                        fill: false,
                    },
                },
            },
            rotate: {
                value: 0,
                direction: "counter-clockwise",
                animation: {
                    enable: true,
                    speed: 2,
                    sync: true,
                },
            },
            size: {
                value: { min: 1, max: 500 },
                animation: {
                    enable: true,
                    startValue: "min",
                    speed: 60,
                    sync: true,
                    destroy: "max",
                },
            },
        },
        background: {
            color: "#000",
        },
        emitters: {
            direction: "top",
            position: {
                y: 50,
                x: 50,
            },
            rate: {
                delay: 1,
                quantity: 1,
            },
        },
    };

    return (
        <>
            <Particles
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
            />
        </>
    );
}

export default App;
