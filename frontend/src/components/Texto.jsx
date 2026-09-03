import React from 'react';
import { useState } from 'react';
import './styles/Texto.css';

const Texto = (props) => {
    
    return (
        <div className="accordion" id="accordionExample">

                <div className="accordion-item">

                    <h2 className="accordion-header">

                        <button
                            className=" acor accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                        >
                            2.- Leer escuchando
                        </button>

                    </h2>

                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="cuento accordion-body">
                            <h2 className='titulo'>{props.titulo}</h2>
                            <p className='texto text-start'>{props.texto1}</p>
                            <p className='texto text-start'>{props.texto2}</p>
                            <p className='texto text-start'>{props.texto3}</p>
                            <p className='texto text-start'>{props.texto4}</p>
                            <p className='texto text-start'>{props.texto5}</p>
                            <p className='texto text-start'>{props.texto6}</p>
                            <p className='texto text-start'>{props.texto7}</p>
                            <p className='texto text-start'>{props.texto8}</p>
                            <p className='texto text-start'>{props.texto9}</p>
                            <p className='texto text-start'>{props.texto10}</p>
                        </div>
                    </div>

                </div>

            </div>
    )
}

export default Texto;