import React from 'react'
import './footer.css'
import NavFooter from '../Footer/NavFooter/FooterNav'


export default function Footer(){
    return(
        <>
            <footer className='rodape'>
                <section className='content-rodape'>
                    <aside className='desc-rodape'> 
                        <aside className='rodape-logo'>
                            <span className='logo-branco'></span>
                        </aside>
                        <aside className='texto-rodape'>
                            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h6>
                        </aside>
                    </aside>
                    
                    <NavFooter
                        titulo ="Compania"
                        nomeInfo={[
                            "Sobre Nós",
                            "Como Funciona",
                            "Popósito",
                            "Serviço",
                        ]}
                    />
                    <NavFooter
                        titulo ="Aulas"
                        nomeInfo={[
                            "Instrumentos",
                            "Teoria Musical",
                            "Vidio Course",
                        ]}
                    />
                    <NavFooter
                        titulo ="Suporte"
                        nomeInfo={[
                            "FAQ",
                            "Help Center",
                            "Career",
                            "Privacy",

                        ]}
                    />
                    <NavFooter
                        titulo ="Contato"
                        nomeInfo={[
                            "+0913-705-3875",
                            "ElizabethJ@jourrapide.com",
                        ]}
                    />
                </section>
                
                <hr></hr>
                <section className='direitos-autorais'>
                        <h6>© 2024 Doracorde. Todos Direitos Reservados. </h6>
                </section>
            </footer>
        </>
       
    )
}