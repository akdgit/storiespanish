import { useState } from 'react';

import './App.css';

import Lectura from './components/Lectura';
import Texto from './components/Texto';
import Ejercicio1 from './components/Ejercicio1';
import CompLectora from './components/CompLectora';


function App() {

    const [count, setCount] = useState(0);


    return (

        <>
            <h1>EJERCITAR LEYENDO</h1>
            <Lectura
                titlec="1.- Escucha atentamente el audio a continuación:"
                audio="costumbre"
            />


            <Texto
                titulo="Por la costumbre y la rutina"

                texto1='Despertó con un sobresalto, miró el reloj: las 09:30 h. y llegaba tarde al trabajo. Se levantó a toda prisa y buscó en el cajón sus viejas gafas, las que solo se ponía para estar por casa. Avanzó a tientas por el pasillo, no comprendía por qué nadie en la casa se había despertado aún. “¡Son las 09:35 y aún siguen durmiendo!”.'

                texto2='Cogió un trozo de pan del día anterior y lo metió en el tostador. Mientras tanto, puso la televisión y se preguntó por qué no estaba el telediario y, en su lugar, había dibujos animados. Desayunó deprisa, pues llegaba muy tarde a trabajar. Sus compañeros seguían sin levantarse, no había sonado ningún despertador y todo estaba demasiado tranquilo. Al salir de casa, aún con la corbata mal puesta y corriendo por las escaleras, recibió el saludo del portero del edificio: ¡Feliz domingo, qué temprano se levanta!'

                texto3='En ese momento comprendió por qué nada era como debía ser. Los domingos no trabajaba.'
            />
            

            <Ejercicio1
                palabras={[

                    {
                        texto: 'Caminó',
                        correcta: false
                    },

                    {
                        texto: 'Deprisa',
                        correcta: true
                    },

                    {
                        texto: 'Atajo',
                        correcta: false
                    },

                    {
                        texto: 'Compañeros',
                        correcta: true
                    },

                    {
                        texto: 'Tranquilo',
                        correcta: true
                    },

                    {
                        texto: 'Masa',
                        correcta: false
                    },

                    {
                        texto: 'Pastilla',
                        correcta: false
                    }

                ]}
            />

            <h2>4.- Compresión Lectora</h2>
            <p className="text-start">
                Lee cuidadosamente las preguntas que se muestran a continuación.
                Selecciona la respuesta que creas correcta, según lo comprendido en la lectura anterior.
            </p>
            <CompLectora
                id="pregunta1"
                preg="1.- ¿Qué buscó en el cajón el personaje principal de la historia?"
                respuesta="A.- Sus viejas gafas de andar por casa."
                opc="✅ ¡CORRECTO!. Las gafas también son llamadas lentes, espejuelos o anteojos."
                respuesta2="B.- Un despertador digital."
                opc2="❌ INCORRECTO. Inténtalo otra vez."
                respuesta3="C.- Nada. Durmió durante todo el día."
                opc3="❌ INCORRECTO. Inténtalo otra vez."
            />
            <CompLectora
                id="pregunta2"
                preg="2.- ¿Cuál fue el desayuno de nuestro personaje?"
                respuesta="A.- Arepa con queso y huevos revueltis."
                opc="❌ INCORRECTO. Inténtalo otra vez."
                respuesta2="B.- No acostumbra a desayunar."
                opc2="❌ INCORRECTO. Inténtalo otra vez."
                respuesta3="C.- Una tostada del día anterior."
                opc3="✅ ¡CORRECTO!  Un desayuno ligero"
            />
             <CompLectora
                id="pregunta3"
                preg="3.- ¿Qué estaban transmitiendo por TV?"
                respuesta="A.- El partido del FC Barcelona."
                opc="❌ INCORRECTO. Inténtalo otra vez."
                respuesta2="B.- Caricaturas en lugar del telediario."
                opc2="✅ ¡CORRECTO!  También podría decirse 'Dibujos animados en vez del noticiero'."
                respuesta3="C.- Una película de accion."
                opc3="❌ INCORRECTO. Inténtalo otra vez."
            />
            <CompLectora
                id="pregunta4"
                preg="4.- ¿Qué le hizo notar a nuestro personaje el guardia de seguridad?"
                respuesta="A.- Que iba muy tarde a trabajar."
                opc="❌ INCORRECTO. Inténtalo otra vez."
                respuesta2="B.- Que se levantó muy temprano."
                opc2="✅ ¡CORRECTO!  Allí se dio cuenta que era domingo y no tenía que ir al trabajo."
                respuesta3="C.- Que estaba muy lluvioso el día."
                opc3="❌ INCORRECTO. Inténtalo otra vez."
            />

            <footer>
                <p> Ing. Blanca Lucía Arteaga - Prof de español. </p>
                <p> Todos los derechos reservados. © </p>
                StorieSoanish - 2026. <br />
            </footer>
            
        </>

    );

}


export default App;
