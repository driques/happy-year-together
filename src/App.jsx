import {useEffect, useMemo, useState} from 'react'
import besoVina from './assets/img.png'
import diegoChiquito from './assets/img_1.png'
import coteChiquita from './assets/img_2.png'
import fotoPescado from './assets/img_3.png'
import fotoFlores from './assets/img_4.png'
import fotoCumple from './assets/img_5.png'
import pololeo from './assets/img_6.png'
import playita1 from './assets/img_7.png'
import playita2 from './assets/img_8.png'
import playita3 from './assets/img_9.png'
import salida1 from './assets/img_10.png'
import salida2 from './assets/img_11.png'
import salida3 from './assets/img_12.png'
import navidad from './assets/img_13.png'
import postre from './assets/img_14.png'
import recreacion from './assets/img_15.png'
import vacaciones from './assets/img_16.png'
import tuto from './assets/img_17.png'
import modelo1 from './assets/img_18.png'
import modelo2  from './assets/img_19.png'
import './App.css'
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    MoveIn,
    MoveOut,
    Sticky,
} from "react-scroll-motion";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";


function App() {
    const [setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
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
                    value: "#409137",
                },
            },
            fpsLimit: 60,
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
                    value: "#ffffff",
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
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "star"
                },
                size: {
                    value: {min: 1, max: 5},
                },
            },
        }),
        [],
    );

    return (
        <>
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        Happy year together my love!
                        <div className='emojis'>
                            🐕❤️🐈‍⬛
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Un año juntos mi amor, que rápido pasa el tiempo, siempre a tu lado, te amo mucho mi amor!
                    </Animator>
                </ScrollPage>
                <ScrollPage page={2}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        <img
                            src={besoVina} alt={'foto1'} className='foto-borde'/>
                        Feliz aniversario mi amor, te amo mucho!
                    </Animator>
                </ScrollPage>

                <ScrollPage page={4}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        <div className={'fotos-bebe'}>
                            <img
                                src={diegoChiquito} className='foto-borde-redondo' alt="logo"/>
                            <img
                                src={coteChiquita} className='foto-borde-redondo' alt="logo"/>
                        </div>
                        Nos conocimos de chiquitos, muy chiquitos, y nunca nadie pensó que nos volveríamos a encontrar.
                    </Animator>
                </ScrollPage>
                <ScrollPage page={5}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        <img
                            src={fotoPescado} className="foto-borde-redondo" alt="logo"/>
                        Ni yo pensé que esa salida y el helado de pescadito quedaría en mi memoria para siempre.
                    </Animator>
                </ScrollPage>
                <ScrollPage page={6}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        <img
                            src={fotoFlores} className="foto-borde-redondo" alt="logo"/>
                        Como yo nunca imaginé que me regalarías flores.
                    </Animator>
                </ScrollPage>
                <ScrollPage page={7}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        <img
                            src={fotoCumple} className="foto-borde-redondo" alt="logo"/>
                        Ni pensé que me celebraríamos mi cumple juntos.
                    </Animator>
                </ScrollPage> <ScrollPage page={8}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img
                        src={pololeo} className="foto-borde-redondo" alt="logo"/>
                    No recordaba los nervios de la vez que te pedí pololeo.
                </Animator>
            </ScrollPage> <ScrollPage page={9}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img
                        src={playita1} className="foto-borde-redondo" alt="logo"/>
                    Pero siempre recuerdo lo mucho que disfruté la playa a tu lado, y que siempre la playa en mi mente
                    eres tú.
                </Animator>
            </ScrollPage> <ScrollPage page={10}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img
                        src={playita2} className="foto-borde-redondo" alt="logo"/>
                    <img
                        src={playita3} className="foto-borde-redondo" alt="logo"/>
                    Y todas las siguientes veces
                </Animator>
            </ScrollPage> <ScrollPage page={11}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img
                        src={salida1} className="foto-borde-redondo" alt="logo"/>
                    <img
                        src={salida2} className={'foto-borde-redondo'} alt="logo"/>
                    <img
                        src={salida3}className={'foto-borde-redondo'} alt="logo"/>
                    Así mismo amando todas nuestras salidas
                </Animator>
            </ScrollPage> <ScrollPage page={12}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img
                        src={navidad} className="foto-borde-redondo" alt="logo"/>
                    <img
                        src={postre} className={'foto-borde-redondo'} alt={'logo'}/>
                    Pasando navidad junto a ti, que anhelo que sean muchas más
                </Animator>
            </ScrollPage> <ScrollPage page={13}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img
                        src={recreacion} className={'foto-borde-redondo'} alt="logo"/>
                    Recreando momentos juntos
                </Animator>
            </ScrollPage> <ScrollPage page={14}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img
                        src={vacaciones} className="foto-borde-redondo" alt="logo"/>
                    Y vacaciones que quiero que sean eternas, repetirlas mil veces más!
                </Animator>
            </ScrollPage> <ScrollPage page={15}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                    <img src={tuto} className="foto-borde-redondo" alt="logo"/>

                         En tus brazos (aunque te cargue) me siento como un niño.
                </Animator>
            </ScrollPage> <ScrollPage page={16}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                   <img src={modelo1} className="foto-borde-redondo" alt="logo"/>
                   <img src={modelo2} className='foto-borde-redondo' alt={'logo'}/>
                    Y como siempre te digo, eres la mujer más hermosa del mundo, eres la modelo perfecta para mi cámara.
                </Animator>
            </ScrollPage> <ScrollPage page={17}>
            <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                Sé que han sido días difíciles, definitivamente los más difíciles que nos ha tocado vivir.
                Pero tengo la certeza de que juntos, con amor, paciencia y perseverancia, saldremos adelante.
                  Te amo con todo mi corazón, todo mi corazón, todo mi corazón es solo tuyo, y nada ni nadie podrá cambiar eso, ni siquiera el tiempo. ❤️
            </Animator>
            </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        <div className={'video'}>
                            <iframe width="380" height="215"
                                    src="https://www.youtube.com/embed/d5gf9dXbPi0?si=vqudVLiOt9TP_AFb"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>
                <ScrollPage page={18}>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
                        Te amo
                    </Animator>
                </ScrollPage>

            </ScrollContainer>
        </>
    )
}

export default App
