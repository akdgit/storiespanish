import React from 'react';
import './styles/CompLectora.css';

const CompLectora = (props) => {

    const idResp1 = `${props.id}-1`;
    const idResp2 = `${props.id}-2`;
    const idResp3 = `${props.id}-3`;

    return (

        <div className="accordion" id={props.id}>
            
            <p className="preg">{props.preg}</p>

            {/* RESPUESTA 1 */}
            <div className="accordion-item ejer4">

                <h3 className="accordion-header">

                    <button
                        className="acor accordion-button collapsed respuesta"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${idResp1}`}
                        aria-expanded="false"
                        aria-controls={idResp1}
                    >
                        {props.respuesta}
                    </button>

                </h3>

                <div
                    id={idResp1}
                    className="accordion-collapse collapse"
                    data-bs-parent={`#${props.id}`}
                >
                    <div className="cuento accordion-body">
                        <p className="opc text-start">
                            {props.opc}
                        </p>
                    </div>
                </div>

            </div>


            {/* RESPUESTA 2 */}
            <div className="accordion-item ejer4">

                <h3 className="accordion-header">

                    <button
                        className="acor accordion-button collapsed respuesta"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${idResp2}`}
                        aria-expanded="false"
                        aria-controls={idResp2}
                    >
                        {props.respuesta2}
                    </button>

                </h3>

                <div
                    id={idResp2}
                    className="accordion-collapse collapse"
                    data-bs-parent={`#${props.id}`}
                >
                    <div className="cuento accordion-body">
                        <p className="opc text-start">
                            {props.opc2}
                        </p>
                    </div>
                </div>

            </div>

            <div className="accordion-item ejer4">

                <h3 className="accordion-header">

                    <button
                        className="acor accordion-button collapsed respuesta"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${idResp3}`}
                        aria-expanded="false"
                        aria-controls={idResp3}
                    >
                        {props.respuesta3}
                    </button>

                </h3>

                <div
                    id={idResp3}
                    className="accordion-collapse collapse"
                    data-bs-parent={`#${props.id}`}
                >
                    <div className="cuento accordion-body">
                        <p className="opc text-start">
                            {props.opc3}
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default CompLectora;