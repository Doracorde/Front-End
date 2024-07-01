import React from "react";
import ExercicioAcorde from "../../../components/Exercicio-Acorde/ExercicioAcorde";
import acordeAudio from '../../../assets/audio/acorde1-diminutos.mp3';
import { useTranslation } from 'react-i18next';
import '../../../i18n'
import Logo from '../../../assets/img/Logo.png';
import { Link } from 'react-router-dom';

export default function AcordeExercicio() {
    const { t } = useTranslation();

    return (
        <>
            <div className="header-dashdora">
                <Link to='/instrumentos'>
                    <img src={Logo} alt="Doracorde Logo" className="logo" />
                </Link>
            </div>
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
