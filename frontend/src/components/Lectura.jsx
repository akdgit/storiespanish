import React from 'react';
import { useState } from 'react';
import './styles/Lectura.css';

const Lectura = (props) => {

    return (
        <div className='row container-fluid d-flex justify-content-center align-content-center lectura'>
            
            <div className='aud col-lg-12 container-fluid text-start d-flex justify-content-center align-content-center '>
                <h2 className="titlec">{props.titlec}</h2>
                <audio 
                    className='audio'
                    controls
                >
                    <source  
                        src={`/audios/audio-${props.audio}.mp3`}
                        type="audio/mpeg"
                    />
                    Tu navegador no soporta el elemento <code>audio</code>.``
                </audio>
            </div>
        </div>
    )
}

export default Lectura;
 