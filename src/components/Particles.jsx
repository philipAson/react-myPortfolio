import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadAll } from "@tsparticles/all";

const ParticlesComponent = (props) => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadAll(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#f4f4f4",
                },
            },
            fpsLimit: 60,
            interactivity: {
                detect_on: "canvas",
                events: {
                    onDiv: [
                        {
                            enable: true,
                            selectors: ".contact-link",
                            mode: "bounce",
                            type: "rectangle",
                        },
                        {
                            enable: true,
                            selectors: ".dot",
                            mode: "bounce",
                            type: "rectangle",
                        },
                    ],
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    modes: {
                        push: {
                            distance: 200,
                            duration: 15,
                        },
                        grab: {
                            distance: 150,
                        },
                        repulse: {
                            distance: 250,
                            duration: 1.2,
                        },
                        bounce: {
                          distance: 250,
                          duration: 1.2,
                      },
                    },
                },
            },
            particles: {
                color: {
                    value: "#6B728E",
                },
                links: {
                    color: "#A0A4B8",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 450,
                },
                opacity: {
                    value: 1.0,
                },
                shape: {
                    type: "square",
                    options: {
                        sides: 5,
                    },
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
