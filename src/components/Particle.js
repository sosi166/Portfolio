import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "#022E35",
                        },
                    },
                    particles: {
                        color: {
                            value: "#fff",
                        },
                        
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: "out",
                            random: false,
                            speed: 0.5,

                        },
                        number: {
                            density: {
                                area: 1000,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "star",
                        },
                        size: {
                            value: { min: 1, max: 4 },
                        },
                    },
                    
                }} />
        </div>
    )
}
export default Particle;