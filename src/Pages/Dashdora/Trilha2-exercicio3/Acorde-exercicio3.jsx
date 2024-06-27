import React from "react";
import ExercicioAcorde from "../../../components/Exercicio-Acorde/ExercicioAcorde";
import acordeAudio from '../../../assets/audio/acorde3-maior.mp3';


export default function AcordeExercicio() {
    return (
        <>
            <ExercicioAcorde
                titulo="Que acorde está sendo tocado ?"
                nomesOpcoes={["maior", "menor", "diminutos", "aumentados", "sus4"]}
                opcaoCorreta="maior"
                audioFile={acordeAudio}
            />
        </>
    )
}