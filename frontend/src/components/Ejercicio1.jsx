import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './styles/Ejercicio1.css';
import Lectura from './Lectura';

const Ejercicio1 = ({ palabras }) => {

    const [lista, setLista] = useState([]);
    const [respuestas, setRespuestas] = useState([]);
    const [arrastrando, setArrastrando] = useState(false);

    /*
     * Comprobamos que el ejercicio tenga exactamente
     * 3 palabras correctas.
     */
    const cantidadCorrectas = palabras.filter(
        palabra => palabra.correcta
    ).length;

    useEffect(() => {

        if (cantidadCorrectas !== 3) {

            console.error(
                `Ejercicio1 debe tener exactamente 3 palabras correctas. Actualmente tiene ${cantidadCorrectas}.`
            );

            return;
        }

        /*
         * Creamos una copia del array original para no modificar
         * el array que recibimos mediante props.
         */
        const palabrasMezcladas = [...palabras];

        /*
         * Mezclamos las palabras aleatoriamente.
         */
        palabrasMezcladas.sort(() => Math.random() - 0.5);

        setLista(palabrasMezcladas);

        /*
         * Cada vez que cambia el ejercicio,
         * comenzamos sin respuestas.
         */
        setRespuestas([]);

    }, [palabras, cantidadCorrectas]);


    /*
     * Comienza el arrastre.
     */
    const handleDragStart = (e, palabra) => {

        e.dataTransfer.setData(
            'palabra',
            JSON.stringify(palabra)
        );

        setArrastrando(true);
    };


    /*
     * Termina el arrastre.
     */
    const handleDragEnd = () => {

        setArrastrando(false);

    };


    /*
     * Permite que el elemento pueda ser soltado
     * dentro del área de respuesta.
     */
    const handleDragOver = (e) => {

        e.preventDefault();

    };


    /*
     * Cuando el usuario suelta una palabra.
     */
    const handleDrop = (e) => {

        e.preventDefault();

        setArrastrando(false);

        const datos = e.dataTransfer.getData('palabra');

        if (!datos) {
            return;
        }

        const palabra = JSON.parse(datos);


        /*
         * Comprobamos si la palabra ya fue seleccionada.
         */
        const yaSeleccionada = respuestas.some(
            respuesta => respuesta.texto === palabra.texto
        );

        if (yaSeleccionada) {

            Swal.fire({
                icon: 'warning',
                title: 'Ya seleccionaste esta palabra',
                text: 'Escoge una palabra diferente.',
                confirmButtonText: 'Continuar'
            });

            return;
        }


        /*
         * Comprobamos si la palabra es correcta.
         */
        if (!palabra.correcta) {

            Swal.fire({
                icon: 'error',
                title: 'Inténtalo de nuevo',
                text: `"${palabra.texto}" no aparece en el fragmento.`,
                confirmButtonText: 'Continuar'
            });

            return;
        }


        /*
         * La palabra es correcta.
         * La agregamos a las respuestas.
         */
        const nuevasRespuestas = [
            ...respuestas,
            palabra
        ];

        setRespuestas(nuevasRespuestas);


        /*
         * Si ya tenemos las tres palabras correctas,
         * el ejercicio termina.
         */
        if (nuevasRespuestas.length === 3) {

            Swal.fire({
                icon: 'success',
                title: '¡Excelente!',
                text: 'Has seleccionado las tres palabras correctas.',
                confirmButtonText: 'Continuar'
            });

        }

    };


    /*
     * Si el ejercicio está mal configurado,
     * mostramos un mensaje en lugar del ejercicio.
     */
    if (cantidadCorrectas !== 3) {

        return (
            <div className="container ejercicio-error">

                <h2>Error en el ejercicio</h2>

                <p>
                    Este ejercicio debe tener exactamente
                    3 palabras correctas.
                </p>

                <p>
                    Actualmente tiene: {cantidadCorrectas}
                </p>

            </div>
        );

    }

    const limpiarRespuestas = () => {
    setRespuestas([]);
};


    return (

        <div className="container ejercicio">

            <h2 className="text-center">

                3.- Ejercicio de escucha 

            </h2>


            <p className="text-center instrucciones">

                Escucha el fragmento de la historia y luego
                selecciona de la lista las tres palabras
                que se mencionan en el audio.

            </p>

            <Lectura
              audio="costumbre-fragmento"
            />


            <div className="row">


                {/* ============================
                    LISTA DE PALABRAS
                ============================ */}

                <div className="col-lg-6 col-sm-12 lista">

                    <h3>Palabras</h3>

                    <ul>

                        {lista.map((palabra, index) => (

                            <li
                                key={`${palabra.texto}-${index}`}
                                draggable
                                onDragStart={(e) =>
                                    handleDragStart(e, palabra)
                                }
                                onDragEnd={handleDragEnd}
                            >
                                {palabra.texto}
                            </li>

                        ))}

                    </ul>

                </div>


                {/* ============================
                    ÁREA DE RESPUESTA
                ============================ */}

                <div className="col-lg-6 col-sm-12 respuesta">

                    <h3>Respuesta</h3>

                    <div
                        className={`zona-drop ${
                            arrastrando ? 'arrastrando' : ''
                        }`}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >

                        {respuestas.length === 0 && (

                            <p className="mensaje-drop">
                                Arrastra aquí las tres palabras
                            </p>

                        )}


                        {respuestas.map((palabra, index) => (

                            <div
                                key={`${palabra.texto}-${index}`}
                                className="palabra-respuesta"
                            >
                                {palabra.texto}
                            </div>

                        ))}

                    </div>


                    <p className="contador">

                        {respuestas.length} / 3

                    </p>

                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={limpiarRespuestas}
                    >
                        Limpiar respuestas
                    </button>

                </div>

            </div>

        </div>

    );

};

export default Ejercicio1;

