import React from "react";
import './Depoimento.css';
import Carrossel from "./Carrossel/Carrossel";

export default function Depoimento(){
    return(
        <>
            <section className="Depoimento">
                <article className="subtitulo">
                    <h4>Feedbacks</h4>
                </article>
                <article className="titulo">
                     <h2>Depoimentos</h2>
                </article>

                <section className="carrosel-depoimento">
                    <Carrossel
                       nomeComentario ="James Pattinson"
                       textoDepoimento ="“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”"
                    />
                   
                </section>
               
            </section>
        </>
    )
}