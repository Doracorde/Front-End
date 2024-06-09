import React from "react"
import './FooterNav.css'

export default function FooterNav(props){
    return(
        <>
            <aside className="lista-navegacao">
                <div className="navegacao-cabecalho">
                    <h4>{props.titulo}</h4>
                </div>

                <aside className="info-footer">
                    <ul className="lista-info">
                        {props.nomeInfo.map((info, index) => {
                            return (
                                <li key={index}>
                                    <a href={props.urls[index]}>{info}</a>
                                </li>
                            )
                        })}
                    </ul>
                </aside>
                
            </aside>
        </>
    )
}
