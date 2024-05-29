import React from "react"
import './FooterNav.css'

export default function FooterNav(props){
    return(
        <>
            <aside className="lista-navegacao">
                <header className="navegacao-cabecalho">
                    <h4>{props.titulo}</h4>
                </header>

                <aside className="info-footer">
                    <ul className="lista-info">
                        {props.nomeInfo.map((info,index) =>{
                            return <li key={index}>{info}</li> 
                        })}
                    </ul>
                </aside>
                
            </aside>
        </>
    )
}