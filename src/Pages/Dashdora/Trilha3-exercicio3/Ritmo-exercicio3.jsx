import React from "react";
import ExercicioRitmo from '../../../components/Exercicio-Ritmo/Exercicio-Ritmo'
import '../../../i18n';
import Logo from '../../../assets/img/Logo.png';
import { Link } from 'react-router-dom';



export default function RitmoExercicio() {
    const beatsPerMeasure = 6;
    return (
        <>
            <div className="header-dashdora">
                <Link to='/instrumentos'>
                    <img src={Logo} alt="Doracorde Logo" className="logo" />
                </Link>
            </div>
            <ExercicioRitmo
                beatsPerMeasure={beatsPerMeasure}
            />
        </>
    );
}

