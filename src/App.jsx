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
import scroll from './assets/scroll.png'
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
        <div>
            He pensado demasiados días en escribirte, las cosas por acá no van bien, todo me recuerda a ti, incluso donde vivo es un eterno recuerdo de ti, debo aprender a soltarte, el sillón, la alfombra, el refrigerador, el baño, la cocina, las plantas, la cama, todo trae tu recuerdo consigo, lloro todas las noches pensando en que aparecerás tocándome el timbre, diciéndome que solo no nos entendimos un rato pero que ya lo haces, que entiendes que te amo, que quiero estar contigo, que entiendes que por amar a mi familia no dejaré de amarte a ti.
            Todos los días solo vienen recuerdos preciosos a tu lado, yo sé que una vez me pediste que dejara de tomar screenshots a nuestras discusiones, pero es lo único que me aterriza y me lleva a piso, que me hace sentir y pensar en porque nos separamos.
            Jamás quise herir tu corazón, y yo sé que tú tampoco el mío, pero a diario no sé cómo curarlo, duele demasiado, intento salir de casa, voy al gym, intento comer bien, pero llega el fin de semana y es el peor terror, te extraño, extraño tu voz en la casa, que me repite constantemente porque fue mala decisión venir a este Depto, extraño tu pelo lindo y que huele muy bien, tu carita por la mañana, y hacerte comidas ricas.
            No entiendo en qué momento nos quedamos así, a veces creo que fue la vez que me empujaste y tiraste todas mis cosas a tu patio (con esto no busco culparte, ambos estuvimos mal) solo que quizás algo cambió en ese momento, en esa discusión grande en el departamento después de eso, o cuando encontraste el aro y pensaste que había alguien más. Nunca hubo nadie más, mi corazón estaba completamente enamorado de ti, todo lo que hacías o dijeras para mí era una perfección, y quizás ahí falle, en endiosar, pero me cuesta, yo quería amarte sin límites, sin barreras, quería mi vida a tu lado, quería que nos casáramos, que viviéramos juntos, que tuviéramos hijos.
            Siempre me quedó dando vueltas y en mente el tema del departamento, fue tan mala idea? Seguiríamos juntos si aún viviera con mis papás?, algún día pensabas en que viviéramos juntos?, me dolió esa vez que dijiste en el metro tren que querías buscar un trabajo y salir de la carrera antes de que eso pasara, poniendo un parche antes de la herida, suponiendo que tarde o temprano discutiríamos y tendrías que irte.
            Quizás en parte era cierto, no dejo de pensar, mirar nuestros chats, ver el calendario, y encontrar momentos en los que no pasáramos más de dos semanas bien, siempre terminábamos, siempre discutíamos, constantemente, no estuve a la altura?, no era lo que esperabas?, no era lo qué querías?, son preguntas que siempre rondan en mi cabeza, por qué nos costó tanto encontrar un equilibrio de paz?, tan mal pololo fui?.
            Dentro de mi, siempre quise rehacer los momentos bonitos en búsqueda de otros nuevos, yendo más a la playa, viajando y descubriendo juntos.
            Hoy decidí ordenar, llevaba muchos días con mucha loza sucia y mucho desorden, no encontré las fuerzas de hacer todo, como cuando venías y quería que todo oliera rico, pero lo intenté, me llevo todo el día y aún hay muchas partes con desorden.
            El viernes de mi cumpleaños no dejaba de pensar en ti, pensaba en que (quizás egoístamente de mi parte) te comerías tu orgullo y aparecerías ahí en la casa de mis papás, igual supongo que solo soñaba despierto.
            En la semana tuve una reunión con mi jefe y me preguntó si pasaba algo, me notaba desganado y desmotivado, y le dije que estaba así por mi titulación, pero era por ti.
            El viernes de la titulación quería mucho que aparecieras ahí de la nada, no entiendo porque pensaba que podía suceder, de los 4 invitados que habían solo fueron mis papás, quería tanto que estuvieras conmigo, ese trabajo de tesis te lo había dedicado, está ahí, ahí dice y quedó grabado para siempre que te lo dedicaba a ti, amor de mi vida.
            Los fines de semana son horribles, no sé cómo dejar de llorar, me cuesta encontrar calma. Solo me queda pensar en que a pesar de todo el amor que teníamos entre nosotros, nuestras peleas siempre pesaron más, de verdad mi amor, que hubiera estado tan feliz de que resultara, de verdad te ame, y te amo, nunca quise tener una relación con 0 peleas porque sé que es imposible, pero si una en la que no tuviéramos tantas que generara problemas para proyectarnos, vernos y amarnos.
            Te amo y te amaré por mucho amorcito bebé.
            Dueles tanto amor mío, por qué me dejaste amarte así?, me siento tan vacío, miserable, no sé cómo sacarme pronto este dolor de encima.
            Hoy soñé contigo, fue raro, estábamos en una plaza de noche, lo malo es que me quedé dormido para la pega.
            Me siento como un tonto, vi un video que teníamos en el pc de la pega, no entiendo porqué, solo me hace daño.
            Es increíble como todas las cosas siempre me vuelven a ti, vi un anillo en una publicidad que estoy seguro que te hubiera gustado mucho.
            Quiero hablar con mi papá, pero no quiero que me vea así de mal, no sé a quién pedirle ayuda o consejos.
            Senti tu olor, odio cuando me pasa porque viene de la nada, no puedo concentrarme bien en el trabajo.
            Hoy hice lentejas, pero hice la carne aparte por si llegas a venir, para que puedas probarlas, siempre me gustó cocinar para ti.
            Me gustan mucho mis plantitas, en especial la que tú me diste, nunca pude hacerla crecer completamente, esta siempre media moribunda y me da pena, me gustaría que estuviera grande y fuerte, la trato bien, la riego correctamente, intento que no le llegue sol directo, la cuidado como dijiste tú, aún está viva pero no crece, está moribunda, de verdad me da pena.
            Todo me lleva siempre a ti, te amo, te extraño, te anhelo, esta decisión fue la correcta?, espero estés siendo un poco más feliz de lo que eras junto a mi.
            Ayer vinieron mis papás a tomar once, los invité y les hice hamburguesas, y mi mamá puso música, dijo que había encontrado un cantante que le gustó ene, era el teddy swims, yo no sabía cómo decirle que por favor lo dejara de lado, que me recordaba a ti.
            Que manera de extrañarte, ni siquiera puedo entrenar tranquilo.
            Te extraño tanto, espero que esto me ayude, siento tanto tu ausencia, a pesar de todos los problemas que teníamos, solo me gustaría volver a tener un momento de paz juntos, viendo alguna serie, cocinándote algo rico, no lo sé.
            Constantemente me llegan anuncios relacionados con el website que te hice para nuestro aniversario, me hubiera gustado que lo hubieras apreciado más, sentí que no te importó, que no te importaba que podía hacer con mis manos, sino que importaba más lo que podía comprarte, eso siempre me dolió, muchas veces te dije que el amor no se compra.
            Me hubiera gustado tanto que me amaras por quién soy y no por quién idealizabas que fuera, que me amaras por esa persona tierna y fácil de querer que decías que hallabas en mi.
            Me extrañaras como yo te extraño? Que te dirán tus amigas? Te habrán presentado a alguien? Ya habrás ido a la disco como tanto querías?.
            Que fue lo que realmente amaste en mi?, por qué nunca pudiste sentir mi amor? Si te amé mucho, te amo tanto, te amé tanto mi amor, quería sacarme el corazón para entregártelo, a ti y solo a ti.
            Quiero arrancar de aquí, me estoy muriendo en vida, se supone que esto sería nuestro nido de amor, que ganas de irme de la ciudad, del país, no soporto esto.
            Mis papás nunca te odiaron, se los pregunté directamente, me dijeron que de alguna u otra manera querían hacerte sentir incluida pero que siempre sentían que no podían, me dijeron que te compraban cosas veganas por lo mismo, que querían siempre tenerte por lo menos algo ahí. Me dijeron que lo que más le dolia fue la vez que íbamos a hacer un pícnic, que vieron como yo el día anterior había dejado todo listo, había picado frutita, hecho sándwiches y había limpiado lo mejor posible la canasta para picnic y que después me dejaras plantado por un enojo. Ni siquiera recuerdo muy bien porque te enojaste esa vez.
            Fui tan mal pololo?.
            No puedo dormir, odio las noches y los fines de semana, no puedo hacer algo para dejar de pensarte solo un momento, me rompe el corazón, y la mente minuto a minuto.
            No entiendo cómo pude nunca perder tu cole pero si la pulsera que me diste, la extraño, me gustaba mucho, era muy linda.
            Quiero volver a esos días en viña, volviendo después del McDonald’s, eligiendo que íbamos a tomar en la nochecita.
            A veces pienso que lo nuestro se arruinó por cosas estúpidas y sin sentido, como que nuestra relación se fue en declive desde que puse el escritorio en el living jajaja, lo pondré otra vez en la pieza, quizás eso era, ya ni siquiera sé qué estoy pensando, todos los días te lloro un poco.
            Hoy quería no escribirte, hacer esto me mata de apoco, pero en el intermodal estaba buscando un joystick porque quería jugar un juego (como nunca), y en la fila para la micro, la 201c había una tipa pelirroja solo la vi de espalda, a primera vista me recordó mucho a ti (obvio con los alcances correspondientes, tú eres preciosa), me sentí mal, te extraño demasiado, y como siempre te repetí, todo me trae y lleva a ti.
            Hoy estaríamos cumpliendo un mes después del año, un año y un mes, no puedo sacarte de mi cabeza, hace un mes tuvimos una salida tan bonita, te bese en la calle, sabía que siempre te dio vergüenza que lo hiciera, pero tenía tantas ganas de besarte.
            Te gusté físicamente?, si hubiera bajado de peso, seguirías conmigo?.
            Quisiste llenar algún vacio conmigo? Valoraste las cosas que hice o di por ti? O siempre pensarás que era solo egoísmo de mi parte? Que lo hacía pensando en mí?
            Tan mal pololo fui? De verdad? O fue la ira y pena del momento?
            No entiendo como me cuesta tanto, los días son pesados.
            Tenía tantas ganas de ir a la noche de museos contigo, era un panorama tan bonito, sé que también estabas emocionada.
            Sé que si vuelves a tocar mi puerta te abriría feliz, contento, emocionado, pero sé que eso esta mal, nos hacemos tanto daño mi amor, no dejo de pensar en que nunca pudimos estar más de un mes sin separarnos, sin pelear, sin discutir, y me duele el alma, me duele tanto, me dueles tanto mi amor.
            Vida mía, llevo tantas noches sin dormir, solo me gustaría saber, de verdad me amaste? Cuánto me amaste? Eran todos los granitos de arena de las dunas?, me gustaría dejar de llorarte por lo menos una noche, mi cuerpo no puede más.
            Que hago amor?, que es lo correcto?.
            Por qué siempre me hablabas de tu ex? Con tu próxima pareja, le hablaras de él también? O de mi?, fui malo amor?.
            Por qué no pudiste quedarte con un poquito de ese amor que me tenías? Cuando te iba a buscar a tu práctica, cuando me hiciste ese corazón lindo en el piso.
            Siempre te extraño, me parte el corazón entrar a la galería y ver tu carita ahí, solo me salva de decir algo el hecho de ver que también ahí están todas nuestras discusiones.
            Entre más pasa el tiempo más dudas tengo, espero este sentimiento se vaya pronto.
            Me amaste mi amor?, realmente tú crees que me amaste?.
            Soñé contigo, me mandabas videos por correo bailando con un tipo, por que hacías eso?.
            Siento que el cuerpo no me da, el celular me muestra fotos tuyas a cada rato, me duele demasiado el corazón.
            Hace poco me acordé que hasta tu rut me aprendí jajajaj, mi mamá me mostró una foto que le había mandado tiempo atrás de cuando me comí dos marraquetas en tu departamento. Te extraño.
            Te espero, por qué te espero?, si tú querías que yo tomara iniciativa, pero no puedo ni siento que pueda hacerlo, no es que no quiera, no puedo, pensar en cada pelea y discusión nuestra, me duele demasiado, me evita acercarme, espero que estés mejor que los últimos meses conmigo, perdóname mi vida, mi niña linda. Amor por qué nunca te interesó saber de mi? Cuál era mi comida favorita? Cuál era la banda que más me gustaba?, qué juego me gustaba jugar?, no lo sé, que pensaba hacer en un futuro?, por qué siento que nunca te interesó saber sobre mi?. A veces siento que mi vida perdió el rumbo. Me siento en un hoyo, quizás de alguna forma necesitaba esto, debo hacerme más fuerte. Quiero perderme en la montaña o el mar, no saber de nada más, de nada ni de nadie.
            Hoy con mis papás fuimos a la playa, me acordé de la vez que estábamos juntos en Valparaíso, que pasamos a una playa y cruzamos un paso nivel, te veías muy linda, me gustaba ese outfit. Espero que mi llegada a tu vida te haya servido en algo, haber aprendido algo, haber sentido algo.
            Me gustaría no haberte amado tanto.
            Te necesito tanto, espero que tú no a mi, esto duele mucho.
            Me hubiera gustado que hubiéramos pintado las tazas blancas, pero al mismo tiempo sé que me daría más pena aún, intento ni siquiera mirarlas, me da mucha tristeza.
            Por qué siempre te esforzabas en compararme?.
            Quiero aprender a vivir con el amor que te tengo, pero sin ti.
            Me hubiera gustado que hubieras primero superado a tu ex, que esas “heridas” hubieran estado sanas, me dañaste más de lo que creíste, más de lo que demostré.
            Ayer vi como unos compañeros de la u se proponían matrimonio, fue lindo, me hubiera gustado habernos visto ahí también.
            He vuelto a pensar por segundo lunes en ir a buscarte con mariachis, con flores, con todo y decirte que seas el amor de mi vida, sé que te gustaría, pero sé que no es correcto, cuánto sería el tiempo que pase desde eso para que me digas nuevamente que no me quieres ver más en tu vida?.
            Me gustaría estar en la feria contigo, era tonto y simple, pero algo lo hacía especial, me gustaba compartir cosas así contigo.
            Puse la pieza como estaba antes, cuando nos quedábamos hasta tarde viendo bridgerton, pasara algo mágico que te hará volver con eso?, a veces soy tan ridículo.
            Hoy vi como conociste a alguien más en tiktok, yo sé que cuando sigues alguien ahí es porque quieres compartir con el, no sigues a nadie mas, no seguías a nadie más, por qué tan rápido amor?, por qué?, dijiste que me amabas amor.
        </div>
    )
    // return (
    //     <>
    //         <Particles
    //             id="tsparticles"
    //             particlesLoaded={particlesLoaded}
    //             options={options}
    //         />
    //         <ScrollContainer>
    //             <ScrollPage page={0}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
    //                     Happy year together my love!
    //                     <div className='emojis'>
    //                         🐕❤️🐈‍⬛
    //                     </div>
    //                     <div className={'scroll'}>
    //                     <img src={scroll } alt={'scroll'} className={'scroll'}/>
    //                     </div>
    //                 </Animator>
    //             </ScrollPage>
    //             <ScrollPage page={1}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     Un año juntos mi amor, que rápido pasa el tiempo, siempre a tu lado, te amo mucho mi amor!
    //                 </Animator>
    //             </ScrollPage>
    //             <ScrollPage page={2}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     <img
    //                         src={besoVina} alt={'foto1'} className='foto-borde'/>
    //                     Feliz aniversario mi amor, te amo mucho!
    //                 </Animator>
    //             </ScrollPage>
    //
    //             <ScrollPage page={4}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     <div className={'fotos-bebe'}>
    //                         <img
    //                             src={diegoChiquito} className='foto-borde-redondo' alt="logo"/>
    //                         <img
    //                             src={coteChiquita} className='foto-borde-redondo' alt="logo"/>
    //                     </div>
    //                     Nos conocimos de chiquitos, muy chiquitos, y nunca nadie pensó que nos volveríamos a encontrar.
    //                 </Animator>
    //             </ScrollPage>
    //             <ScrollPage page={5}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     <img
    //                         src={fotoPescado} className="foto-borde-redondo" alt="logo"/>
    //                     Ni yo pensé que esa salida y el helado de pescadito quedaría en mi memoria para siempre.
    //                 </Animator>
    //             </ScrollPage>
    //             <ScrollPage page={6}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     <img
    //                         src={fotoFlores} className="foto-borde-redondo" alt="logo"/>
    //                     Como yo nunca imaginé que me regalarías flores.
    //                 </Animator>
    //             </ScrollPage>
    //             <ScrollPage page={7}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     <img
    //                         src={fotoCumple} className="foto-borde-redondo" alt="logo"/>
    //                     Ni pensé que me celebraríamos mi cumple juntos.
    //                 </Animator>
    //             </ScrollPage> <ScrollPage page={8}>
    //             <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                 <img
    //                     src={pololeo} className="foto-borde-redondo" alt="logo"/>
    //                 No recordaba los nervios de la vez que te pedí pololeo.
    //             </Animator>
    //         </ScrollPage> <ScrollPage page={9}>
    //             <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                 <img
    //                     src={playita1} className="foto-borde-redondo" alt="logo"/>
    //                 Pero siempre recuerdo lo mucho que disfruté la playa a tu lado, y que siempre la playa en mi mente
    //                 eres tú.
    //             </Animator>
    //         </ScrollPage> <ScrollPage page={10}>
    //             <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                 <img
    //                     src={playita2} className="foto-borde-redondo" alt="logo"/>
    //                 <img
    //                     src={playita3} className="foto-borde-redondo" alt="logo"/>
    //                 Y todas las siguientes veces
    //             </Animator>
    //         </ScrollPage> <ScrollPage page={11}>
    //             <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                 <img
    //                     src={salida1} className="foto-borde-redondo" alt="logo"/>
    //                 <img
    //                     src={salida2} className={'foto-borde-redondo'} alt="logo"/>
    //                 <img
    //                     src={salida3}className={'foto-borde-redondo'} alt="logo"/>
    //                 Así mismo amando todas nuestras salidas
    //             </Animator>
    //         </ScrollPage> <ScrollPage page={12}>
    //             <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                 <img
    //                     src={navidad} className="foto-borde-redondo" alt="logo"/>
    //                 <img
    //                     src={postre} className={'foto-borde-redondo'} alt={'logo'}/>
    //                 Pasando navidad junto a ti, que anhelo que sean muchas más
    //             </Animator>
    //         </ScrollPage> <ScrollPage page={13}>
    //             <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                 <img
    //                     src={recreacion} className={'foto-borde-redondo'} alt="logo"/>
    //                 Recreando momentos juntos
    //             </Animator>
    //         </ScrollPage> <ScrollPage page={14}>
    //             <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                 <img
    //                     src={vacaciones} className="foto-borde-redondo" alt="logo"/>
    //                 Y vacaciones que quiero que sean eternas, repetirlas mil veces más!
    //             </Animator>
    //         </ScrollPage> <ScrollPage page={15}>
    //             <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                 <img src={tuto} className="foto-borde-redondo" alt="logo"/>
    //
    //                      En tus brazos (aunque te cargue) me siento como un niño.
    //             </Animator>
    //         </ScrollPage> <ScrollPage page={16}>
    //             <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                <img src={modelo1} className="foto-borde-redondo" alt="logo"/>
    //                <img src={modelo2} className='foto-borde-redondo' alt={'logo'}/>
    //                 Y como siempre te digo, eres la mujer más hermosa del mundo, eres la modelo perfecta para mi cámara.
    //             </Animator>
    //         </ScrollPage> <ScrollPage page={17}>
    //         <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //             Sé que han sido días difíciles, definitivamente los más difíciles que nos ha tocado vivir.
    //             Pero tengo la certeza de que juntos, con amor, paciencia y perseverancia, saldremos adelante.
    //               Te amo con todo mi corazón, todo mi corazón, todo mi corazón es solo tuyo, y nada ni nadie podrá cambiar eso, ni siquiera el tiempo. ❤️
    //         </Animator>
    //         </ScrollPage>
    //             <ScrollPage page={18}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     <div className={'video'}>
    //                         <iframe width="380" height="215"
    //                                 src="https://www.youtube.com/embed/d5gf9dXbPi0?si=vqudVLiOt9TP_AFb"
    //                                 title="YouTube video player" frameBorder="0"
    //                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //                                 referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    //                     </div>
    //                 </Animator>
    //             </ScrollPage>
    //             <ScrollPage page={18}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     Te amo
    //                 </Animator>
    //             </ScrollPage>
    //             <ScrollPage page={18}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     Te amo
    //                 </Animator>
    //             </ScrollPage>
    //             <ScrollPage page={18}>
    //             <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     Te amo
    //                 </Animator>
    //             </ScrollPage>
    //             <ScrollPage page={18}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     Te amo
    //                 </Animator>
    //             </ScrollPage>
    //             <ScrollPage page={18}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     Te amo
    //                 </Animator>
    //             </ScrollPage>
    //             <ScrollPage page={18}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     Te amo
    //                 </Animator>
    //             </ScrollPage>
    //             <ScrollPage page={18}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     Te amo
    //                 </Animator>
    //             </ScrollPage>
    //             <ScrollPage page={18}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     Te amo
    //                 </Animator>
    //             </ScrollPage>
    //             <ScrollPage page={18}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     Te amo
    //                 </Animator>
    //             </ScrollPage>
    //             <ScrollPage page={18}>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     Te amo
    //                 </Animator>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     Te amo
    //                 </Animator>
    //                 <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 200))}>
    //                     Te amo
    //                 </Animator>
    //             </ScrollPage>
    //
    //         </ScrollContainer>
    //     </>
    // )
}

export default App
