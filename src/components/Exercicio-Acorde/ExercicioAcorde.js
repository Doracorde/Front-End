import React from "react";
import { useState } from "react";
import './ExercicioAcorde.css';
import acerto from '../../assets/audio/correctSound.mp3';

export default function ExercicioAcorde(props) {

    const [disabledButtons, setDisabledButtons] = useState([]);

    const playAudio =() =>{
        const audio = new Audio(props.audioFile);
        audio.play();
    }

    const handleOptionClick = (index, option) => {
        if (option !== props.opcaoCorreta) {
            setDisabledButtons([...disabledButtons, index]);
        } else {
            const audio = new Audio(acerto);
            audio.play();
        }
    };

    return (
        <>
            <div className="sessao-exercicio">
                <div className="exercicio-container">
                    <div className="exercicio-titulo">
                        <h3 className="titulo-exercicio">
                            {props.titulo}
                        </h3>
                    </div>
                    <div className="play-container">
                        <button  className="btn-play" onClick={playAudio}>
                            Play e Pause 
                        </button>
                    </div>
                    <div  className="opcoes-container">
                        {props.nomesOpcoes.map((nomeOpcao, index) => (
                            <button
                                key={index}
                                className="btn-opcao"
                                onClick={() => handleOptionClick(index, nomeOpcao)}
                                disabled={disabledButtons.includes(index)}
                            >
                                {nomeOpcao}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}