import React from "react";
import ExercicioAcorde from "../../../components/Exercicio-Acorde/ExercicioAcorde";
import acordeAudio from '../../../assets/audio/acorde2-diminutos.mp3';
import { useTranslation } from 'react-i18next';
import '../../../i18n'



export default function AcordeExercicio() {
    const { t } = useTranslation();

    return (
        <>
            <ExercicioAcorde
                titulo={t("Que acorde está sendo tocado ?")}
                nomesOpcoes={[
                    t("maior"),
                    t("menor"),
                    t("diminutos"),
                    t("aumentados"),
                    t("sus4")
                ]}
                opcaoCorreta={t("diminutos")}
                audioFile={acordeAudio}
            />
        </>
    )
}
