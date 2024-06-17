import React from "react";
import './Depoimento.css';
import Carrossel from "./Carrossel/Carrossel";
import { useTranslation } from 'react-i18next';

export default function Depoimento(){
    const { t } = useTranslation();

    return(
        <>
            <section className="Depoimento">
                <article className="subtitulo">
                    <h4>{t('Feedbacks')}</h4>
                </article>
                <article className="titulo">
                     <h2>{t('Depoimentos')}</h2>
                </article>

                <section className="carrosel-depoimento">
                    <Carrossel />
                </section>
               
            </section>
        </>
    )
}
