import React from 'react';
import './footer.css';
import FooterNav from './NavFooter/FooterNav';

export default function Footer() {
    return (
        <>
            <footer className='rodape'>
                <section className='content-rodape'>
                    <aside className='desc-rodape'>
                        <aside className='rodape-logo'>
                            <span className='logo-branco'></span>
                        </aside>
                        <aside className='texto-rodape'>
                            <h6>Harmonia em todos os sentidos.</h6>
                        </aside>
                    </aside>

                    <FooterNav
                        titulo="Compania"
                        nomeInfo={[
                            "Sobre Nós",
                        ]}
                        urls={[
                            "/sobre",
                        ]}
                    />
                    <FooterNav
                        titulo="Aulas"
                        nomeInfo={[
                            "Instrumentos",
                            "Teoria Musical",
                        ]}
                        urls={[
                            "/instrumentos",
                            "/teoria-musical",
                        ]}
                    />
                    <FooterNav
                        titulo="Suporte"
                        nomeInfo={[
                            "FAQ",
                        ]}
                        urls={[
                            "/faq",
                        ]}
                    />
                    <FooterNav
                        titulo="Contato"
                        nomeInfo={[
                           
                            "contatodoracorde@gmail.com",
                        ]}
                        urls={[
                            "mailto:contatodoracorde@gmail.com",
                        ]}
                    />
                </section>

                <hr></hr>
                <section className='direitos-autorais'>
                    <h6>© 2024 Doracorde. Todos Direitos Reservados.</h6>
                </section>
            </footer>
        </>
    );
}
