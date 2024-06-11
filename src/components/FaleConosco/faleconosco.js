import React, { useState } from 'react';
import "./faleconosco.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Chatbox } from '@talkjs/react';
import Conosco from '../../assets/img/conosco.png'

export default function FaleConosco() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nome, email, telefone, mensagem);
    };

    return (
        
        <div className="page">
            <div className="contact-page">
                <div className="contact-form">
                    <div className='form-cabecalho'>
                        <h2 className='form-titulo'>Fale conosco</h2>
                        <p>Estamos aqui por você! Como podemos ajudar?</p>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <label>
                            Nome
                            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </label>
                        <label>
                            Email
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label>
                            Telefone
                            <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        </label>
                        <label>
                            Mensagem
                            <input type="msg" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
                        </label>
                        <button className="btn-sobre" type="submit">Enviar</button>
                    </form>
                </div>
                <div className="illustration" alt="Imagem de uma atendente">
                     <img src={Conosco}></img>
                    <div className='faq-info'>
                        <div className="contact-info"> 
                            <Chatbox
                                talkjsContainerId="chat-container"
                                currentUserId="seu-id-de-usuario"
                                targetUserId="id-do-usuario-de-destino"
                            />                        
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span>R. Tito, 54 - Vila Romana</span>
                            </div>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faPhone} />
                                <span>+55 96666-0000</span>
                            </div>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span>doracorde01@gmail.com</span>
                            </div>
                        </div>
                        <div className="social-sidebar">
                             <a href="https://www.instagram.com/doracorde/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/company/doracorde/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                             </a>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

    );
}
